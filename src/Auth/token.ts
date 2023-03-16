import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces';

const secret = 'saudadesSequelize';
const signOptions: SignOptions = { expiresIn: '7d', algorithm: 'HS256' };

const createToken = (payload: User) => jwt.sign(payload, secret, signOptions);

export = {
  createToken,
};

// blogsApi:
// const jwtConfig = {
//   expiresIn: '7d',
//   algorithm: 'HS256',
// };
// const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

// return res.status(200).json({ token });

// https://www.programcreek.com/typescript/?api=jsonwebtoken.SignOptions