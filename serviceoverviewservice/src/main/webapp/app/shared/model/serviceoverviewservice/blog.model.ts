import { IFilesBlog } from 'app/shared/model/serviceoverviewservice/files-blog.model';
import { IComment } from 'app/shared/model/serviceoverviewservice/comment.model';
import { IBlogCategory } from 'app/shared/model/serviceoverviewservice/blog-category.model';
import { BlogStatus } from 'app/shared/model/enumerations/blog-status.model';

export interface IBlog {
  id?: number;
  title?: string | null;
  titleEn?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
  content?: string | null;
  contentEn?: string | null;
  onwer?: string | null;
  status?: BlogStatus | null;
  view?: number | null;
  filesBlogs?: IFilesBlog[] | null;
  comments?: IComment[] | null;
  blogCategory?: IBlogCategory | null;
}

export const defaultValue: Readonly<IBlog> = {};
