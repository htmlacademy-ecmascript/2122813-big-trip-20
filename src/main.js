import PointListPresenter from './presenter/point-list-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import PointsModel from './model/points-model.js';
import { generateFilters } from './mock/filter.js';
import TripDestinationsModel from './model/trip-destinations-model.js';
import OffersModel from './model/offers-model.js';

const pageBody = document.querySelector('.page-body__page-main');
const pageBodyContainer = pageBody.querySelector('.page-body__container');
const pageHeaderContainer = document.querySelector('.page-header__container');

const pointsModel = new PointsModel();
const tripDestinationModel = new TripDestinationsModel();
const offersModel = new OffersModel();
const filters = generateFilters(pointsModel.points);

const pointListPresenter = new PointListPresenter({container: pageBodyContainer, pointsModel, tripDestinationModel, offersModel});
const headerPresenter = new HeaderPresenter({container: pageHeaderContainer, filters});

headerPresenter.init();
pointListPresenter.init();
