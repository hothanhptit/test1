import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IServiceProvide } from 'app/shared/model/projectservice/service-provide.model';
import { getEntity, updateEntity, createEntity, reset } from './service-provide.reducer';

export const ServiceProvideUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const serviceProvideEntity = useAppSelector(state => state.projectservice.serviceProvide.entity);
  const loading = useAppSelector(state => state.projectservice.serviceProvide.loading);
  const updating = useAppSelector(state => state.projectservice.serviceProvide.updating);
  const updateSuccess = useAppSelector(state => state.projectservice.serviceProvide.updateSuccess);

  const handleClose = () => {
    navigate('/projectservice/service-provide' + location.search);
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
      ...serviceProvideEntity,
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
          ...serviceProvideEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectserviceApp.projectserviceServiceProvide.home.createOrEditLabel" data-cy="ServiceProvideCreateUpdateHeading">
            <Translate contentKey="projectserviceApp.projectserviceServiceProvide.home.createOrEditLabel">
              Create or edit a ServiceProvide
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
                  id="service-provide-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('projectserviceApp.projectserviceServiceProvide.image')}
                id="service-provide-image"
                name="image"
                data-cy="image"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceServiceProvide.title')}
                id="service-provide-title"
                name="title"
                data-cy="title"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceServiceProvide.titleEn')}
                id="service-provide-titleEn"
                name="titleEn"
                data-cy="titleEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceServiceProvide.shortDescription')}
                id="service-provide-shortDescription"
                name="shortDescription"
                data-cy="shortDescription"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceServiceProvide.shortDescriptionEn')}
                id="service-provide-shortDescriptionEn"
                name="shortDescriptionEn"
                data-cy="shortDescriptionEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceServiceProvide.link')}
                id="service-provide-link"
                name="link"
                data-cy="link"
                type="text"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/projectservice/service-provide"
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

export default ServiceProvideUpdate;
