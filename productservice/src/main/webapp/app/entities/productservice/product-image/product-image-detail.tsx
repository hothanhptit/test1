import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './product-image.reducer';

export const ProductImageDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const productImageEntity = useAppSelector(state => state.productservice.productImage.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="productImageDetailsHeading">
          <Translate contentKey="productserviceApp.productserviceProductImage.detail.title">ProductImage</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{productImageEntity.id}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="productserviceApp.productserviceProductImage.title">Title</Translate>
            </span>
          </dt>
          <dd>{productImageEntity.title}</dd>
          <dt>
            <span id="titleEn">
              <Translate contentKey="productserviceApp.productserviceProductImage.titleEn">Title En</Translate>
            </span>
          </dt>
          <dd>{productImageEntity.titleEn}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="productserviceApp.productserviceProductImage.description">Description</Translate>
            </span>
          </dt>
          <dd>{productImageEntity.description}</dd>
          <dt>
            <span id="descriptionEn">
              <Translate contentKey="productserviceApp.productserviceProductImage.descriptionEn">Description En</Translate>
            </span>
          </dt>
          <dd>{productImageEntity.descriptionEn}</dd>
          <dt>
            <span id="image">
              <Translate contentKey="productserviceApp.productserviceProductImage.image">Image</Translate>
            </span>
          </dt>
          <dd>{productImageEntity.image}</dd>
          <dt>
            <Translate contentKey="productserviceApp.productserviceProductImage.product">Product</Translate>
          </dt>
          <dd>{productImageEntity.product ? productImageEntity.product.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/productservice/product-image" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/productservice/product-image/${productImageEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProductImageDetail;
