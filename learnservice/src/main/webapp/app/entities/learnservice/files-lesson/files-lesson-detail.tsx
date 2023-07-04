import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './files-lesson.reducer';

export const FilesLessonDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const filesLessonEntity = useAppSelector(state => state.learnservice.filesLesson.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="filesLessonDetailsHeading">
          <Translate contentKey="learnserviceApp.learnserviceFilesLesson.detail.title">FilesLesson</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{filesLessonEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="learnserviceApp.learnserviceFilesLesson.name">Name</Translate>
            </span>
          </dt>
          <dd>{filesLessonEntity.name}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="learnserviceApp.learnserviceFilesLesson.type">Type</Translate>
            </span>
          </dt>
          <dd>{filesLessonEntity.type}</dd>
          <dt>
            <span id="link">
              <Translate contentKey="learnserviceApp.learnserviceFilesLesson.link">Link</Translate>
            </span>
          </dt>
          <dd>{filesLessonEntity.link}</dd>
          <dt>
            <Translate contentKey="learnserviceApp.learnserviceFilesLesson.lesson">Lesson</Translate>
          </dt>
          <dd>{filesLessonEntity.lesson ? filesLessonEntity.lesson.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/learnservice/files-lesson" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/learnservice/files-lesson/${filesLessonEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default FilesLessonDetail;
