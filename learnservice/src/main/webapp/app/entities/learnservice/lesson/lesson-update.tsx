import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICourses } from 'app/shared/model/learnservice/courses.model';
import { getEntities as getCourses } from 'app/entities/learnservice/courses/courses.reducer';
import { ILesson } from 'app/shared/model/learnservice/lesson.model';
import { getEntity, updateEntity, createEntity, reset } from './lesson.reducer';

export const LessonUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const courses = useAppSelector(state => state.learnservice.courses.entities);
  const lessonEntity = useAppSelector(state => state.learnservice.lesson.entity);
  const loading = useAppSelector(state => state.learnservice.lesson.loading);
  const updating = useAppSelector(state => state.learnservice.lesson.updating);
  const updateSuccess = useAppSelector(state => state.learnservice.lesson.updateSuccess);

  const handleClose = () => {
    navigate('/learnservice/lesson' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getCourses({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...lessonEntity,
      ...values,
      courses: courses.find(it => it.id.toString() === values.courses.toString()),
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
          ...lessonEntity,
          courses: lessonEntity?.courses?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="learnserviceApp.learnserviceLesson.home.createOrEditLabel" data-cy="LessonCreateUpdateHeading">
            <Translate contentKey="learnserviceApp.learnserviceLesson.home.createOrEditLabel">Create or edit a Lesson</Translate>
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
                  id="lesson-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('learnserviceApp.learnserviceLesson.name')}
                id="lesson-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceLesson.nameEn')}
                id="lesson-nameEn"
                name="nameEn"
                data-cy="nameEn"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceLesson.description')}
                id="lesson-description"
                name="description"
                data-cy="description"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceLesson.descriptionEn')}
                id="lesson-descriptionEn"
                name="descriptionEn"
                data-cy="descriptionEn"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceLesson.video')}
                id="lesson-video"
                name="video"
                data-cy="video"
                type="text"
              />
              <ValidatedField
                id="lesson-courses"
                name="courses"
                data-cy="courses"
                label={translate('learnserviceApp.learnserviceLesson.courses')}
                type="select"
              >
                <option value="" key="0" />
                {courses
                  ? courses.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/learnservice/lesson" replace color="info">
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

export default LessonUpdate;
