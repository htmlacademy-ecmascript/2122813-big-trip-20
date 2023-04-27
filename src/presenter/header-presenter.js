import {render, RenderPosition} from '../render.js';
import HeaderView from '../view/header-view.js';

const pageHeader = document.querySelector('.page-header');

export default class HeaderPresenter {
  TripMainView = new HeaderView();


  constructor({container}) {
    this.container = container;
  }

  init() {
    pageHeader.innerHTML = '';

    render(this.TripMainView, this.container, RenderPosition.AFTERBEGIN);
  }
}
