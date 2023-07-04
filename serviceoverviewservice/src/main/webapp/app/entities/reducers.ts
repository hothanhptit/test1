import blog from 'app/entities/serviceoverviewservice/blog/blog.reducer';
import blogCategory from 'app/entities/serviceoverviewservice/blog-category/blog-category.reducer';
import comment from 'app/entities/serviceoverviewservice/comment/comment.reducer';
import filesBlog from 'app/entities/serviceoverviewservice/files-blog/files-blog.reducer';
import filesComment from 'app/entities/serviceoverviewservice/files-comment/files-comment.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  blog,
  blogCategory,
  comment,
  filesBlog,
  filesComment,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
