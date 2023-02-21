import { InjectionMode, createContainer, asClass } from 'awilix';
import { ProductController } from './product.controller';

const container = createContainer({
  injectionMode: InjectionMode.PROXY,
});

container.register({
  productController: asClass(ProductController).proxy(),
});

export const productControllerInstance =
  container.resolve<ProductController>('productController');

export default container;
