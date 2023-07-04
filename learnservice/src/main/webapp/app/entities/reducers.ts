import blog from 'app/entities/learnservice/blog/blog.reducer';
import blogCategory from 'app/entities/learnservice/blog-category/blog-category.reducer';
import comment from 'app/entities/learnservice/comment/comment.reducer';
import courses from 'app/entities/learnservice/courses/courses.reducer';
import coursesCategory from 'app/entities/learnservice/courses-category/courses-category.reducer';
import filesBlog from 'app/entities/learnservice/files-blog/files-blog.reducer';
import filesComment from 'app/entities/learnservice/files-comment/files-comment.reducer';
import filesLesson from 'app/entities/learnservice/files-lesson/files-lesson.reducer';
import lesson from 'app/entities/learnservice/lesson/lesson.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  blog,
  blogCategory,
  comment,
  courses,
  coursesCategory,
  filesBlog,
  filesComment,
  filesLesson,
  lesson,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
