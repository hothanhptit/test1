import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPartner } from 'app/shared/model/projectservice/partner.model';
import { getEntities as getPartners } from 'app/entities/projectservice/partner/partner.reducer';
import { IFilesPartner } from 'app/shared/model/projectservice/files-partner.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';
import { getEntity, updateEntity, createEntity, reset } from './files-partner.reducer';

export const FilesPartnerUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const partners = useAppSelector(state => state.projectservice.partner.entities);
  const filesPartnerEntity = useAppSelector(state => state.projectservice.filesPartner.entity);
  const loading = useAppSelector(state => state.projectservice.filesPartner.loading);
  const updating = useAppSelector(state => state.projectservice.filesPartner.updating);
  const updateSuccess = useAppSelector(state => state.projectservice.filesPartner.updateSuccess);
  const filesTypeValues = Object.keys(FilesType);

  const handleClose = () => {
    navigate('/projectservice/files-partner' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getPartners({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...filesPartnerEntity,
      ...values,
      partner: partners.find(it => it.id.toString() === values.partner.toString()),
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
          ...filesPartnerEntity,
          partner: filesPartnerEntity?.partner?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectserviceApp.projectserviceFilesPartner.home.createOrEditLabel" data-cy="FilesPartnerCreateUpdateHeading">
            <Translate contentKey="projectserviceApp.projectserviceFilesPartner.home.createOrEditLabel">
              Create or edit a FilesPartner
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
                  id="files-partner-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('projectserviceApp.projectserviceFilesPartner.name')}
                id="files-partner-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceFilesPartner.type')}
                id="files-partner-type"
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
                label={translate('projectserviceApp.projectserviceFilesPartner.link')}
                id="files-partner-link"
                name="link"
                data-cy="link"
                type="text"
              />
              <ValidatedField
                id="files-partner-partner"
                name="partner"
                data-cy="partner"
                label={translate('projectserviceApp.projectserviceFilesPartner.partner')}
                type="select"
              >
                <option value="" key="0" />
                {partners
                  ? partners.map(otherEntity => (
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
                to="/projectservice/files-partner"
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

export default FilesPartnerUpdate;
