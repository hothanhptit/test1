import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICoursesCategory } from 'app/shared/model/learnservice/courses-category.model';
import { getEntity, updateEntity, createEntity, reset } from './courses-category.reducer';

export const CoursesCategoryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const coursesCategoryEntity = useAppSelector(state => state.learnservice.coursesCategory.entity);
  const loading = useAppSelector(state => state.learnservice.coursesCategory.loading);
  const updating = useAppSelector(state => state.learnservice.coursesCategory.updating);
  const updateSuccess = useAppSelector(state => state.learnservice.coursesCategory.updateSuccess);

  const handleClose = () => {
    navigate('/learnservice/courses-category' + location.search);
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
      ...coursesCategoryEntity,
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
          ...coursesCategoryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="learnserviceApp.learnserviceCoursesCategory.home.createOrEditLabel" data-cy="CoursesCategoryCreateUpdateHeading">
            <Translate contentKey="learnserviceApp.learnserviceCoursesCategory.home.createOrEditLabel">
              Create or edit a CoursesCategory
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
                  id="courses-category-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCoursesCategory.name')}
                id="courses-category-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCoursesCategory.nameEn')}
                id="courses-category-nameEn"
                name="nameEn"
                data-cy="nameEn"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCoursesCategory.description')}
                id="courses-category-description"
                name="description"
                data-cy="description"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCoursesCategory.descriptionEn')}
                id="courses-category-descriptionEn"
                name="descriptionEn"
                data-cy="descriptionEn"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCoursesCategory.parentId')}
                id="courses-category-parentId"
                name="parentId"
                data-cy="parentId"
                type="text"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/learnservice/courses-category"
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

export default CoursesCategoryUpdate;
