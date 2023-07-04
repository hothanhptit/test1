import { IPartner } from 'app/shared/model/projectservice/partner.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';

export interface IFilesPartner {
  id?: number;
  name?: string | null;
  type?: FilesType | null;
  link?: string | null;
  partner?: IPartner | null;
}

export const defaultValue: Readonly<IFilesPartner> = {};
