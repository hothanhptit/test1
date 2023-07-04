import { SupportOnlineType } from 'app/shared/model/enumerations/support-online-type.model';

export interface ISupportOnline {
  id?: number;
  avatar?: string | null;
  type?: SupportOnlineType | null;
  script?: string | null;
  fullname?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
  enable?: boolean | null;
}

export const defaultValue: Readonly<ISupportOnline> = {
  enable: false,
};
