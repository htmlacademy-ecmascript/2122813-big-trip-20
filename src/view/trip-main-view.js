import AbstractView from '../framework/view/abstract-view.js';
import { humanizeDate } from '../utils/common.js';
import dayjs from 'dayjs';

function createTemplate({ totalPrice, initialDate, finalDate, title }) {
  return (
    `<div class="trip-main">
      <section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">${title}</h1>
          <p class="trip-info__dates">${initialDate}&nbsp;&mdash;&nbsp;${finalDate}</p>
        </div>
        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice ? totalPrice : ''}</span>
        </p>
      </section>
    </div>`
  );
}

export default class TripMainView extends AbstractView {
  #pointsModel = null;

  constructor({ pointsModel }) {
    super();
    this.#pointsModel = pointsModel;
  }

  get template() {
    const points = this.#pointsModel.points;
    const totalPrice = this.#calculateTotalPrice();

    const isSameMonth = dayjs(points[0]?.dateFrom).month() === dayjs(points[points.length - 1]?.dateTo).month();
    const initialDate = humanizeDate(points[0]?.dateFrom, `${isSameMonth ? 'MMM D' : 'D MMM'}`);
    const finalDate = humanizeDate(points[points.length - 1]?.dateTo, `${isSameMonth ? 'D' : 'D MMM'}`);

    const initialDestination = this.#pointsModel.destinations.find((destination) => destination.id === points[0]?.destination)?.name;
    const finalDestination = this.#pointsModel.destinations.find((destination) => destination.id === points[points.length - 1]?.destination)?.name;

    let title = '';

    if (points.length > 3) {
      title = `${initialDestination ? initialDestination : ''} &mdash; . . . &mdash; ${finalDestination ? finalDestination : ''}`;
    } else if (points.length > 0) {
      const destinations = points.map((point) => this.#pointsModel.destinations.find((destination) => destination.id === point.destination)?.name);

      title = destinations.join(' - ');
    }

    return createTemplate({ points, totalPrice, initialDate, finalDate, initialDestination, finalDestination, title });
  }

  #calculateTotalPrice() {
    const points = this.#pointsModel.points;
    let total = 0;

    for (const point of points) {
      const checkedOffers = this.#pointsModel.offers.find(
        (offer) => offer.type === point.type && point.offers.includes(offer.id)
      );

      const checkedOffersPrice = checkedOffers?.reduce(
        (sum, checkedOffer) => sum + checkedOffer.price,
        0
      );

      total += (checkedOffersPrice || 0) + point.basePrice;
    }

    return total;
  }
}
