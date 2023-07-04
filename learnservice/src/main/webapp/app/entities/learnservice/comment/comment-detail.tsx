import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './comment.reducer';

export const CommentDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const commentEntity = useAppSelector(state => state.learnservice.comment.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="commentDetailsHeading">
          <Translate contentKey="learnserviceApp.learnserviceComment.detail.title">Comment</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{commentEntity.id}</dd>
          <dt>
            <span id="content">
              <Translate contentKey="learnserviceApp.learnserviceComment.content">Content</Translate>
            </span>
          </dt>
          <dd>{commentEntity.content}</dd>
          <dt>
            <span id="contentEn">
              <Translate contentKey="learnserviceApp.learnserviceComment.contentEn">Content En</Translate>
            </span>
          </dt>
          <dd>{commentEntity.contentEn}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="learnserviceApp.learnserviceComment.status">Status</Translate>
            </span>
          </dt>
          <dd>{commentEntity.status}</dd>
          <dt>
            <span id="parent">
              <Translate contentKey="learnserviceApp.learnserviceComment.parent">Parent</Translate>
            </span>
          </dt>
          <dd>{commentEntity.parent}</dd>
          <dt>
            <Translate contentKey="learnserviceApp.learnserviceComment.blog">Blog</Translate>
          </dt>
          <dd>{commentEntity.blog ? commentEntity.blog.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/learnservice/comment" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/learnservice/comment/${commentEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CommentDetail;
