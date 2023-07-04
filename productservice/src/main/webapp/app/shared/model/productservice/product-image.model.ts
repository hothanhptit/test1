import { IProduct } from 'app/shared/model/productservice/product.model';

export interface IProductImage {
  id?: number;
  title?: string | null;
  titleEn?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
  image?: string | null;
  product?: IProduct | null;
}

export const defaultValue: Readonly<IProductImage> = {};
