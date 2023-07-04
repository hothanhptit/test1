import { IAboutUs } from 'app/shared/model/projectservice/about-us.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';

export interface IFilesAboutUs {
  id?: number;
  name?: string | null;
  type?: FilesType | null;
  link?: string | null;
  aboutUs?: IAboutUs | null;
}

export const defaultValue: Readonly<IFilesAboutUs> = {};
