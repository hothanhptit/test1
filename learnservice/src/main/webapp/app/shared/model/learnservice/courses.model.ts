import { ILesson } from 'app/shared/model/learnservice/lesson.model';
import { ICoursesCategory } from 'app/shared/model/learnservice/courses-category.model';

export interface ICourses {
  id?: number;
  title?: string | null;
  titleEn?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
  numLesson?: string | null;
  time?: string | null;
  image?: string | null;
  price?: number | null;
  lessons?: ILesson[] | null;
  coursesCategory?: ICoursesCategory | null;
}

export const defaultValue: Readonly<ICourses> = {};
