import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './courses-category.reducer';

export const CoursesCategoryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const coursesCategoryEntity = useAppSelector(state => state.learnservice.coursesCategory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="coursesCategoryDetailsHeading">
          <Translate contentKey="learnserviceApp.learnserviceCoursesCategory.detail.title">CoursesCategory</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{coursesCategoryEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="learnserviceApp.learnserviceCoursesCategory.name">Name</Translate>
            </span>
          </dt>
          <dd>{coursesCategoryEntity.name}</dd>
          <dt>
            <span id="nameEn">
              <Translate contentKey="learnserviceApp.learnserviceCoursesCategory.nameEn">Name En</Translate>
            </span>
          </dt>
          <dd>{coursesCategoryEntity.nameEn}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="learnserviceApp.learnserviceCoursesCategory.description">Description</Translate>
            </span>
          </dt>
          <dd>{coursesCategoryEntity.description}</dd>
          <dt>
            <span id="descriptionEn">
              <Translate contentKey="learnserviceApp.learnserviceCoursesCategory.descriptionEn">Description En</Translate>
            </span>
          </dt>
          <dd>{coursesCategoryEntity.descriptionEn}</dd>
          <dt>
            <span id="parentId">
              <Translate contentKey="learnserviceApp.learnserviceCoursesCategory.parentId">Parent Id</Translate>
            </span>
          </dt>
          <dd>{coursesCategoryEntity.parentId}</dd>
        </dl>
        <Button tag={Link} to="/learnservice/courses-category" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/learnservice/courses-category/${coursesCategoryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CoursesCategoryDetail;
