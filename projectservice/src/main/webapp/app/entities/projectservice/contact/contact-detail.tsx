import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './contact.reducer';

export const ContactDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const contactEntity = useAppSelector(state => state.projectservice.contact.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="contactDetailsHeading">
          <Translate contentKey="projectserviceApp.projectserviceContact.detail.title">Contact</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{contactEntity.id}</dd>
          <dt>
            <span id="fullname">
              <Translate contentKey="projectserviceApp.projectserviceContact.fullname">Fullname</Translate>
            </span>
          </dt>
          <dd>{contactEntity.fullname}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="projectserviceApp.projectserviceContact.email">Email</Translate>
            </span>
          </dt>
          <dd>{contactEntity.email}</dd>
          <dt>
            <span id="phone">
              <Translate contentKey="projectserviceApp.projectserviceContact.phone">Phone</Translate>
            </span>
          </dt>
          <dd>{contactEntity.phone}</dd>
          <dt>
            <span id="content">
              <Translate contentKey="projectserviceApp.projectserviceContact.content">Content</Translate>
            </span>
          </dt>
          <dd>{contactEntity.content}</dd>
          <dt>
            <span id="response">
              <Translate contentKey="projectserviceApp.projectserviceContact.response">Response</Translate>
            </span>
          </dt>
          <dd>{contactEntity.response}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="projectserviceApp.projectserviceContact.status">Status</Translate>
            </span>
          </dt>
          <dd>{contactEntity.status}</dd>
        </dl>
        <Button tag={Link} to="/projectservice/contact" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/projectservice/contact/${contactEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ContactDetail;
