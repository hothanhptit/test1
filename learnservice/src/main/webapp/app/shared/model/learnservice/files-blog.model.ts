import { IBlog } from 'app/shared/model/learnservice/blog.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';

export interface IFilesBlog {
  id?: number;
  name?: string | null;
  type?: FilesType | null;
  link?: string | null;
  blog?: IBlog | null;
}

export const defaultValue: Readonly<IFilesBlog> = {};
