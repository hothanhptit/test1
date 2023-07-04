import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IProductCategory } from 'app/shared/model/productservice/product-category.model';
import { getEntities as getProductCategories } from 'app/entities/productservice/product-category/product-category.reducer';
import { IProduct } from 'app/shared/model/productservice/product.model';
import { getEntity, updateEntity, createEntity, reset } from './product.reducer';

export const ProductUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const productCategories = useAppSelector(state => state.productservice.productCategory.entities);
  const productEntity = useAppSelector(state => state.productservice.product.entity);
  const loading = useAppSelector(state => state.productservice.product.loading);
  const updating = useAppSelector(state => state.productservice.product.updating);
  const updateSuccess = useAppSelector(state => state.productservice.product.updateSuccess);

  const handleClose = () => {
    navigate('/productservice/product' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getProductCategories({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...productEntity,
      ...values,
      productCategory: productCategories.find(it => it.id.toString() === values.productCategory.toString()),
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
          ...productEntity,
          productCategory: productEntity?.productCategory?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="productserviceApp.productserviceProduct.home.createOrEditLabel" data-cy="ProductCreateUpdateHeading">
            <Translate contentKey="productserviceApp.productserviceProduct.home.createOrEditLabel">Create or edit a Product</Translate>
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
                  id="product-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('productserviceApp.productserviceProduct.name')}
                id="product-name"
                name="name"
                data-cy="name"
                type="text"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProduct.nameEn')}
                id="product-nameEn"
                name="nameEn"
                data-cy="nameEn"
                type="text"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProduct.description')}
                id="product-description"
                name="description"
                data-cy="description"
                type="text"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProduct.descriptionEn')}
                id="product-descriptionEn"
                name="descriptionEn"
                data-cy="descriptionEn"
                type="text"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProduct.star')}
                id="product-star"
                name="star"
                data-cy="star"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('productserviceApp.productserviceProduct.link')}
                id="product-link"
                name="link"
                data-cy="link"
                type="text"
              />
              <ValidatedField
                id="product-productCategory"
                name="productCategory"
                data-cy="productCategory"
                label={translate('productserviceApp.productserviceProduct.productCategory')}
                type="select"
              >
                <option value="" key="0" />
                {productCategories
                  ? productCategories.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/productservice/product" replace color="info">
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

export default ProductUpdate;
