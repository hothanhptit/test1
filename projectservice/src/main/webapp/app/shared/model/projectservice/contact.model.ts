export interface IContact {
  id?: number;
  fullname?: string | null;
  email?: string | null;
  phone?: string | null;
  content?: string | null;
  response?: string | null;
  status?: number | null;
}

export const defaultValue: Readonly<IContact> = {};
