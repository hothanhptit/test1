export interface IOutstanding {
  id?: number;
  image?: string | null;
  title?: string | null;
  titleEn?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
}

export const defaultValue: Readonly<IOutstanding> = {};
