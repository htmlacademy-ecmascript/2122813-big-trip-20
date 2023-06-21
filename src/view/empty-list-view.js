import { FilterType } from '../consts.js';
import AbstractView from '../framework/view/abstract-view.js';

const messageForFilter = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.FUTURE]: 'There are no future events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.PAST]: 'There are no past events now',
};

function createTemplate(filterType) {
  return `<p class="trip-events__msg">${messageForFilter[filterType]}</p>`;
}

export default class EmptyListView extends AbstractView {
  #filterType = FilterType.EVERYTHING;

  constructor({filterType}) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createTemplate(this.#filterType);
  }
}
