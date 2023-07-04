import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './support-online.reducer';

export const SupportOnlineDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const supportOnlineEntity = useAppSelector(state => state.projectservice.supportOnline.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="supportOnlineDetailsHeading">
          <Translate contentKey="projectserviceApp.projectserviceSupportOnline.detail.title">SupportOnline</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{supportOnlineEntity.id}</dd>
          <dt>
            <span id="avatar">
              <Translate contentKey="projectserviceApp.projectserviceSupportOnline.avatar">Avatar</Translate>
            </span>
          </dt>
          <dd>{supportOnlineEntity.avatar}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="projectserviceApp.projectserviceSupportOnline.type">Type</Translate>
            </span>
          </dt>
          <dd>{supportOnlineEntity.type}</dd>
          <dt>
            <span id="script">
              <Translate contentKey="projectserviceApp.projectserviceSupportOnline.script">Script</Translate>
            </span>
          </dt>
          <dd>{supportOnlineEntity.script}</dd>
          <dt>
            <span id="fullname">
              <Translate contentKey="projectserviceApp.projectserviceSupportOnline.fullname">Fullname</Translate>
            </span>
          </dt>
          <dd>{supportOnlineEntity.fullname}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="projectserviceApp.projectserviceSupportOnline.description">Description</Translate>
            </span>
          </dt>
          <dd>{supportOnlineEntity.description}</dd>
          <dt>
            <span id="descriptionEn">
              <Translate contentKey="projectserviceApp.projectserviceSupportOnline.descriptionEn">Description En</Translate>
            </span>
          </dt>
          <dd>{supportOnlineEntity.descriptionEn}</dd>
          <dt>
            <span id="enable">
              <Translate contentKey="projectserviceApp.projectserviceSupportOnline.enable">Enable</Translate>
            </span>
          </dt>
          <dd>{supportOnlineEntity.enable ? 'true' : 'false'}</dd>
        </dl>
        <Button tag={Link} to="/projectservice/support-online" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/projectservice/support-online/${supportOnlineEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default SupportOnlineDetail;
