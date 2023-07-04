import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICoursesCategory } from 'app/shared/model/learnservice/courses-category.model';
import { getEntities as getCoursesCategories } from 'app/entities/learnservice/courses-category/courses-category.reducer';
import { ICourses } from 'app/shared/model/learnservice/courses.model';
import { getEntity, updateEntity, createEntity, reset } from './courses.reducer';

export const CoursesUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const coursesCategories = useAppSelector(state => state.learnservice.coursesCategory.entities);
  const coursesEntity = useAppSelector(state => state.learnservice.courses.entity);
  const loading = useAppSelector(state => state.learnservice.courses.loading);
  const updating = useAppSelector(state => state.learnservice.courses.updating);
  const updateSuccess = useAppSelector(state => state.learnservice.courses.updateSuccess);

  const handleClose = () => {
    navigate('/learnservice/courses' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getCoursesCategories({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...coursesEntity,
      ...values,
      coursesCategory: coursesCategories.find(it => it.id.toString() === values.coursesCategory.toString()),
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
          ...coursesEntity,
          coursesCategory: coursesEntity?.coursesCategory?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="learnserviceApp.learnserviceCourses.home.createOrEditLabel" data-cy="CoursesCreateUpdateHeading">
            <Translate contentKey="learnserviceApp.learnserviceCourses.home.createOrEditLabel">Create or edit a Courses</Translate>
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
                  id="courses-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCourses.title')}
                id="courses-title"
                name="title"
                data-cy="title"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCourses.titleEn')}
                id="courses-titleEn"
                name="titleEn"
                data-cy="titleEn"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCourses.description')}
                id="courses-description"
                name="description"
                data-cy="description"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCourses.descriptionEn')}
                id="courses-descriptionEn"
                name="descriptionEn"
                data-cy="descriptionEn"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCourses.numLesson')}
                id="courses-numLesson"
                name="numLesson"
                data-cy="numLesson"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCourses.time')}
                id="courses-time"
                name="time"
                data-cy="time"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCourses.image')}
                id="courses-image"
                name="image"
                data-cy="image"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceCourses.price')}
                id="courses-price"
                name="price"
                data-cy="price"
                type="text"
              />
              <ValidatedField
                id="courses-coursesCategory"
                name="coursesCategory"
                data-cy="coursesCategory"
                label={translate('learnserviceApp.learnserviceCourses.coursesCategory')}
                type="select"
              >
                <option value="" key="0" />
                {coursesCategories
                  ? coursesCategories.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/learnservice/courses" replace color="info">
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

export default CoursesUpdate;
