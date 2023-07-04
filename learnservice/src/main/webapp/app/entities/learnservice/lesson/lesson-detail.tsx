import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './lesson.reducer';

export const LessonDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const lessonEntity = useAppSelector(state => state.learnservice.lesson.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="lessonDetailsHeading">
          <Translate contentKey="learnserviceApp.learnserviceLesson.detail.title">Lesson</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{lessonEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="learnserviceApp.learnserviceLesson.name">Name</Translate>
            </span>
          </dt>
          <dd>{lessonEntity.name}</dd>
          <dt>
            <span id="nameEn">
              <Translate contentKey="learnserviceApp.learnserviceLesson.nameEn">Name En</Translate>
            </span>
          </dt>
          <dd>{lessonEntity.nameEn}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="learnserviceApp.learnserviceLesson.description">Description</Translate>
            </span>
          </dt>
          <dd>{lessonEntity.description}</dd>
          <dt>
            <span id="descriptionEn">
              <Translate contentKey="learnserviceApp.learnserviceLesson.descriptionEn">Description En</Translate>
            </span>
          </dt>
          <dd>{lessonEntity.descriptionEn}</dd>
          <dt>
            <span id="video">
              <Translate contentKey="learnserviceApp.learnserviceLesson.video">Video</Translate>
            </span>
          </dt>
          <dd>{lessonEntity.video}</dd>
          <dt>
            <Translate contentKey="learnserviceApp.learnserviceLesson.courses">Courses</Translate>
          </dt>
          <dd>{lessonEntity.courses ? lessonEntity.courses.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/learnservice/lesson" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/learnservice/lesson/${lessonEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default LessonDetail;
