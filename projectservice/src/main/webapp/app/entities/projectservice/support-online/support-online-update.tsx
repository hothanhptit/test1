import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISupportOnline } from 'app/shared/model/projectservice/support-online.model';
import { SupportOnlineType } from 'app/shared/model/enumerations/support-online-type.model';
import { getEntity, updateEntity, createEntity, reset } from './support-online.reducer';

export const SupportOnlineUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const supportOnlineEntity = useAppSelector(state => state.projectservice.supportOnline.entity);
  const loading = useAppSelector(state => state.projectservice.supportOnline.loading);
  const updating = useAppSelector(state => state.projectservice.supportOnline.updating);
  const updateSuccess = useAppSelector(state => state.projectservice.supportOnline.updateSuccess);
  const supportOnlineTypeValues = Object.keys(SupportOnlineType);

  const handleClose = () => {
    navigate('/projectservice/support-online' + location.search);
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
      ...supportOnlineEntity,
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
          type: 'FACEBOOK',
          ...supportOnlineEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectserviceApp.projectserviceSupportOnline.home.createOrEditLabel" data-cy="SupportOnlineCreateUpdateHeading">
            <Translate contentKey="projectserviceApp.projectserviceSupportOnline.home.createOrEditLabel">
              Create or edit a SupportOnline
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
                  id="support-online-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('projectserviceApp.projectserviceSupportOnline.avatar')}
                id="support-online-avatar"
                name="avatar"
                data-cy="avatar"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceSupportOnline.type')}
                id="support-online-type"
                name="type"
                data-cy="type"
                type="select"
              >
                {supportOnlineTypeValues.map(supportOnlineType => (
                  <option value={supportOnlineType} key={supportOnlineType}>
                    {translate('projectserviceApp.SupportOnlineType.' + supportOnlineType)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('projectserviceApp.projectserviceSupportOnline.script')}
                id="support-online-script"
                name="script"
                data-cy="script"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceSupportOnline.fullname')}
                id="support-online-fullname"
                name="fullname"
                data-cy="fullname"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceSupportOnline.description')}
                id="support-online-description"
                name="description"
                data-cy="description"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceSupportOnline.descriptionEn')}
                id="support-online-descriptionEn"
                name="descriptionEn"
                data-cy="descriptionEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceSupportOnline.enable')}
                id="support-online-enable"
                name="enable"
                data-cy="enable"
                check
                type="checkbox"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/projectservice/support-online"
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

export default SupportOnlineUpdate;
