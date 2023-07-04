import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IOutstanding } from 'app/shared/model/projectservice/outstanding.model';
import { getEntity, updateEntity, createEntity, reset } from './outstanding.reducer';

export const OutstandingUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const outstandingEntity = useAppSelector(state => state.projectservice.outstanding.entity);
  const loading = useAppSelector(state => state.projectservice.outstanding.loading);
  const updating = useAppSelector(state => state.projectservice.outstanding.updating);
  const updateSuccess = useAppSelector(state => state.projectservice.outstanding.updateSuccess);

  const handleClose = () => {
    navigate('/projectservice/outstanding' + location.search);
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
      ...outstandingEntity,
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
          ...outstandingEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectserviceApp.projectserviceOutstanding.home.createOrEditLabel" data-cy="OutstandingCreateUpdateHeading">
            <Translate contentKey="projectserviceApp.projectserviceOutstanding.home.createOrEditLabel">
              Create or edit a Outstanding
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
                  id="outstanding-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('projectserviceApp.projectserviceOutstanding.image')}
                id="outstanding-image"
                name="image"
                data-cy="image"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceOutstanding.title')}
                id="outstanding-title"
                name="title"
                data-cy="title"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceOutstanding.titleEn')}
                id="outstanding-titleEn"
                name="titleEn"
                data-cy="titleEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceOutstanding.description')}
                id="outstanding-description"
                name="description"
                data-cy="description"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceOutstanding.descriptionEn')}
                id="outstanding-descriptionEn"
                name="descriptionEn"
                data-cy="descriptionEn"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/projectservice/outstanding" replace color="info">
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

export default OutstandingUpdate;
