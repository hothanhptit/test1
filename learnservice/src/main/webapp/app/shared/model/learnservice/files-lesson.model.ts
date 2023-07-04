import { ILesson } from 'app/shared/model/learnservice/lesson.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';

export interface IFilesLesson {
  id?: number;
  name?: string | null;
  type?: FilesType | null;
  link?: string | null;
  lesson?: ILesson | null;
}

export const defaultValue: Readonly<IFilesLesson> = {};
