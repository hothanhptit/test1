import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBanner } from 'app/shared/model/projectservice/banner.model';
import { getEntities as getBanners } from 'app/entities/projectservice/banner/banner.reducer';
import { IFilesBanner } from 'app/shared/model/projectservice/files-banner.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';
import { getEntity, updateEntity, createEntity, reset } from './files-banner.reducer';

export const FilesBannerUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const banners = useAppSelector(state => state.projectservice.banner.entities);
  const filesBannerEntity = useAppSelector(state => state.projectservice.filesBanner.entity);
  const loading = useAppSelector(state => state.projectservice.filesBanner.loading);
  const updating = useAppSelector(state => state.projectservice.filesBanner.updating);
  const updateSuccess = useAppSelector(state => state.projectservice.filesBanner.updateSuccess);
  const filesTypeValues = Object.keys(FilesType);

  const handleClose = () => {
    navigate('/projectservice/files-banner' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getBanners({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...filesBannerEntity,
      ...values,
      banner: banners.find(it => it.id.toString() === values.banner.toString()),
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
          type: 'IMAGE',
          ...filesBannerEntity,
          banner: filesBannerEntity?.banner?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectserviceApp.projectserviceFilesBanner.home.createOrEditLabel" data-cy="FilesBannerCreateUpdateHeading">
            <Translate contentKey="projectserviceApp.projectserviceFilesBanner.home.createOrEditLabel">
              Create or edit a FilesBanner
            </Translate>
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
                  id="files-banner-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('projectserviceApp.projectserviceFilesBanner.name')}
                id="files-banner-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceFilesBanner.type')}
                id="files-banner-type"
                name="type"
                data-cy="type"
                type="select"
              >
                {filesTypeValues.map(filesType => (
                  <option value={filesType} key={filesType}>
                    {translate('projectserviceApp.FilesType.' + filesType)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('projectserviceApp.projectserviceFilesBanner.link')}
                id="files-banner-link"
                name="link"
                data-cy="link"
                type="text"
              />
              <ValidatedField
                id="files-banner-banner"
                name="banner"
                data-cy="banner"
                label={translate('projectserviceApp.projectserviceFilesBanner.banner')}
                type="select"
              >
                <option value="" key="0" />
                {banners
                  ? banners.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/projectservice/files-banner" replace color="info">
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

export default FilesBannerUpdate;
