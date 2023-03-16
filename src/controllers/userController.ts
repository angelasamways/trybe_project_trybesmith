import { Request, Response } from 'express';
import UserService from '../services/userService';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const newUser = req.body;

    const token = await this.userService.create(newUser);
    // console.log('userToken no Controller');
    // console.log(token);
    // console.log('newUser no Controller');
    // console.log(newUser);
    
    res.status(201).json({ token });
  };
}
export default UserController;
