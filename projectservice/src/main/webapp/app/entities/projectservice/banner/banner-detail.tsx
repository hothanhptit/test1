import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './banner.reducer';

export const BannerDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const bannerEntity = useAppSelector(state => state.projectservice.banner.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="bannerDetailsHeading">
          <Translate contentKey="projectserviceApp.projectserviceBanner.detail.title">Banner</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{bannerEntity.id}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="projectserviceApp.projectserviceBanner.type">Type</Translate>
            </span>
          </dt>
          <dd>{bannerEntity.type}</dd>
          <dt>
            <span id="label">
              <Translate contentKey="projectserviceApp.projectserviceBanner.label">Label</Translate>
            </span>
          </dt>
          <dd>{bannerEntity.label}</dd>
          <dt>
            <span id="labelEn">
              <Translate contentKey="projectserviceApp.projectserviceBanner.labelEn">Label En</Translate>
            </span>
          </dt>
          <dd>{bannerEntity.labelEn}</dd>
          <dt>
            <span id="desctiption">
              <Translate contentKey="projectserviceApp.projectserviceBanner.desctiption">Desctiption</Translate>
            </span>
          </dt>
          <dd>{bannerEntity.desctiption}</dd>
          <dt>
            <span id="desctiptionEn">
              <Translate contentKey="projectserviceApp.projectserviceBanner.desctiptionEn">Desctiption En</Translate>
            </span>
          </dt>
          <dd>{bannerEntity.desctiptionEn}</dd>
          <dt>
            <span id="link">
              <Translate contentKey="projectserviceApp.projectserviceBanner.link">Link</Translate>
            </span>
          </dt>
          <dd>{bannerEntity.link}</dd>
        </dl>
        <Button tag={Link} to="/projectservice/banner" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/projectservice/banner/${bannerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default BannerDetail;
