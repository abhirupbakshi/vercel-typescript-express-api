import crypto from 'node:crypto';

import productModel from '../../models/product.model';

import { HttpException } from '../../../../../../shared/helpers/errors/HttpException';
import { HttpStatus } from '../../../../../../shared/enums/http-status.enum';

import type { ProductInterface } from '../../../../contract/interfaces/product.interface';

export class ProductRepository {
  public async create(body: ProductInterface) {
    const product = await productModel.create({
      ...body,
      _id: crypto.randomUUID(),
    });
    if (!product) {
      throw new HttpException('Product not created!', HttpStatus.BAD_REQUEST);
    }
    return product;
  }

  public async findAll() {
    const product = await productModel.find();
    if (!product) {
      return Promise.resolve([]);
    }
    return product;
  }
  public async findOne(id: string) {
    const product = await productModel.findOne({ _id: id });
    if (!product) {
      throw new HttpException('Product not found!', HttpStatus.NOT_FOUND);
    }

    return product;
  }

  public async update(id: string, body: ProductInterface) {
    const product = await productModel.findOneAndUpdate(
      { _id: id },
      {
        ...body,
      }
    );
    if (!product) {
      throw new HttpException('Product not updated!', HttpStatus.BAD_REQUEST);
    }
    return product;
  }

  public async delete(id: string) {
    const product = await this.findOne(id);
    const deletedProduct = await productModel.deleteOne({ _id: id });
    if (!deletedProduct) {
      throw new HttpException('Product not deleted!', HttpStatus.BAD_REQUEST);
    }
    return product;
  }
}
