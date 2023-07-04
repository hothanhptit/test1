import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBlog } from 'app/shared/model/learnservice/blog.model';
import { getEntities as getBlogs } from 'app/entities/learnservice/blog/blog.reducer';
import { IComment } from 'app/shared/model/learnservice/comment.model';
import { CommentStatus } from 'app/shared/model/enumerations/comment-status.model';
import { getEntity, updateEntity, createEntity, reset } from './comment.reducer';

export const CommentUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const blogs = useAppSelector(state => state.learnservice.blog.entities);
  const commentEntity = useAppSelector(state => state.learnservice.comment.entity);
  const loading = useAppSelector(state => state.learnservice.comment.loading);
  const updating = useAppSelector(state => state.learnservice.comment.updating);
  const updateSuccess = useAppSelector(state => state.learnservice.comment.updateSuccess);
  const commentStatusValues = Object.keys(CommentStatus);

  const handleClose = () => {
    navigate('/learnservice/comment' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getBlogs({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...commentEntity,
      ...values,
      blog: blogs.find(it => it.id.toString() === values.blog.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          status: 'PUBLISH',
          ...commentEntity,
          blog: commentEntity?.blog?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="learnserviceApp.learnserviceComment.home.createOrEditLabel" data-cy="CommentCreateUpdateHeading">
            <Translate contentKey="learnserviceApp.learnserviceComment.home.createOrEditLabel">Create or edit a Comment</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="comment-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('learnserviceApp.learnserviceComment.content')}
                id="comment-content"
                name="content"
                data-cy="content"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceComment.contentEn')}
                id="comment-contentEn"
                name="contentEn"
                data-cy="contentEn"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceComment.status')}
                id="comment-status"
                name="status"
                data-cy="status"
                type="select"
              >
                {commentStatusValues.map(commentStatus => (
                  <option value={commentStatus} key={commentStatus}>
                    {translate('learnserviceApp.CommentStatus.' + commentStatus)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('learnserviceApp.learnserviceComment.parent')}
                id="comment-parent"
                name="parent"
                data-cy="parent"
                type="text"
              />
              <ValidatedField
                id="comment-blog"
                name="blog"
                data-cy="blog"
                label={translate('learnserviceApp.learnserviceComment.blog')}
                type="select"
              >
                <option value="" key="0" />
                {blogs
                  ? blogs.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/learnservice/comment" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default CommentUpdate;
