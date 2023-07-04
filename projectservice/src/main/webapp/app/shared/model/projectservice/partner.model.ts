import { IFilesPartner } from 'app/shared/model/projectservice/files-partner.model';

export interface IPartner {
  id?: number;
  name?: string | null;
  nameEn?: string | null;
  link?: string | null;
  filesPartners?: IFilesPartner[] | null;
}

export const defaultValue: Readonly<IPartner> = {};
