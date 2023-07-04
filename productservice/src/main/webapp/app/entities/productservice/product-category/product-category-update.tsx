import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IProductCategory } from 'app/shared/model/productservice/product-category.model';
import { getEntity, updateEntity, createEntity, reset } from './product-category.reducer';

export const ProductCategoryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const productCategoryEntity = useAppSelector(state => state.productservice.productCategory.entity);
  const loading = useAppSelector(state => state.productservice.productCategory.loading);
  const updating = useAppSelector(state => state.productservice.productCategory.updating);
  const updateSuccess = useAppSelector(state => state.productservice.productCategory.updateSuccess);

  const handleClose = () => {
    navigate('/productservice/product-category' + location.search);
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
      ...productCategoryEntity,
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
          ...productCategoryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="productserviceApp.productserviceProductCategory.home.createOrEditLabel" data-cy="ProductCategoryCreateUpdateHeading">
            <Translate contentKey="productserviceApp.productserviceProductCategory.home.createOrEditLabel">
              Create or edit a ProductCategory
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
                  id="product-category-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('productserviceApp.productserviceProductCategory.name')}
                id="product-category-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProductCategory.nameEn')}
                id="product-category-nameEn"
                name="nameEn"
                data-cy="nameEn"
                type="text"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProductCategory.image')}
                id="product-category-image"
                name="image"
                data-cy="image"
                type="text"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProductCategory.parentId')}
                id="product-category-parentId"
                name="parentId"
                data-cy="parentId"
                type="text"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/productservice/product-category"
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

export default ProductCategoryUpdate;
