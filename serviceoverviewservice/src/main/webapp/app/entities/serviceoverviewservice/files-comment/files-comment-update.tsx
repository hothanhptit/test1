import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IComment } from 'app/shared/model/serviceoverviewservice/comment.model';
import { getEntities as getComments } from 'app/entities/serviceoverviewservice/comment/comment.reducer';
import { IFilesComment } from 'app/shared/model/serviceoverviewservice/files-comment.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';
import { getEntity, updateEntity, createEntity, reset } from './files-comment.reducer';

export const FilesCommentUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const comments = useAppSelector(state => state.serviceoverviewservice.comment.entities);
  const filesCommentEntity = useAppSelector(state => state.serviceoverviewservice.filesComment.entity);
  const loading = useAppSelector(state => state.serviceoverviewservice.filesComment.loading);
  const updating = useAppSelector(state => state.serviceoverviewservice.filesComment.updating);
  const updateSuccess = useAppSelector(state => state.serviceoverviewservice.filesComment.updateSuccess);
  const filesTypeValues = Object.keys(FilesType);

  const handleClose = () => {
    navigate('/serviceoverviewservice/files-comment' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getComments({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...filesCommentEntity,
      ...values,
      comment: comments.find(it => it.id.toString() === values.comment.toString()),
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
          type: 'IMAGE',
          ...filesCommentEntity,
          comment: filesCommentEntity?.comment?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="serviceoverviewserviceApp.serviceoverviewserviceFilesComment.home.createOrEditLabel"
            data-cy="FilesCommentCreateUpdateHeading"
          >
            <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceFilesComment.home.createOrEditLabel">
              Create or edit a FilesComment
            </Translate>
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
                  id="files-comment-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceFilesComment.name')}
                id="files-comment-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceFilesComment.type')}
                id="files-comment-type"
                name="type"
                data-cy="type"
                type="select"
              >
                {filesTypeValues.map(filesType => (
                  <option value={filesType} key={filesType}>
                    {translate('serviceoverviewserviceApp.FilesType.' + filesType)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceFilesComment.link')}
                id="files-comment-link"
                name="link"
                data-cy="link"
                type="text"
              />
              <ValidatedField
                id="files-comment-comment"
                name="comment"
                data-cy="comment"
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceFilesComment.comment')}
                type="select"
              >
                <option value="" key="0" />
                {comments
                  ? comments.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/serviceoverviewservice/files-comment"
                replace
                color="info"
              >
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

export default FilesCommentUpdate;
