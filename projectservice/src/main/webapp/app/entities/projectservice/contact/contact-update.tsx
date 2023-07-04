import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IContact } from 'app/shared/model/projectservice/contact.model';
import { getEntity, updateEntity, createEntity, reset } from './contact.reducer';

export const ContactUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const contactEntity = useAppSelector(state => state.projectservice.contact.entity);
  const loading = useAppSelector(state => state.projectservice.contact.loading);
  const updating = useAppSelector(state => state.projectservice.contact.updating);
  const updateSuccess = useAppSelector(state => state.projectservice.contact.updateSuccess);

  const handleClose = () => {
    navigate('/projectservice/contact' + location.search);
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
      ...contactEntity,
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
          ...contactEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectserviceApp.projectserviceContact.home.createOrEditLabel" data-cy="ContactCreateUpdateHeading">
            <Translate contentKey="projectserviceApp.projectserviceContact.home.createOrEditLabel">Create or edit a Contact</Translate>
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
                  id="contact-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('projectserviceApp.projectserviceContact.fullname')}
                id="contact-fullname"
                name="fullname"
                data-cy="fullname"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceContact.email')}
                id="contact-email"
                name="email"
                data-cy="email"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceContact.phone')}
                id="contact-phone"
                name="phone"
                data-cy="phone"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceContact.content')}
                id="contact-content"
                name="content"
                data-cy="content"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceContact.response')}
                id="contact-response"
                name="response"
                data-cy="response"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceContact.status')}
                id="contact-status"
                name="status"
                data-cy="status"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/projectservice/contact" replace color="info">
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

export default ContactUpdate;
