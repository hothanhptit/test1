import React, { useEffect, useState } from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';
import { addTranslationSourcePrefix } from 'app/shared/reducers/locale';
import { useAppDispatch, useAppSelector } from 'app/config/store';

const EntitiesMenu = () => {
  const lastChange = useAppSelector(state => state.locale.lastChange);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addTranslationSourcePrefix('services/productservice/'));
  }, [lastChange]);

  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/productservice/product">
        <Translate contentKey="global.menu.entities.productserviceProduct" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/productservice/product-category">
        <Translate contentKey="global.menu.entities.productserviceProductCategory" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/productservice/product-image">
        <Translate contentKey="global.menu.entities.productserviceProductImage" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
