import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './blog.reducer';

export const BlogDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const blogEntity = useAppSelector(state => state.serviceoverviewservice.blog.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="blogDetailsHeading">
          <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.detail.title">Blog</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{blogEntity.id}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.title">Title</Translate>
            </span>
          </dt>
          <dd>{blogEntity.title}</dd>
          <dt>
            <span id="titleEn">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.titleEn">Title En</Translate>
            </span>
          </dt>
          <dd>{blogEntity.titleEn}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.description">Description</Translate>
            </span>
          </dt>
          <dd>{blogEntity.description}</dd>
          <dt>
            <span id="descriptionEn">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.descriptionEn">Description En</Translate>
            </span>
          </dt>
          <dd>{blogEntity.descriptionEn}</dd>
          <dt>
            <span id="content">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.content">Content</Translate>
            </span>
          </dt>
          <dd>{blogEntity.content}</dd>
          <dt>
            <span id="contentEn">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.contentEn">Content En</Translate>
            </span>
          </dt>
          <dd>{blogEntity.contentEn}</dd>
          <dt>
            <span id="onwer">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.onwer">Onwer</Translate>
            </span>
          </dt>
          <dd>{blogEntity.onwer}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.status">Status</Translate>
            </span>
          </dt>
          <dd>{blogEntity.status}</dd>
          <dt>
            <span id="view">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.view">View</Translate>
            </span>
          </dt>
          <dd>{blogEntity.view}</dd>
          <dt>
            <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.blogCategory">Blog Category</Translate>
          </dt>
          <dd>{blogEntity.blogCategory ? blogEntity.blogCategory.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/serviceoverviewservice/blog" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/serviceoverviewservice/blog/${blogEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default BlogDetail;
