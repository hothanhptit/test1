import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IQuote } from 'app/shared/model/projectservice/quote.model';
import { getEntity, updateEntity, createEntity, reset } from './quote.reducer';

export const QuoteUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const quoteEntity = useAppSelector(state => state.projectservice.quote.entity);
  const loading = useAppSelector(state => state.projectservice.quote.loading);
  const updating = useAppSelector(state => state.projectservice.quote.updating);
  const updateSuccess = useAppSelector(state => state.projectservice.quote.updateSuccess);

  const handleClose = () => {
    navigate('/projectservice/quote' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...quoteEntity,
      ...values,
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...quoteEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="projectserviceApp.projectserviceQuote.home.createOrEditLabel" data-cy="QuoteCreateUpdateHeading">
            <Translate contentKey="projectserviceApp.projectserviceQuote.home.createOrEditLabel">Create or edit a Quote</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="quote-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.index')}
                id="quote-index"
                name="index"
                data-cy="index"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.label')}
                id="quote-label"
                name="label"
                data-cy="label"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.labelEn')}
                id="quote-labelEn"
                name="labelEn"
                data-cy="labelEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.title')}
                id="quote-title"
                name="title"
                data-cy="title"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.titleEn')}
                id="quote-titleEn"
                name="titleEn"
                data-cy="titleEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.subTitle')}
                id="quote-subTitle"
                name="subTitle"
                data-cy="subTitle"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.subTitleEn')}
                id="quote-subTitleEn"
                name="subTitleEn"
                data-cy="subTitleEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.content')}
                id="quote-content"
                name="content"
                data-cy="content"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.contentEn')}
                id="quote-contentEn"
                name="contentEn"
                data-cy="contentEn"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.highline')}
                id="quote-highline"
                name="highline"
                data-cy="highline"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.price')}
                id="quote-price"
                name="price"
                data-cy="price"
                type="text"
              />
              <ValidatedField
                label={translate('projectserviceApp.projectserviceQuote.priceEn')}
                id="quote-priceEn"
                name="priceEn"
                data-cy="priceEn"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/projectservice/quote" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default QuoteUpdate;
