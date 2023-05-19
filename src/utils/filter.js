import dayjs from 'dayjs';
import { FilterType } from '../consts.js';

const isFuturePoint = (dateFrom) => dateFrom && dayjs().isBefore(dateFrom, 'D');

const isPresentPoint = (dateFrom, dateTo) =>
  dateFrom && dateTo && dayjs().isSame(dateFrom, 'D') && dayjs().isSame(dateTo, 'D');

const isPastPoint = (dateTo) => dateTo && dayjs().isBefore(dateTo, 'D');

const filterTypeToFilter = {
  [FilterType.EVERYTHING]: (points) => points.slice(),
  [FilterType.FUTURE]: (points) => points.filter((point) => isFuturePoint(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPresentPoint(point.dateFrom, point.dateTo)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastPoint(point.dateTo)),
};

export { filterTypeToFilter };
