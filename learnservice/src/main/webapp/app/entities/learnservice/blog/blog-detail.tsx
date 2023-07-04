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

  const blogEntity = useAppSelector(state => state.learnservice.blog.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="blogDetailsHeading">
          <Translate contentKey="learnserviceApp.learnserviceBlog.detail.title">Blog</Translate>
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
              <Translate contentKey="learnserviceApp.learnserviceBlog.title">Title</Translate>
            </span>
          </dt>
          <dd>{blogEntity.title}</dd>
          <dt>
            <span id="titleEn">
              <Translate contentKey="learnserviceApp.learnserviceBlog.titleEn">Title En</Translate>
            </span>
          </dt>
          <dd>{blogEntity.titleEn}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="learnserviceApp.learnserviceBlog.description">Description</Translate>
            </span>
          </dt>
          <dd>{blogEntity.description}</dd>
          <dt>
            <span id="descriptionEn">
              <Translate contentKey="learnserviceApp.learnserviceBlog.descriptionEn">Description En</Translate>
            </span>
          </dt>
          <dd>{blogEntity.descriptionEn}</dd>
          <dt>
            <span id="content">
              <Translate contentKey="learnserviceApp.learnserviceBlog.content">Content</Translate>
            </span>
          </dt>
          <dd>{blogEntity.content}</dd>
          <dt>
            <span id="contentEn">
              <Translate contentKey="learnserviceApp.learnserviceBlog.contentEn">Content En</Translate>
            </span>
          </dt>
          <dd>{blogEntity.contentEn}</dd>
          <dt>
            <span id="onwer">
              <Translate contentKey="learnserviceApp.learnserviceBlog.onwer">Onwer</Translate>
            </span>
          </dt>
          <dd>{blogEntity.onwer}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="learnserviceApp.learnserviceBlog.status">Status</Translate>
            </span>
          </dt>
          <dd>{blogEntity.status}</dd>
          <dt>
            <span id="view">
              <Translate contentKey="learnserviceApp.learnserviceBlog.view">View</Translate>
            </span>
          </dt>
          <dd>{blogEntity.view}</dd>
          <dt>
            <Translate contentKey="learnserviceApp.learnserviceBlog.blogCategory">Blog Category</Translate>
          </dt>
          <dd>{blogEntity.blogCategory ? blogEntity.blogCategory.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/learnservice/blog" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/learnservice/blog/${blogEntity.id}/edit`} replace color="primary">
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
