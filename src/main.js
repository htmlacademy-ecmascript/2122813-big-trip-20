import PointPresenter from './presenter/point-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import PointsModel from './model/points-model.js';

const pageBody = document.querySelector('.page-body__page-main');
const pageBodyContainer = pageBody.querySelector('.page-body__container');
const pageHeaderContainer = document.querySelector('.page-header__container');

const pointsModel = new PointsModel();
const pointPresenter = new PointPresenter({container: pageBodyContainer, pointsModel});
const headerPresenter = new HeaderPresenter({container: pageHeaderContainer});

headerPresenter.init();
pointPresenter.init();
