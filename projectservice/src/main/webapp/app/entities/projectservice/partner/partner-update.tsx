import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPartner } from 'app/shared/model/projectservice/partner.model';
import { getEntity, updateEntity, createEntity, reset } from './partner.reducer';

export const PartnerUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const partnerEntity = useAppSelector(state => state.projectservice.partner.entity);
  const loading = useAppSelector(state => state.projectservice.partner.loading);
  const updating = useAppSelector(state => state.projectservice.partner.updating);
  const updateSuccess = useAppSelector(state => state.projectservice.partner.updateSuccess);

  const handleClose = () => {
    navigate('/projectservice/partner' + location.search);
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
      ...partnerEntity,
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
          ...partnerEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectserviceApp.projectservicePartner.home.createOrEditLabel" data-cy="PartnerCreateUpdateHeading">
            <Translate contentKey="projectserviceApp.projectservicePartner.home.createOrEditLabel">Create or edit a Partner</Translate>
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
                  id="partner-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('projectserviceApp.projectservicePartner.name')}
                id="partner-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectservicePartner.nameEn')}
                id="partner-nameEn"
                name="nameEn"
                data-cy="nameEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectservicePartner.link')}
                id="partner-link"
                name="link"
                data-cy="link"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/projectservice/partner" replace color="info">
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

export default PartnerUpdate;
