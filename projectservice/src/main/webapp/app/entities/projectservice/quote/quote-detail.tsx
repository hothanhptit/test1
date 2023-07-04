import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './quote.reducer';

export const QuoteDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const quoteEntity = useAppSelector(state => state.projectservice.quote.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="quoteDetailsHeading">
          <Translate contentKey="projectserviceApp.projectserviceQuote.detail.title">Quote</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.id}</dd>
          <dt>
            <span id="index">
              <Translate contentKey="projectserviceApp.projectserviceQuote.index">Index</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.index}</dd>
          <dt>
            <span id="label">
              <Translate contentKey="projectserviceApp.projectserviceQuote.label">Label</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.label}</dd>
          <dt>
            <span id="labelEn">
              <Translate contentKey="projectserviceApp.projectserviceQuote.labelEn">Label En</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.labelEn}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="projectserviceApp.projectserviceQuote.title">Title</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.title}</dd>
          <dt>
            <span id="titleEn">
              <Translate contentKey="projectserviceApp.projectserviceQuote.titleEn">Title En</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.titleEn}</dd>
          <dt>
            <span id="subTitle">
              <Translate contentKey="projectserviceApp.projectserviceQuote.subTitle">Sub Title</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.subTitle}</dd>
          <dt>
            <span id="subTitleEn">
              <Translate contentKey="projectserviceApp.projectserviceQuote.subTitleEn">Sub Title En</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.subTitleEn}</dd>
          <dt>
            <span id="content">
              <Translate contentKey="projectserviceApp.projectserviceQuote.content">Content</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.content}</dd>
          <dt>
            <span id="contentEn">
              <Translate contentKey="projectserviceApp.projectserviceQuote.contentEn">Content En</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.contentEn}</dd>
          <dt>
            <span id="highline">
              <Translate contentKey="projectserviceApp.projectserviceQuote.highline">Highline</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.highline ? 'true' : 'false'}</dd>
          <dt>
            <span id="price">
              <Translate contentKey="projectserviceApp.projectserviceQuote.price">Price</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.price}</dd>
          <dt>
            <span id="priceEn">
              <Translate contentKey="projectserviceApp.projectserviceQuote.priceEn">Price En</Translate>
            </span>
          </dt>
          <dd>{quoteEntity.priceEn}</dd>
        </dl>
        <Button tag={Link} to="/projectservice/quote" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/projectservice/quote/${quoteEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default QuoteDetail;
