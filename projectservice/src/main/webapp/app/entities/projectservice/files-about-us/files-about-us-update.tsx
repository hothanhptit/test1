import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAboutUs } from 'app/shared/model/projectservice/about-us.model';
import { getEntities as getAboutuses } from 'app/entities/projectservice/about-us/about-us.reducer';
import { IFilesAboutUs } from 'app/shared/model/projectservice/files-about-us.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';
import { getEntity, updateEntity, createEntity, reset } from './files-about-us.reducer';

export const FilesAboutUsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const aboutuses = useAppSelector(state => state.projectservice.aboutUs.entities);
  const filesAboutUsEntity = useAppSelector(state => state.projectservice.filesAboutUs.entity);
  const loading = useAppSelector(state => state.projectservice.filesAboutUs.loading);
  const updating = useAppSelector(state => state.projectservice.filesAboutUs.updating);
  const updateSuccess = useAppSelector(state => state.projectservice.filesAboutUs.updateSuccess);
  const filesTypeValues = Object.keys(FilesType);

  const handleClose = () => {
    navigate('/projectservice/files-about-us' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getAboutuses({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...filesAboutUsEntity,
      ...values,
      aboutUs: aboutuses.find(it => it.id.toString() === values.aboutUs.toString()),
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
          ...filesAboutUsEntity,
          aboutUs: filesAboutUsEntity?.aboutUs?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectserviceApp.projectserviceFilesAboutUs.home.createOrEditLabel" data-cy="FilesAboutUsCreateUpdateHeading">
            <Translate contentKey="projectserviceApp.projectserviceFilesAboutUs.home.createOrEditLabel">
              Create or edit a FilesAboutUs
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
                  id="files-about-us-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('projectserviceApp.projectserviceFilesAboutUs.name')}
                id="files-about-us-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceFilesAboutUs.type')}
                id="files-about-us-type"
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
                label={translate('projectserviceApp.projectserviceFilesAboutUs.link')}
                id="files-about-us-link"
                name="link"
                data-cy="link"
                type="text"
              />
              <ValidatedField
                id="files-about-us-aboutUs"
                name="aboutUs"
                data-cy="aboutUs"
                label={translate('projectserviceApp.projectserviceFilesAboutUs.aboutUs')}
                type="select"
              >
                <option value="" key="0" />
                {aboutuses
                  ? aboutuses.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/projectservice/files-about-us"
                replace
                color="info"
              >
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

export default FilesAboutUsUpdate;
