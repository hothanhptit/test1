import { IFilesLesson } from 'app/shared/model/learnservice/files-lesson.model';
import { ICourses } from 'app/shared/model/learnservice/courses.model';

export interface ILesson {
  id?: number;
  name?: string | null;
  nameEn?: string | null;
  description?: string | null;
  descriptionEn?: string | null;
  video?: string | null;
  filesLessons?: IFilesLesson[] | null;
  courses?: ICourses | null;
}

export const defaultValue: Readonly<ILesson> = {};
