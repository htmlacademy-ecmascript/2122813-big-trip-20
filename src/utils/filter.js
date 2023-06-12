import { FilterType } from '../consts.js';

const filterTypeToFilter = {
  [FilterType.EVERYTHING]: (points) => points.slice(),
  [FilterType.FUTURE]: (points, dateNow = Date.now()) => points.filter(({ dateFrom }) =>
    dateFrom.getTime() >= dateNow),
  [FilterType.PRESENT]: (points, dateNow = Date.now()) => points.filter(({ dateFrom, dateTo }) =>
    dateFrom.getTime() <= dateNow && dateTo.getTime() >= dateNow),
  [FilterType.PAST]: (points, dateNow = Date.now()) => points.filter(({ dateTo }) =>
    dateTo.getTime() < dateNow)
};

export { filterTypeToFilter };
