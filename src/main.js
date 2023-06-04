import PointListPresenter from './presenter/point-list-presenter.js';
import PointsModel from './model/points-model.js';
import TripDestinationsModel from './model/trip-destinations-model.js';
import OffersModel from './model/offers-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import NewPointButtonView from './view/new-event-button-view.js';
import { render } from './framework/render.js';

const tripMain = document.querySelector('.trip-main');
const tripFilters = tripMain.querySelector('.trip-controls__filters');
const pageBody = document.querySelector('.page-body__page-main');
const pageBodyContainer = pageBody.querySelector('.page-body__container');

const filterModel = new FilterModel();
const pointsModel = new PointsModel();
const tripDestinationModel = new TripDestinationsModel();
const offersModel = new OffersModel();

const pointListPresenter = new PointListPresenter({
  container: pageBodyContainer,
  pointsModel,
  tripDestinationModel,
  offersModel,
  filterModel,
  onNewPointDestroy: handleNewPointFormClose
});

const filterPresenter = new FilterPresenter({
  container: tripFilters,
  filterModel,
  pointsModel
});

const newPointButtonView = new NewPointButtonView ({
  onClick: handleNewPointButtonClick
});

function handleNewPointFormClose() {
  newPointButtonView.setEnable();
}

function handleNewPointButtonClick() {
  pointListPresenter.createPoint();
  newPointButtonView.setDisable();
}
render(newPointButtonView, tripMain);

filterPresenter.init();
pointListPresenter.init();
