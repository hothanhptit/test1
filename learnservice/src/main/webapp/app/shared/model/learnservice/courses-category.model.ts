import { ICourses } from 'app/shared/model/learnservice/courses.model';

export interface ICoursesCategory {
  id?: number;
  name?: string | null;
  nameEn?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
  parentId?: number | null;
  courses?: ICourses[] | null;
}

export const defaultValue: Readonly<ICoursesCategory> = {};
