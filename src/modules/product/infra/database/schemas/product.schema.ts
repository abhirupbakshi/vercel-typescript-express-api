import { Schema } from 'mongoose';

const SchemaTypes = Schema.Types;

const ProductSchema = new Schema(
  {
    _id: {
      type: SchemaTypes.String,
      required: true,
    },
    name: {
      type: SchemaTypes.String,
      required: true,
    },
    slug: {
      type: SchemaTypes.String,
      required: true,
    },
    quantity: {
      type: SchemaTypes.Number,
      required: true,
    },
    image: {
      type: SchemaTypes.String,
      required: true,
    },
    price: {
      type: SchemaTypes.Number,
      required: true,
    },
    description: {
      type: SchemaTypes.String,
      required: true,
    },
    guarantee: {
      type: SchemaTypes.String,
      required: true,
    },
    brand: {
      type: SchemaTypes.String,
      required: true,
    },
    model: {
      type: SchemaTypes.String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    autoCreate: true,
  }
);

export default ProductSchema;
