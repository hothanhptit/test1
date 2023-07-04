import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAboutUs } from 'app/shared/model/projectservice/about-us.model';
import { getEntity, updateEntity, createEntity, reset } from './about-us.reducer';

export const AboutUsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const aboutUsEntity = useAppSelector(state => state.projectservice.aboutUs.entity);
  const loading = useAppSelector(state => state.projectservice.aboutUs.loading);
  const updating = useAppSelector(state => state.projectservice.aboutUs.updating);
  const updateSuccess = useAppSelector(state => state.projectservice.aboutUs.updateSuccess);

  const handleClose = () => {
    navigate('/projectservice/about-us' + location.search);
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
      ...aboutUsEntity,
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
          ...aboutUsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectserviceApp.projectserviceAboutUs.home.createOrEditLabel" data-cy="AboutUsCreateUpdateHeading">
            <Translate contentKey="projectserviceApp.projectserviceAboutUs.home.createOrEditLabel">Create or edit a AboutUs</Translate>
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
                  id="about-us-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('projectserviceApp.projectserviceAboutUs.slogan')}
                id="about-us-slogan"
                name="slogan"
                data-cy="slogan"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceAboutUs.sloganEn')}
                id="about-us-sloganEn"
                name="sloganEn"
                data-cy="sloganEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceAboutUs.about')}
                id="about-us-about"
                name="about"
                data-cy="about"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceAboutUs.aboutEn')}
                id="about-us-aboutEn"
                name="aboutEn"
                data-cy="aboutEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceAboutUs.mission')}
                id="about-us-mission"
                name="mission"
                data-cy="mission"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceAboutUs.missionEn')}
                id="about-us-missionEn"
                name="missionEn"
                data-cy="missionEn"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/projectservice/about-us" replace color="info">
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

export default AboutUsUpdate;
