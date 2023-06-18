import { RenderPosition, render, remove, replace } from '../framework/render.js';
import TripMainView from '../view/trip-main-view.js';

export default class HeaderPresenter {
  #container = null;

  #pointsModel = null;

  #tripInfoComponent = null;

  constructor({ container, pointsModel }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  #renderTripInfo() {
    const prevTripInfoComponent = this.#tripInfoComponent;

    this.#tripInfoComponent = new TripMainView({
      pointsModel: this.#pointsModel,
    });

    if (prevTripInfoComponent === null) {
      render(this.#tripInfoComponent, this.#container, RenderPosition.AFTERBEGIN);
      return;
    }

    replace(this.#tripInfoComponent, prevTripInfoComponent);
    remove(prevTripInfoComponent);
  }

  #handleModelEvent = () => {
    this.#renderTripInfo();
  };
}
