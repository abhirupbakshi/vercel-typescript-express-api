import { ProductRepository } from '../infra/database/repositories/implementations/product.repository';
import type { ProductInterface } from '../contract/interfaces/product.interface';

export class UpdateProductService {
  public constructor(private readonly productRepository: ProductRepository) {}
  public async execute(id: string, body: ProductInterface) {
    return this.productRepository.update(id, {
      ...body,
    });
  }
}
export default UpdateProductService;
