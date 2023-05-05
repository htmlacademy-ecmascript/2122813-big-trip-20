import { tripDestinations, offersByType, getRandomPoint} from '../mock/mock.js';
import { WAYPOINTS_COUNT } from '../consts.js';

export default class PointsModel {
  points = Array.from({ length: WAYPOINTS_COUNT }, getRandomPoint);
  tripDestinations = tripDestinations;
  offersByType = offersByType;

  getPoints() {
    return this.points;
  }

  getTripDestinations() {
    return this.tripDestinations;
  }

  getOffersByType() {
    return this.offersByType;
  }
}
