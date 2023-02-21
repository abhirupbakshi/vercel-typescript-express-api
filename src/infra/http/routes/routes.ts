import { Router } from 'express';

import DefaultRouter from '../../../modules/status/infra/http/routes/default.route';
import ProductRouter from '../../../modules/product/infra/http/routes/product.routes';

const Routes = Router();

Routes.use('/', DefaultRouter);
Routes.use('/product', ProductRouter);

export default Routes;
