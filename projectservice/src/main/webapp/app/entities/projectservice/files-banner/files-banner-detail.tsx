import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './files-banner.reducer';

export const FilesBannerDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const filesBannerEntity = useAppSelector(state => state.projectservice.filesBanner.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="filesBannerDetailsHeading">
          <Translate contentKey="projectserviceApp.projectserviceFilesBanner.detail.title">FilesBanner</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{filesBannerEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="projectserviceApp.projectserviceFilesBanner.name">Name</Translate>
            </span>
          </dt>
          <dd>{filesBannerEntity.name}</dd>
          <dt>
            <span id="type">
              <Translate contentKey="projectserviceApp.projectserviceFilesBanner.type">Type</Translate>
            </span>
          </dt>
          <dd>{filesBannerEntity.type}</dd>
          <dt>
            <span id="link">
              <Translate contentKey="projectserviceApp.projectserviceFilesBanner.link">Link</Translate>
            </span>
          </dt>
          <dd>{filesBannerEntity.link}</dd>
          <dt>
            <Translate contentKey="projectserviceApp.projectserviceFilesBanner.banner">Banner</Translate>
          </dt>
          <dd>{filesBannerEntity.banner ? filesBannerEntity.banner.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/projectservice/files-banner" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/projectservice/files-banner/${filesBannerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default FilesBannerDetail;
