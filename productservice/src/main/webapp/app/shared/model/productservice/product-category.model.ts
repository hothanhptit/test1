import { IProduct } from 'app/shared/model/productservice/product.model';

export interface IProductCategory {
  id?: number;
  name?: string | null;
  nameEn?: string | null;
  image?: string | null;
  parentId?: number | null;
  products?: IProduct[] | null;
}

export const defaultValue: Readonly<IProductCategory> = {};
