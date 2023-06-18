import PointListPresenter from './presenter/point-list-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import NewEventButtonView from './view/new-event-button-view.js';
import { render } from './framework/render.js';
import PointApiService from './api-service.js';

const AUTHORIZATION = 'Basic bq4po49baal4pldsapi6lka';
const END_POINT = 'https://20.ecmascript.pages.academy/big-trip';

const tripMain = document.querySelector('.trip-main');
const tripFilters = tripMain.querySelector('.trip-controls__filters');
const pageBody = document.querySelector('.page-body__page-main');
const pageBodyContainer = pageBody.querySelector('.page-body__container');

const filterModel = new FilterModel();
const pointsModel = new PointsModel({
  pointsApiService: new PointApiService(END_POINT, AUTHORIZATION)
});

const headerPresenter = new HeaderPresenter({
  container: tripMain,
  pointsModel,
});

const pointListPresenter = new PointListPresenter({
  container: pageBodyContainer,
  pointsModel,
  filterModel,
  onNewPointDestroy: handleNewPointFormClose
});

const filterPresenter = new FilterPresenter({
  container: tripFilters,
  filterModel,
  pointsModel
});

const newEventButtonView = new NewEventButtonView ({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newEventButtonView.setEnable();
}

function handleNewPointButtonClick() {
  pointListPresenter.createPoint();
  newEventButtonView.setDisable();
}
pointsModel.init()
  .finally(() => {
    render(newEventButtonView, tripMain);
  });

headerPresenter.init();
filterPresenter.init();
pointListPresenter.init();
