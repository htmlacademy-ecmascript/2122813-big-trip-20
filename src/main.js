import { render } from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import FilterView from './view/filter-view.js';
import HeaderPresenter from './presenter/header-presenter.js';

const tripControlsFilters = document.querySelector('.trip-controls__filters');
const pageBody = document.querySelector('.page-body__page-main');
const pageBodyContainer = pageBody.querySelector('.page-body__container');
const pageHeader = document.querySelector('.page-header');
const boardPresenter = new BoardPresenter({container: pageBodyContainer});
const headerPresenter = new HeaderPresenter({container: pageHeader});

render(new FilterView(), tripControlsFilters);

headerPresenter.init();
boardPresenter.init();
