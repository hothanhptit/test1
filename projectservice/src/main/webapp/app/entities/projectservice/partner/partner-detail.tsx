import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './partner.reducer';

export const PartnerDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const partnerEntity = useAppSelector(state => state.projectservice.partner.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="partnerDetailsHeading">
          <Translate contentKey="projectserviceApp.projectservicePartner.detail.title">Partner</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{partnerEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="projectserviceApp.projectservicePartner.name">Name</Translate>
            </span>
          </dt>
          <dd>{partnerEntity.name}</dd>
          <dt>
            <span id="nameEn">
              <Translate contentKey="projectserviceApp.projectservicePartner.nameEn">Name En</Translate>
            </span>
          </dt>
          <dd>{partnerEntity.nameEn}</dd>
          <dt>
            <span id="link">
              <Translate contentKey="projectserviceApp.projectservicePartner.link">Link</Translate>
            </span>
          </dt>
          <dd>{partnerEntity.link}</dd>
        </dl>
        <Button tag={Link} to="/projectservice/partner" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/projectservice/partner/${partnerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default PartnerDetail;
