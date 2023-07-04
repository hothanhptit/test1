import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './about-us.reducer';

export const AboutUsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const aboutUsEntity = useAppSelector(state => state.projectservice.aboutUs.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="aboutUsDetailsHeading">
          <Translate contentKey="projectserviceApp.projectserviceAboutUs.detail.title">AboutUs</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{aboutUsEntity.id}</dd>
          <dt>
            <span id="slogan">
              <Translate contentKey="projectserviceApp.projectserviceAboutUs.slogan">Slogan</Translate>
            </span>
          </dt>
          <dd>{aboutUsEntity.slogan}</dd>
          <dt>
            <span id="sloganEn">
              <Translate contentKey="projectserviceApp.projectserviceAboutUs.sloganEn">Slogan En</Translate>
            </span>
          </dt>
          <dd>{aboutUsEntity.sloganEn}</dd>
          <dt>
            <span id="about">
              <Translate contentKey="projectserviceApp.projectserviceAboutUs.about">About</Translate>
            </span>
          </dt>
          <dd>{aboutUsEntity.about}</dd>
          <dt>
            <span id="aboutEn">
              <Translate contentKey="projectserviceApp.projectserviceAboutUs.aboutEn">About En</Translate>
            </span>
          </dt>
          <dd>{aboutUsEntity.aboutEn}</dd>
          <dt>
            <span id="mission">
              <Translate contentKey="projectserviceApp.projectserviceAboutUs.mission">Mission</Translate>
            </span>
          </dt>
          <dd>{aboutUsEntity.mission}</dd>
          <dt>
            <span id="missionEn">
              <Translate contentKey="projectserviceApp.projectserviceAboutUs.missionEn">Mission En</Translate>
            </span>
          </dt>
          <dd>{aboutUsEntity.missionEn}</dd>
        </dl>
        <Button tag={Link} to="/projectservice/about-us" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/projectservice/about-us/${aboutUsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default AboutUsDetail;
