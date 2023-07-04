import { IBlog } from 'app/shared/model/serviceoverviewservice/blog.model';
import { BlogCategoryType } from 'app/shared/model/enumerations/blog-category-type.model';

export interface IBlogCategory {
  id?: number;
  type?: BlogCategoryType | null;
  image?: string | null;
  title?: string | null;
  titleEn?: string | null;
  desctiption?: string | null;
  desctiptionEn?: string | null;
  parent?: number | null;
  blogs?: IBlog[] | null;
}

export const defaultValue: Readonly<IBlogCategory> = {};
