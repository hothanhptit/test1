import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './files-partner.reducer';

export const FilesPartnerDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const filesPartnerEntity = useAppSelector(state => state.projectservice.filesPartner.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="filesPartnerDetailsHeading">
          <Translate contentKey="projectserviceApp.projectserviceFilesPartner.detail.title">FilesPartner</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{filesPartnerEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="projectserviceApp.projectserviceFilesPartner.name">Name</Translate>
            </span>
          </dt>
          <dd>{filesPartnerEntity.name}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="projectserviceApp.projectserviceFilesPartner.type">Type</Translate>
            </span>
          </dt>
          <dd>{filesPartnerEntity.type}</dd>
          <dt>
            <span id="link">
              <Translate contentKey="projectserviceApp.projectserviceFilesPartner.link">Link</Translate>
            </span>
          </dt>
          <dd>{filesPartnerEntity.link}</dd>
          <dt>
            <Translate contentKey="projectserviceApp.projectserviceFilesPartner.partner">Partner</Translate>
          </dt>
          <dd>{filesPartnerEntity.partner ? filesPartnerEntity.partner.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/projectservice/files-partner" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/projectservice/files-partner/${filesPartnerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default FilesPartnerDetail;
