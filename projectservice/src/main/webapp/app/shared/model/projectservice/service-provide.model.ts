export interface IServiceProvide {
  id?: number;
  image?: string | null;
  title?: string | null;
  titleEn?: string | null;
  shortDescription?: string | null;
  shortDescriptionEn?: string | null;
  link?: string | null;
}

export const defaultValue: Readonly<IServiceProvide> = {};
