import {render} from '../render.js';
import FilterView from '../view/filter-view.js';
import NewEventButtonView from '../view/new-event-button-view.js';
import TripControlsFiltersView from '../view/trip-controls-filters-view.js';
import TripMainView from '../view/trip-main-view.js';


export default class HeaderPresenter {
  tripMainView = new TripMainView();
  tripControlsFiltersView = new TripControlsFiltersView();


  constructor ({container}) {
    this.container = container;
  }

  init() {

    render(new FilterView(), this.tripControlsFiltersView.getElement());
    render(this.tripControlsFiltersView, this.tripMainView.getElement());
    render(new NewEventButtonView(), this.tripMainView.getElement());
    render(this.tripMainView, this.container);
  }
}
