import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './courses.reducer';

export const CoursesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const coursesEntity = useAppSelector(state => state.learnservice.courses.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="coursesDetailsHeading">
          <Translate contentKey="learnserviceApp.learnserviceCourses.detail.title">Courses</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{coursesEntity.id}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="learnserviceApp.learnserviceCourses.title">Title</Translate>
            </span>
          </dt>
          <dd>{coursesEntity.title}</dd>
          <dt>
            <span id="titleEn">
              <Translate contentKey="learnserviceApp.learnserviceCourses.titleEn">Title En</Translate>
            </span>
          </dt>
          <dd>{coursesEntity.titleEn}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="learnserviceApp.learnserviceCourses.description">Description</Translate>
            </span>
          </dt>
          <dd>{coursesEntity.description}</dd>
          <dt>
            <span id="descriptionEn">
              <Translate contentKey="learnserviceApp.learnserviceCourses.descriptionEn">Description En</Translate>
            </span>
          </dt>
          <dd>{coursesEntity.descriptionEn}</dd>
          <dt>
            <span id="numLesson">
              <Translate contentKey="learnserviceApp.learnserviceCourses.numLesson">Num Lesson</Translate>
            </span>
          </dt>
          <dd>{coursesEntity.numLesson}</dd>
          <dt>
            <span id="time">
              <Translate contentKey="learnserviceApp.learnserviceCourses.time">Time</Translate>
            </span>
          </dt>
          <dd>{coursesEntity.time}</dd>
          <dt>
            <span id="image">
              <Translate contentKey="learnserviceApp.learnserviceCourses.image">Image</Translate>
            </span>
          </dt>
          <dd>{coursesEntity.image}</dd>
          <dt>
            <span id="price">
              <Translate contentKey="learnserviceApp.learnserviceCourses.price">Price</Translate>
            </span>
          </dt>
          <dd>{coursesEntity.price}</dd>
          <dt>
            <Translate contentKey="learnserviceApp.learnserviceCourses.coursesCategory">Courses Category</Translate>
          </dt>
          <dd>{coursesEntity.coursesCategory ? coursesEntity.coursesCategory.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/learnservice/courses" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/learnservice/courses/${coursesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CoursesDetail;
