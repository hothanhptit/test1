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

  const blogCategoryEntity = useAppSelector(state => state.serviceoverviewservice.blogCategory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="blogCategoryDetailsHeading">
          <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlogCategory.detail.title">BlogCategory</Translate>
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
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlogCategory.type">Type</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.type}</dd>
          <dt>
            <span id="image">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlogCategory.image">Image</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.image}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlogCategory.title">Title</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.title}</dd>
          <dt>
            <span id="titleEn">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlogCategory.titleEn">Title En</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.titleEn}</dd>
          <dt>
            <span id="desctiption">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlogCategory.desctiption">Desctiption</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.desctiption}</dd>
          <dt>
            <span id="desctiptionEn">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlogCategory.desctiptionEn">Desctiption En</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.desctiptionEn}</dd>
          <dt>
            <span id="parent">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlogCategory.parent">Parent</Translate>
            </span>
          </dt>
          <dd>{blogCategoryEntity.parent}</dd>
        </dl>
        <Button tag={Link} to="/serviceoverviewservice/blog-category" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/serviceoverviewservice/blog-category/${blogCategoryEntity.id}/edit`} replace color="primary">
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
