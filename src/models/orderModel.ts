import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const query = `SELECT ord.id, ord.user_id AS userId, JSON_ARRAYAGG(prod.id) AS
     productsIds FROM Trybesmith.orders AS ord INNER JOIN
      Trybesmith.products AS prod ON ord.id = prod.order_id GROUP BY ord.id ORDER BY ord.user_id;`;
    const [orders] = await this.connection.execute(query);
    return orders as Order[];
  }
}

// {
//   "id": 1,
//   "userId": 2,
//   "productsIds": [1, 2]
// },

// Trybesmith.Orders AS ord
// ord.user_id AS userId
// ord.id
// Trybesmith.Products AS prod
// prod.id AS productsIds
// prod.order_id

// https://dev.mysql.com/doc/refman/5.7/en/aggregate-functions.html#function_json-arrayagg
