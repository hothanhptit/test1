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
import { IFilesBlog } from 'app/shared/model/learnservice/files-blog.model';
import { FilesType } from 'app/shared/model/enumerations/files-type.model';
import { getEntity, updateEntity, createEntity, reset } from './files-blog.reducer';

export const FilesBlogUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const blogs = useAppSelector(state => state.learnservice.blog.entities);
  const filesBlogEntity = useAppSelector(state => state.learnservice.filesBlog.entity);
  const loading = useAppSelector(state => state.learnservice.filesBlog.loading);
  const updating = useAppSelector(state => state.learnservice.filesBlog.updating);
  const updateSuccess = useAppSelector(state => state.learnservice.filesBlog.updateSuccess);
  const filesTypeValues = Object.keys(FilesType);

  const handleClose = () => {
    navigate('/learnservice/files-blog' + location.search);
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
      ...filesBlogEntity,
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
          type: 'IMAGE',
          ...filesBlogEntity,
          blog: filesBlogEntity?.blog?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="learnserviceApp.learnserviceFilesBlog.home.createOrEditLabel" data-cy="FilesBlogCreateUpdateHeading">
            <Translate contentKey="learnserviceApp.learnserviceFilesBlog.home.createOrEditLabel">Create or edit a FilesBlog</Translate>
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
                  id="files-blog-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('learnserviceApp.learnserviceFilesBlog.name')}
                id="files-blog-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceFilesBlog.type')}
                id="files-blog-type"
                name="type"
                data-cy="type"
                type="select"
              >
                {filesTypeValues.map(filesType => (
                  <option value={filesType} key={filesType}>
                    {translate('learnserviceApp.FilesType.' + filesType)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('learnserviceApp.learnserviceFilesBlog.link')}
                id="files-blog-link"
                name="link"
                data-cy="link"
                type="text"
              />
              <ValidatedField
                id="files-blog-blog"
                name="blog"
                data-cy="blog"
                label={translate('learnserviceApp.learnserviceFilesBlog.blog')}
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/learnservice/files-blog" replace color="info">
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

export default FilesBlogUpdate;
