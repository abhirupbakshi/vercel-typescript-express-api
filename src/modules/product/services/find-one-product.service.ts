import { ProductRepository } from '../infra/database/repositories/implementations/product.repository';

export class FindOneProductService {
  public constructor(private readonly productRepository: ProductRepository) {}
  public async execute(id: string) {
    return this.productRepository.findOne(id);
  }
}
export default FindOneProductService;
