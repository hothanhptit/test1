import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBlogCategory } from 'app/shared/model/learnservice/blog-category.model';
import { BlogCategoryType } from 'app/shared/model/enumerations/blog-category-type.model';
import { getEntity, updateEntity, createEntity, reset } from './blog-category.reducer';

export const BlogCategoryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const blogCategoryEntity = useAppSelector(state => state.learnservice.blogCategory.entity);
  const loading = useAppSelector(state => state.learnservice.blogCategory.loading);
  const updating = useAppSelector(state => state.learnservice.blogCategory.updating);
  const updateSuccess = useAppSelector(state => state.learnservice.blogCategory.updateSuccess);
  const blogCategoryTypeValues = Object.keys(BlogCategoryType);

  const handleClose = () => {
    navigate('/learnservice/blog-category' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...blogCategoryEntity,
      ...values,
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
          type: 'NEWS',
          ...blogCategoryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="learnserviceApp.learnserviceBlogCategory.home.createOrEditLabel" data-cy="BlogCategoryCreateUpdateHeading">
            <Translate contentKey="learnserviceApp.learnserviceBlogCategory.home.createOrEditLabel">
              Create or edit a BlogCategory
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
                  id="blog-category-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('learnserviceApp.learnserviceBlogCategory.type')}
                id="blog-category-type"
                name="type"
                data-cy="type"
                type="select"
              >
                {blogCategoryTypeValues.map(blogCategoryType => (
                  <option value={blogCategoryType} key={blogCategoryType}>
                    {translate('learnserviceApp.BlogCategoryType.' + blogCategoryType)}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label={translate('learnserviceApp.learnserviceBlogCategory.image')}
                id="blog-category-image"
                name="image"
                data-cy="image"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceBlogCategory.title')}
                id="blog-category-title"
                name="title"
                data-cy="title"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceBlogCategory.titleEn')}
                id="blog-category-titleEn"
                name="titleEn"
                data-cy="titleEn"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceBlogCategory.desctiption')}
                id="blog-category-desctiption"
                name="desctiption"
                data-cy="desctiption"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceBlogCategory.desctiptionEn')}
                id="blog-category-desctiptionEn"
                name="desctiptionEn"
                data-cy="desctiptionEn"
                type="text"
              />
              <ValidatedField
                label={translate('learnserviceApp.learnserviceBlogCategory.parent')}
                id="blog-category-parent"
                name="parent"
                data-cy="parent"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/learnservice/blog-category" replace color="info">
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

export default BlogCategoryUpdate;
