import { ProductRepository } from '../infra/database/repositories/implementations/product.repository';

export class FindAllProductService {
  constructor(private productRepository: ProductRepository) {}
  public async execute() {
    return this.productRepository.findAll();
  }
}
