import React, { useEffect, useState } from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';
import { addTranslationSourcePrefix } from 'app/shared/reducers/locale';
import { useAppDispatch, useAppSelector } from 'app/config/store';

const EntitiesMenu = () => {
  const lastChange = useAppSelector(state => state.locale.lastChange);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addTranslationSourcePrefix('services/serviceoverviewservice/'));
  }, [lastChange]);

  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/serviceoverviewservice/blog">
        <Translate contentKey="global.menu.entities.serviceoverviewserviceBlog" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/serviceoverviewservice/blog-category">
        <Translate contentKey="global.menu.entities.serviceoverviewserviceBlogCategory" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/serviceoverviewservice/comment">
        <Translate contentKey="global.menu.entities.serviceoverviewserviceComment" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/serviceoverviewservice/files-blog">
        <Translate contentKey="global.menu.entities.serviceoverviewserviceFilesBlog" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/serviceoverviewservice/files-comment">
        <Translate contentKey="global.menu.entities.serviceoverviewserviceFilesComment" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
