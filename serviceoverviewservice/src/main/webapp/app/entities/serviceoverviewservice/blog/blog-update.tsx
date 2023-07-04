import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBlogCategory } from 'app/shared/model/serviceoverviewservice/blog-category.model';
import { getEntities as getBlogCategories } from 'app/entities/serviceoverviewservice/blog-category/blog-category.reducer';
import { IBlog } from 'app/shared/model/serviceoverviewservice/blog.model';
import { BlogStatus } from 'app/shared/model/enumerations/blog-status.model';
import { getEntity, updateEntity, createEntity, reset } from './blog.reducer';

export const BlogUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const blogCategories = useAppSelector(state => state.serviceoverviewservice.blogCategory.entities);
  const blogEntity = useAppSelector(state => state.serviceoverviewservice.blog.entity);
  const loading = useAppSelector(state => state.serviceoverviewservice.blog.loading);
  const updating = useAppSelector(state => state.serviceoverviewservice.blog.updating);
  const updateSuccess = useAppSelector(state => state.serviceoverviewservice.blog.updateSuccess);
  const blogStatusValues = Object.keys(BlogStatus);

  const handleClose = () => {
    navigate('/serviceoverviewservice/blog' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getBlogCategories({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...blogEntity,
      ...values,
      blogCategory: blogCategories.find(it => it.id.toString() === values.blogCategory.toString()),
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
          status: 'CANCEL',
          ...blogEntity,
          blogCategory: blogEntity?.blogCategory?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="serviceoverviewserviceApp.serviceoverviewserviceBlog.home.createOrEditLabel" data-cy="BlogCreateUpdateHeading">
            <Translate contentKey="serviceoverviewserviceApp.serviceoverviewserviceBlog.home.createOrEditLabel">
              Create or edit a Blog
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
                  id="blog-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceBlog.title')}
                id="blog-title"
                name="title"
                data-cy="title"
                type="text"
              />
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceBlog.titleEn')}
                id="blog-titleEn"
                name="titleEn"
                data-cy="titleEn"
                type="text"
              />
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceBlog.description')}
                id="blog-description"
                name="description"
                data-cy="description"
                type="text"
              />
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceBlog.descriptionEn')}
                id="blog-descriptionEn"
                name="descriptionEn"
                data-cy="descriptionEn"
                type="text"
              />
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceBlog.content')}
                id="blog-content"
                name="content"
                data-cy="content"
                type="text"
              />
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceBlog.contentEn')}
                id="blog-contentEn"
                name="contentEn"
                data-cy="contentEn"
                type="text"
              />
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceBlog.onwer')}
                id="blog-onwer"
                name="onwer"
                data-cy="onwer"
                type="text"
              />
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceBlog.status')}
                id="blog-status"
                name="status"
                data-cy="status"
                type="select"
              >
                {blogStatusValues.map(blogStatus => (
                  <option value={blogStatus} key={blogStatus}>
                    {translate('serviceoverviewserviceApp.BlogStatus.' + blogStatus)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceBlog.view')}
                id="blog-view"
                name="view"
                data-cy="view"
                type="text"
              />
              <ValidatedField
                id="blog-blogCategory"
                name="blogCategory"
                data-cy="blogCategory"
                label={translate('serviceoverviewserviceApp.serviceoverviewserviceBlog.blogCategory')}
                type="select"
              >
                <option value="" key="0" />
                {blogCategories
                  ? blogCategories.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/serviceoverviewservice/blog" replace color="info">
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

export default BlogUpdate;
