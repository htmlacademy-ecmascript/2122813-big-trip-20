import dayjs from 'dayjs';

const isFuturePoint = (dateFrom) => dateFrom && dayjs().isBefore(dateFrom, 'D');

const isPresentPoint = (dateFrom, dateTo) =>
  dateFrom && dateTo && dayjs().isSame(dateFrom, 'D') && dayjs().isSame(dateTo, 'D');

const isPastPoint = (dateTo) => dateTo && dayjs().isBefore(dateTo, 'D');

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isFuturePoint(point.dateFrom)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPresentPoint(point.dateFrom, point.dateTo)),
  [FilterType.PAST]: (points) => points.filter((point) => isPastPoint(point.dateTo)),
};

export { filter };
