import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './product.reducer';

export const ProductDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const productEntity = useAppSelector(state => state.productservice.product.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="productDetailsHeading">
          <Translate contentKey="productserviceApp.productserviceProduct.detail.title">Product</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{productEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="productserviceApp.productserviceProduct.name">Name</Translate>
            </span>
          </dt>
          <dd>{productEntity.name}</dd>
          <dt>
            <span id="nameEn">
              <Translate contentKey="productserviceApp.productserviceProduct.nameEn">Name En</Translate>
            </span>
          </dt>
          <dd>{productEntity.nameEn}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="productserviceApp.productserviceProduct.description">Description</Translate>
            </span>
          </dt>
          <dd>{productEntity.description}</dd>
          <dt>
            <span id="descriptionEn">
              <Translate contentKey="productserviceApp.productserviceProduct.descriptionEn">Description En</Translate>
            </span>
          </dt>
          <dd>{productEntity.descriptionEn}</dd>
          <dt>
            <span id="star">
              <Translate contentKey="productserviceApp.productserviceProduct.star">Star</Translate>
            </span>
          </dt>
          <dd>{productEntity.star ? 'true' : 'false'}</dd>
          <dt>
            <span id="link">
              <Translate contentKey="productserviceApp.productserviceProduct.link">Link</Translate>
            </span>
          </dt>
          <dd>{productEntity.link}</dd>
          <dt>
            <Translate contentKey="productserviceApp.productserviceProduct.productCategory">Product Category</Translate>
          </dt>
          <dd>{productEntity.productCategory ? productEntity.productCategory.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/productservice/product" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/productservice/product/${productEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProductDetail;
