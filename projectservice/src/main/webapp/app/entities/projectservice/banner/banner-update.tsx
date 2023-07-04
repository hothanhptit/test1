import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBanner } from 'app/shared/model/projectservice/banner.model';
import { BannerType } from 'app/shared/model/enumerations/banner-type.model';
import { getEntity, updateEntity, createEntity, reset } from './banner.reducer';

export const BannerUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const bannerEntity = useAppSelector(state => state.projectservice.banner.entity);
  const loading = useAppSelector(state => state.projectservice.banner.loading);
  const updating = useAppSelector(state => state.projectservice.banner.updating);
  const updateSuccess = useAppSelector(state => state.projectservice.banner.updateSuccess);
  const bannerTypeValues = Object.keys(BannerType);

  const handleClose = () => {
    navigate('/projectservice/banner' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...bannerEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          type: 'HOMEPAGE',
          ...bannerEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectserviceApp.projectserviceBanner.home.createOrEditLabel" data-cy="BannerCreateUpdateHeading">
            <Translate contentKey="projectserviceApp.projectserviceBanner.home.createOrEditLabel">Create or edit a Banner</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="banner-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('projectserviceApp.projectserviceBanner.type')}
                id="banner-type"
                name="type"
                data-cy="type"
                type="select"
              >
                {bannerTypeValues.map(bannerType => (
                  <option value={bannerType} key={bannerType}>
                    {translate('projectserviceApp.BannerType.' + bannerType)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('projectserviceApp.projectserviceBanner.label')}
                id="banner-label"
                name="label"
                data-cy="label"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceBanner.labelEn')}
                id="banner-labelEn"
                name="labelEn"
                data-cy="labelEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceBanner.desctiption')}
                id="banner-desctiption"
                name="desctiption"
                data-cy="desctiption"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceBanner.desctiptionEn')}
                id="banner-desctiptionEn"
                name="desctiptionEn"
                data-cy="desctiptionEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceBanner.link')}
                id="banner-link"
                name="link"
                data-cy="link"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/projectservice/banner" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default BannerUpdate;
