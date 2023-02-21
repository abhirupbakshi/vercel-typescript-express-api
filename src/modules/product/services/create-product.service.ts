import { ProductRepository } from '../infra/database/repositories/implementations/product.repository';
import type { ProductInterface } from '../contract/interfaces/product.interface';

export class CreateProductService {
  public constructor(private readonly productRepository: ProductRepository) {}
  public async execute(body: ProductInterface) {
    return this.productRepository.create({
      ...body,
    });
  }
}
export default CreateProductService;
