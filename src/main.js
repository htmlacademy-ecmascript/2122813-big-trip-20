import PointListPresenter from './presenter/point-list-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import PointsModel from './model/points-model.js';
import { generateFilters } from './mock/filter.js';

const pageBody = document.querySelector('.page-body__page-main');
const pageBodyContainer = pageBody.querySelector('.page-body__container');
const pageHeaderContainer = document.querySelector('.page-header__container');

const pointsModel = new PointsModel();
const filters = generateFilters(pointsModel.points);

const pointListPresenter = new PointListPresenter({container: pageBodyContainer, pointsModel});
const headerPresenter = new HeaderPresenter({container: pageHeaderContainer, filters});

headerPresenter.init();
pointListPresenter.init();
