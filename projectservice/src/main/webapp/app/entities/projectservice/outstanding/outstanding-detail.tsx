import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './outstanding.reducer';

export const OutstandingDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const outstandingEntity = useAppSelector(state => state.projectservice.outstanding.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="outstandingDetailsHeading">
          <Translate contentKey="projectserviceApp.projectserviceOutstanding.detail.title">Outstanding</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{outstandingEntity.id}</dd>
          <dt>
            <span id="image">
              <Translate contentKey="projectserviceApp.projectserviceOutstanding.image">Image</Translate>
            </span>
          </dt>
          <dd>{outstandingEntity.image}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="projectserviceApp.projectserviceOutstanding.title">Title</Translate>
            </span>
          </dt>
          <dd>{outstandingEntity.title}</dd>
          <dt>
            <span id="titleEn">
              <Translate contentKey="projectserviceApp.projectserviceOutstanding.titleEn">Title En</Translate>
            </span>
          </dt>
          <dd>{outstandingEntity.titleEn}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="projectserviceApp.projectserviceOutstanding.description">Description</Translate>
            </span>
          </dt>
          <dd>{outstandingEntity.description}</dd>
          <dt>
            <span id="descriptionEn">
              <Translate contentKey="projectserviceApp.projectserviceOutstanding.descriptionEn">Description En</Translate>
            </span>
          </dt>
          <dd>{outstandingEntity.descriptionEn}</dd>
        </dl>
        <Button tag={Link} to="/projectservice/outstanding" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/projectservice/outstanding/${outstandingEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default OutstandingDetail;
