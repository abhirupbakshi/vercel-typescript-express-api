import { Router } from 'express';

import { productControllerInstance } from '../controllers';

const ProductRouter = Router();

ProductRouter.post('/', productControllerInstance.create);
ProductRouter.get('/', productControllerInstance.findAll);
ProductRouter.get('/:id', productControllerInstance.findOne);
ProductRouter.put('/:id', productControllerInstance.update);
ProductRouter.delete('/:id', productControllerInstance.delete);

export default ProductRouter;
