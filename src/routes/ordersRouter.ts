import { Router } from 'express';
import OrderController from '../controllers/orderController';

const ordersRouter = Router();
const orderController = new OrderController();

ordersRouter.get('/', orderController.getAll);

export default ordersRouter;