import type { Request, Response } from 'express';

import { CreateProductService } from '../../../services/create-product.service';
import { FindAllProductService } from '../../../services/find-all-product.service';
import { UpdateProductService } from '../../../services/update-product.service';
import { DeleteProductService } from '../../../services/delete-product.service';
import { FindOneProductService } from '../../../services/find-one-product.service';

import { HttpStatus } from '../../../../../shared/enums/http-status.enum';

import { productRepositoryInstance } from '../../database/repositories';

import type { ProductInterface } from '../../../contract/interfaces/product.interface';

export class ProductController {
  public async create(req: Request, res: Response) {
    const body: ProductInterface = req.body;
    const createProductService = new CreateProductService(
      productRepositoryInstance
    );
    try {
      const product = await createProductService.execute({
        ...body,
      });

      return res.status(HttpStatus.CREATED).json(product);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  public async findAll(req: Request, res: Response) {
    const findAllProductService = new FindAllProductService(
      productRepositoryInstance
    );
    try {
      const product = await findAllProductService.execute();

      return res.status(HttpStatus.OK).json(product);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }
  public async findOne(req: Request, res: Response) {
    const { id } = req.params;

    const findOneProductService = new FindOneProductService(
      productRepositoryInstance
    );
    try {
      const product = await findOneProductService.execute(id);

      return res.status(HttpStatus.OK).json(product);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }
  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const body: ProductInterface = req.body;

    const updateProductService = new UpdateProductService(
      productRepositoryInstance
    );
    try {
      await updateProductService.execute(id, {
        ...body,
      });

      return res.status(HttpStatus.NO_CONTENT);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteProductService = new DeleteProductService(
      productRepositoryInstance
    );
    try {
      const product = await deleteProductService.execute(id);

      return res.status(HttpStatus.OK).json(product);
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}
