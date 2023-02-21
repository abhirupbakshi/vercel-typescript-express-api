import { ProductRepository } from '../infra/database/repositories/implementations/product.repository';

export class DeleteProductService {
  public constructor(private readonly productRepository: ProductRepository) {}
  public async execute(id: string) {
    return this.productRepository.delete(id);
  }
}
export default DeleteProductService;
