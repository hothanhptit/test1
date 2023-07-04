export interface IQuote {
  id?: number;
  index?: number | null;
  label?: string | null;
  labelEn?: string | null;
  title?: string | null;
  titleEn?: string | null;
  subTitle?: string | null;
  subTitleEn?: string | null;
  content?: string | null;
  contentEn?: string | null;
  highline?: boolean | null;
  price?: string | null;
  priceEn?: string | null;
}

export const defaultValue: Readonly<IQuote> = {
  highline: false,
};
