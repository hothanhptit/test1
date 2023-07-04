import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './blog-category.reducer';

export const BlogCategoryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const blogCategoryEntity = useAppSelector(state => state.learnservice.blogCategory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="blogCategoryDetailsHeading">
          <Translate contentKey="learnserviceApp.learnserviceBlogCategory.detail.title">BlogCategory</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.id}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="learnserviceApp.learnserviceBlogCategory.type">Type</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.type}</dd>
          <dt>
            <span id="image">
              <Translate contentKey="learnserviceApp.learnserviceBlogCategory.image">Image</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.image}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="learnserviceApp.learnserviceBlogCategory.title">Title</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.title}</dd>
          <dt>
            <span id="titleEn">
              <Translate contentKey="learnserviceApp.learnserviceBlogCategory.titleEn">Title En</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.titleEn}</dd>
          <dt>
            <span id="desctiption">
              <Translate contentKey="learnserviceApp.learnserviceBlogCategory.desctiption">Desctiption</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.desctiption}</dd>
          <dt>
            <span id="desctiptionEn">
              <Translate contentKey="learnserviceApp.learnserviceBlogCategory.desctiptionEn">Desctiption En</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.desctiptionEn}</dd>
          <dt>
            <span id="parent">
              <Translate contentKey="learnserviceApp.learnserviceBlogCategory.parent">Parent</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.parent}</dd>
        </dl>
        <Button tag={Link} to="/learnservice/blog-category" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/learnservice/blog-category/${blogCategoryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default BlogCategoryDetail;
