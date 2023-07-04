import { IComment } from 'app/shared/model/serviceoverviewservice/comment.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';

export interface IFilesComment {
  id?: number;
  name?: string | null;
  type?: FilesType | null;
  link?: string | null;
  comment?: IComment | null;
}

export const defaultValue: Readonly<IFilesComment> = {};
