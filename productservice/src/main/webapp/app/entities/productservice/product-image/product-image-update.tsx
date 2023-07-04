import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IProduct } from 'app/shared/model/productservice/product.model';
import { getEntities as getProducts } from 'app/entities/productservice/product/product.reducer';
import { IProductImage } from 'app/shared/model/productservice/product-image.model';
import { getEntity, updateEntity, createEntity, reset } from './product-image.reducer';

export const ProductImageUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const products = useAppSelector(state => state.productservice.product.entities);
  const productImageEntity = useAppSelector(state => state.productservice.productImage.entity);
  const loading = useAppSelector(state => state.productservice.productImage.loading);
  const updating = useAppSelector(state => state.productservice.productImage.updating);
  const updateSuccess = useAppSelector(state => state.productservice.productImage.updateSuccess);

  const handleClose = () => {
    navigate('/productservice/product-image' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getProducts({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...productImageEntity,
      ...values,
      product: products.find(it => it.id.toString() === values.product.toString()),
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
          ...productImageEntity,
          product: productImageEntity?.product?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="productserviceApp.productserviceProductImage.home.createOrEditLabel" data-cy="ProductImageCreateUpdateHeading">
            <Translate contentKey="productserviceApp.productserviceProductImage.home.createOrEditLabel">
              Create or edit a ProductImage
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
                  id="product-image-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('productserviceApp.productserviceProductImage.title')}
                id="product-image-title"
                name="title"
                data-cy="title"
                type="text"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProductImage.titleEn')}
                id="product-image-titleEn"
                name="titleEn"
                data-cy="titleEn"
                type="text"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProductImage.description')}
                id="product-image-description"
                name="description"
                data-cy="description"
                type="text"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProductImage.descriptionEn')}
                id="product-image-descriptionEn"
                name="descriptionEn"
                data-cy="descriptionEn"
                type="text"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProductImage.image')}
                id="product-image-image"
                name="image"
                data-cy="image"
                type="text"
              />
              <ValidatedField
                id="product-image-product"
                name="product"
                data-cy="product"
                label={translate('productserviceApp.productserviceProductImage.product')}
                type="select"
              >
                <option value="" key="0" />
                {products
                  ? products.map(otherEntity => (
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
                to="/productservice/product-image"
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

export default ProductImageUpdate;
