import { IFilesAboutUs } from 'app/shared/model/projectservice/files-about-us.model';

export interface IAboutUs {
  id?: number;
  slogan?: string | null;
  sloganEn?: string | null;
  about?: string | null;
  aboutEn?: string | null;
  mission?: string | null;
  missionEn?: string | null;
  filesAboutuses?: IFilesAboutUs[] | null;
}

export const defaultValue: Readonly<IAboutUs> = {};
