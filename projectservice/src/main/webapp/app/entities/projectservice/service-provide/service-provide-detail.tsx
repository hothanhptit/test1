import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './service-provide.reducer';

export const ServiceProvideDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const serviceProvideEntity = useAppSelector(state => state.projectservice.serviceProvide.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="serviceProvideDetailsHeading">
          <Translate contentKey="projectserviceApp.projectserviceServiceProvide.detail.title">ServiceProvide</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{serviceProvideEntity.id}</dd>
          <dt>
            <span id="image">
              <Translate contentKey="projectserviceApp.projectserviceServiceProvide.image">Image</Translate>
            </span>
          </dt>
          <dd>{serviceProvideEntity.image}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="projectserviceApp.projectserviceServiceProvide.title">Title</Translate>
            </span>
          </dt>
          <dd>{serviceProvideEntity.title}</dd>
          <dt>
            <span id="titleEn">
              <Translate contentKey="projectserviceApp.projectserviceServiceProvide.titleEn">Title En</Translate>
            </span>
          </dt>
          <dd>{serviceProvideEntity.titleEn}</dd>
          <dt>
            <span id="shortDescription">
              <Translate contentKey="projectserviceApp.projectserviceServiceProvide.shortDescription">Short Description</Translate>
            </span>
          </dt>
          <dd>{serviceProvideEntity.shortDescription}</dd>
          <dt>
            <span id="shortDescriptionEn">
              <Translate contentKey="projectserviceApp.projectserviceServiceProvide.shortDescriptionEn">Short Description En</Translate>
            </span>
          </dt>
          <dd>{serviceProvideEntity.shortDescriptionEn}</dd>
          <dt>
            <span id="link">
              <Translate contentKey="projectserviceApp.projectserviceServiceProvide.link">Link</Translate>
            </span>
          </dt>
          <dd>{serviceProvideEntity.link}</dd>
        </dl>
        <Button tag={Link} to="/projectservice/service-provide" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/projectservice/service-provide/${serviceProvideEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ServiceProvideDetail;
