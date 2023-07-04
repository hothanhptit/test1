import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './files-comment.reducer';

export const FilesCommentDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const filesCommentEntity = useAppSelector(state => state.serviceoverviewservice.filesComment.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="filesCommentDetailsHeading">
          <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceFilesComment.detail.title">FilesComment</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{filesCommentEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceFilesComment.name">Name</Translate>
            </span>
          </dt>
          <dd>{filesCommentEntity.name}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceFilesComment.type">Type</Translate>
            </span>
          </dt>
          <dd>{filesCommentEntity.type}</dd>
          <dt>
            <span id="link">
              <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceFilesComment.link">Link</Translate>
            </span>
          </dt>
          <dd>{filesCommentEntity.link}</dd>
          <dt>
            <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceFilesComment.comment">Comment</Translate>
          </dt>
          <dd>{filesCommentEntity.comment ? filesCommentEntity.comment.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/serviceoverviewservice/files-comment" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/serviceoverviewservice/files-comment/${filesCommentEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default FilesCommentDetail;
