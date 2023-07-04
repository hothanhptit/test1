import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './files-about-us.reducer';

export const FilesAboutUsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const filesAboutUsEntity = useAppSelector(state => state.projectservice.filesAboutUs.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="filesAboutUsDetailsHeading">
          <Translate contentKey="projectserviceApp.projectserviceFilesAboutUs.detail.title">FilesAboutUs</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{filesAboutUsEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="projectserviceApp.projectserviceFilesAboutUs.name">Name</Translate>
            </span>
          </dt>
          <dd>{filesAboutUsEntity.name}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="projectserviceApp.projectserviceFilesAboutUs.type">Type</Translate>
            </span>
          </dt>
          <dd>{filesAboutUsEntity.type}</dd>
          <dt>
            <span id="link">
              <Translate contentKey="projectserviceApp.projectserviceFilesAboutUs.link">Link</Translate>
            </span>
          </dt>
          <dd>{filesAboutUsEntity.link}</dd>
          <dt>
            <Translate contentKey="projectserviceApp.projectserviceFilesAboutUs.aboutUs">About Us</Translate>
          </dt>
          <dd>{filesAboutUsEntity.aboutUs ? filesAboutUsEntity.aboutUs.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/projectservice/files-about-us" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/projectservice/files-about-us/${filesAboutUsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default FilesAboutUsDetail;
