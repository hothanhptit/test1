import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate, getSortState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IQuote } from 'app/shared/model/projectservice/quote.model';
import { getEntities } from './quote.reducer';

export const Quote = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(location, ITEMS_PER_PAGE, 'id'), location.search)
  );

  const quoteList = useAppSelector(state => state.projectservice.quote.entities);
  const loading = useAppSelector(state => state.projectservice.quote.loading);
  const totalItems = useAppSelector(state => state.projectservice.quote.totalItems);

  const getAllEntities = () => {
    dispatch(
      getEntities({
        page: paginationState.activePage - 1,
        size: paginationState.itemsPerPage,
        sort: `${paginationState.sort},${paginationState.order}`,
      })
    );
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (location.search !== endURL) {
      navigate(`${location.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = params.get('page');
    const sort = params.get(SORT);
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: +page,
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [location.search]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === ASC ? DESC : ASC,
      sort: p,
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const handleSyncList = () => {
    sortEntities();
  };

  return (
    <div>
      <h2 id="quote-heading" data-cy="QuoteHeading">
        <Translate contentKey="projectserviceApp.projectserviceQuote.home.title">Quotes</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="projectserviceApp.projectserviceQuote.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link
            to="/projectservice/quote/new"
            className="btn btn-primary jh-create-entity"
            id="jh-create-entity"
            data-cy="entityCreateButton"
          >
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="projectserviceApp.projectserviceQuote.home.createLabel">Create new Quote</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {quoteList && quoteList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('index')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.index">Index</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('label')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.label">Label</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('labelEn')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.labelEn">Label En</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('title')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.title">Title</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('titleEn')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.titleEn">Title En</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('subTitle')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.subTitle">Sub Title</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('subTitleEn')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.subTitleEn">Sub Title En</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('content')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.content">Content</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('contentEn')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.contentEn">Content En</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('highline')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.highline">Highline</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('price')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.price">Price</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('priceEn')}>
                  <Translate contentKey="projectserviceApp.projectserviceQuote.priceEn">Price En</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {quoteList.map((quote, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/projectservice/quote/${quote.id}`} color="link" size="sm">
                      {quote.id}
                    </Button>
                  </td>
                  <td>{quote.index}</td>
                  <td>{quote.label}</td>
                  <td>{quote.labelEn}</td>
                  <td>{quote.title}</td>
                  <td>{quote.titleEn}</td>
                  <td>{quote.subTitle}</td>
                  <td>{quote.subTitleEn}</td>
                  <td>{quote.content}</td>
                  <td>{quote.contentEn}</td>
                  <td>{quote.highline ? 'true' : 'false'}</td>
                  <td>{quote.price}</td>
                  <td>{quote.priceEn}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/projectservice/quote/${quote.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/projectservice/quote/${quote.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`/projectservice/quote/${quote.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="projectserviceApp.projectserviceQuote.home.notFound">No Quotes found</Translate>
            </div>
          )
        )}
      </div>
      {totalItems ? (
        <div className={quoteList && quoteList.length > 0 ? '' : 'd-none'}>
          <div className="justify-content-center d-flex">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} i18nEnabled />
          </div>
          <div className="justify-content-center d-flex">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={totalItems}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Quote;
