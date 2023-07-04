import { IBanner } from 'app/shared/model/projectservice/banner.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';

export interface IFilesBanner {
  id?: number;
  name?: string | null;
  type?: FilesType | null;
  link?: string | null;
  banner?: IBanner | null;
}

export const defaultValue: Readonly<IFilesBanner> = {};
