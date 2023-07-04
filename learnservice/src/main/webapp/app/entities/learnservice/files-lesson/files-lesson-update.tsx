import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ILesson } from 'app/shared/model/learnservice/lesson.model';
import { getEntities as getLessons } from 'app/entities/learnservice/lesson/lesson.reducer';
import { IFilesLesson } from 'app/shared/model/learnservice/files-lesson.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';
import { getEntity, updateEntity, createEntity, reset } from './files-lesson.reducer';

export const FilesLessonUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const lessons = useAppSelector(state => state.learnservice.lesson.entities);
  const filesLessonEntity = useAppSelector(state => state.learnservice.filesLesson.entity);
  const loading = useAppSelector(state => state.learnservice.filesLesson.loading);
  const updating = useAppSelector(state => state.learnservice.filesLesson.updating);
  const updateSuccess = useAppSelector(state => state.learnservice.filesLesson.updateSuccess);
  const filesTypeValues = Object.keys(FilesType);

  const handleClose = () => {
    navigate('/learnservice/files-lesson' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getLessons({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...filesLessonEntity,
      ...values,
      lesson: lessons.find(it => it.id.toString() === values.lesson.toString()),
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
          ...filesLessonEntity,
          lesson: filesLessonEntity?.lesson?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="learnserviceApp.learnserviceFilesLesson.home.createOrEditLabel" data-cy="FilesLessonCreateUpdateHeading">
            <Translate contentKey="learnserviceApp.learnserviceFilesLesson.home.createOrEditLabel">Create or edit a FilesLesson</Translate>
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
                  id="files-lesson-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('learnserviceApp.learnserviceFilesLesson.name')}
                id="files-lesson-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceFilesLesson.type')}
                id="files-lesson-type"
                name="type"
                data-cy="type"
                type="select"
              >
                {filesTypeValues.map(filesType => (
                  <option value={filesType} key={filesType}>
                    {translate('learnserviceApp.FilesType.' + filesType)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('learnserviceApp.learnserviceFilesLesson.link')}
                id="files-lesson-link"
                name="link"
                data-cy="link"
                type="text"
              />
              <ValidatedField
                id="files-lesson-lesson"
                name="lesson"
                data-cy="lesson"
                label={translate('learnserviceApp.learnserviceFilesLesson.lesson')}
                type="select"
              >
                <option value="" key="0" />
                {lessons
                  ? lessons.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/learnservice/files-lesson" replace color="info">
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

export default FilesLessonUpdate;
