import React, { useEffect, useState } from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';
import { addTranslationSourcePrefix } from 'app/shared/reducers/locale';
import { useAppDispatch, useAppSelector } from 'app/config/store';

const EntitiesMenu = () => {
  const lastChange = useAppSelector(state => state.locale.lastChange);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addTranslationSourcePrefix('services/learnservice/'));
  }, [lastChange]);

  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/learnservice/blog">
        <Translate contentKey="global.menu.entities.learnserviceBlog" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/learnservice/blog-category">
        <Translate contentKey="global.menu.entities.learnserviceBlogCategory" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/learnservice/comment">
        <Translate contentKey="global.menu.entities.learnserviceComment" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/learnservice/courses">
        <Translate contentKey="global.menu.entities.learnserviceCourses" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/learnservice/courses-category">
        <Translate contentKey="global.menu.entities.learnserviceCoursesCategory" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/learnservice/files-blog">
        <Translate contentKey="global.menu.entities.learnserviceFilesBlog" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/learnservice/files-comment">
        <Translate contentKey="global.menu.entities.learnserviceFilesComment" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/learnservice/files-lesson">
        <Translate contentKey="global.menu.entities.learnserviceFilesLesson" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/learnservice/lesson">
        <Translate contentKey="global.menu.entities.learnserviceLesson" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
