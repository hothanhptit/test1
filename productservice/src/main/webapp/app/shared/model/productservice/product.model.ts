import { IProductImage } from 'app/shared/model/productservice/product-image.model';
import { IProductCategory } from 'app/shared/model/productservice/product-category.model';

export interface IProduct {
  id?: number;
  name?: string | null;
  nameEn?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
  star?: boolean | null;
  link?: string | null;
  productImages?: IProductImage[] | null;
  productCategory?: IProductCategory | null;
}

export const defaultValue: Readonly<IProduct> = {
  star: false,
};
