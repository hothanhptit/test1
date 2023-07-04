import React, { useEffect, useState } from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';
import { addTranslationSourcePrefix } from 'app/shared/reducers/locale';
import { useAppDispatch, useAppSelector } from 'app/config/store';

const EntitiesMenu = () => {
  const lastChange = useAppSelector(state => state.locale.lastChange);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addTranslationSourcePrefix('services/projectservice/'));
  }, [lastChange]);

  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/projectservice/about-us">
        <Translate contentKey="global.menu.entities.projectserviceAboutUs" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/projectservice/banner">
        <Translate contentKey="global.menu.entities.projectserviceBanner" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/projectservice/contact">
        <Translate contentKey="global.menu.entities.projectserviceContact" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/projectservice/files-about-us">
        <Translate contentKey="global.menu.entities.projectserviceFilesAboutUs" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/projectservice/files-banner">
        <Translate contentKey="global.menu.entities.projectserviceFilesBanner" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/projectservice/files-partner">
        <Translate contentKey="global.menu.entities.projectserviceFilesPartner" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/projectservice/outstanding">
        <Translate contentKey="global.menu.entities.projectserviceOutstanding" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/projectservice/partner">
        <Translate contentKey="global.menu.entities.projectservicePartner" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/projectservice/quote">
        <Translate contentKey="global.menu.entities.projectserviceQuote" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/projectservice/service-provide">
        <Translate contentKey="global.menu.entities.projectserviceServiceProvide" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/projectservice/support-online">
        <Translate contentKey="global.menu.entities.projectserviceSupportOnline" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
