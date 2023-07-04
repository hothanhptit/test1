import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './product-category.reducer';

export const ProductCategoryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const productCategoryEntity = useAppSelector(state => state.productservice.productCategory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="productCategoryDetailsHeading">
          <Translate contentKey="productserviceApp.productserviceProductCategory.detail.title">ProductCategory</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{productCategoryEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="productserviceApp.productserviceProductCategory.name">Name</Translate>
            </span>
          </dt>
          <dd>{productCategoryEntity.name}</dd>
          <dt>
            <span id="nameEn">
              <Translate contentKey="productserviceApp.productserviceProductCategory.nameEn">Name En</Translate>
            </span>
          </dt>
          <dd>{productCategoryEntity.nameEn}</dd>
          <dt>
            <span id="image">
              <Translate contentKey="productserviceApp.productserviceProductCategory.image">Image</Translate>
            </span>
          </dt>
          <dd>{productCategoryEntity.image}</dd>
          <dt>
            <span id="parentId">
              <Translate contentKey="productserviceApp.productserviceProductCategory.parentId">Parent Id</Translate>
            </span>
          </dt>
          <dd>{productCategoryEntity.parentId}</dd>
        </dl>
        <Button tag={Link} to="/productservice/product-category" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/productservice/product-category/${productCategoryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProductCategoryDetail;
