import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, vocation, level, password } = user;
    const query = `INSERT INTO Trybesmith.users 
    (username, vocation, level, password) VALUES (?, ?, ?, ?)`;
    const result = await this.connection.execute<ResultSetHeader>(
      query,
      [username, vocation, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    const newUser = { id: insertId, username, vocation, level, password };
    // console.log('user no Model');
    // console.log(user);
    // console.log('newUser no Model');
    // console.log(newUser);
    return newUser;
  }
}
