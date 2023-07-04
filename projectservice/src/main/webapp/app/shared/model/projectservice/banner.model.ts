import { IFilesBanner } from 'app/shared/model/projectservice/files-banner.model';
import { BannerType } from 'app/shared/model/enumerations/banner-type.model';

export interface IBanner {
  id?: number;
  type?: BannerType | null;
  label?: string | null;
  labelEn?: string | null;
  desctiption?: string | null;
  desctiptionEn?: string | null;
  link?: string | null;
  filesBanners?: IFilesBanner[] | null;
}

export const defaultValue: Readonly<IBanner> = {};
