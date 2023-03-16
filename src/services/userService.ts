import connection from '../models/connection';
import UserModel from '../models/userModel';
import { User } from '../interfaces/index';
import token from '../Auth/token';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }
    
  public async create(newUser: User): Promise<string> {
    const result = await this.model.create(newUser);
    const userToken = token.createToken(result);
    // console.log('newUser no Service');
    // console.log(newUser);
    // console.log('userToken no Service');
    // console.log(userToken);
    
    return userToken;
  }
}

export default UserService;
