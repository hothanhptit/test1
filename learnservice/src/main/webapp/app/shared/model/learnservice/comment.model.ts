import { IFilesComment } from 'app/shared/model/learnservice/files-comment.model';
import { IBlog } from 'app/shared/model/learnservice/blog.model';
import { CommentStatus } from 'app/shared/model/enumerations/comment-status.model';

export interface IComment {
  id?: number;
  content?: string | null;
  contentEn?: string | null;
  status?: CommentStatus | null;
  parent?: number | null;
  filesComments?: IFilesComment[] | null;
  blog?: IBlog | null;
}

export const defaultValue: Readonly<IComment> = {};
