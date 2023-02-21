import { Model, Document, model } from 'mongoose';

import { PRODUCT_MODEL_NAME } from '../../../shared/constants/product.constant';
import ProductSchema from '../schemas/product.schema';
import { ProductInterface } from '../../../contract/interfaces/product.interface';

export type ProductDocument = Document & ProductInterface;

type ProductModel = Model<ProductDocument>;

export default model<ProductDocument, ProductModel>(
  PRODUCT_MODEL_NAME,
  ProductSchema,
  PRODUCT_MODEL_NAME
);
