import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const ETime = {
  MsInHour: 1000 * 60 * 60,
  MsInDay: 1000 * 60 * 60 * 24,
};

function humanizeDate(eventDate, dateFormat) {
  return eventDate ? dayjs(eventDate).format(dateFormat) : '';
}

function capitalize(text) {
  return text.charAt(0).toUpperCase().concat(text.slice(1));
}

function getTimeDiff(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dateFrom);

  let waypointDuration = 0;

  switch (true) {
    case (timeDiff >= ETime.MsInDay):
      waypointDuration = dayjs.duration(timeDiff).format('DD[D] HH[H] mm[M]');
      break;
    case (timeDiff >= ETime.MsInHour):
      waypointDuration = dayjs.duration(timeDiff).format('HH[H] mm[M]');
      break;
    case (timeDiff < ETime.MsInHour):
      waypointDuration = dayjs.duration(timeDiff).format('mm[M]');
      break;
  }
  return waypointDuration;
}

export { humanizeDate, capitalize, getTimeDiff };
