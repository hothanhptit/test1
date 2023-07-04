import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './files-blog.reducer';

export const FilesBlogDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const filesBlogEntity = useAppSelector(state => state.serviceoverviewservice.filesBlog.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="filesBlogDetailsHeading">
          <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceFilesBlog.detail.title">FilesBlog</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{filesBlogEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceFilesBlog.name">Name</Translate>
            </span>
          </dt>
          <dd>{filesBlogEntity.name}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceFilesBlog.type">Type</Translate>
            </span>
          </dt>
          <dd>{filesBlogEntity.type}</dd>
          <dt>
            <span id="link">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceFilesBlog.link">Link</Translate>
            </span>
          </dt>
          <dd>{filesBlogEntity.link}</dd>
          <dt>
            <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceFilesBlog.blog">Blog</Translate>
          </dt>
          <dd>{filesBlogEntity.blog ? filesBlogEntity.blog.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/serviceoverviewservice/files-blog" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/serviceoverviewservice/files-blog/${filesBlogEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default FilesBlogDetail;
