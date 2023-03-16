import express from 'express';
import ordersRouter from './routes/ordersRouter';
import productsRouter from './routes/productRouter';
import usersRouter from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

export default app;
