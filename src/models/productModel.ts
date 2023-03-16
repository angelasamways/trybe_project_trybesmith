import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
    const result = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    console.log(result);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    const newProduct = { id: insertId, name, amount };
    return newProduct;
  }

  public async getAll(): Promise<Product[]> {
    const query = 'SELECT * FROM Trybesmith.products';
    const [products] = await this.connection.execute(query);
    return products as Product[];
  }
}