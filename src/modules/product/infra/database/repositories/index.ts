import { asClass, createContainer } from 'awilix';

import { ProductRepository } from './implementations/product.repository';

interface IRepository {
  productRepository: ProductRepository;
}

const container = createContainer<IRepository>();

container.register({
  productRepository: asClass(ProductRepository),
});
export const productRepositoryInstance =
  container.resolve<ProductRepository>('productRepository');

export default container;
