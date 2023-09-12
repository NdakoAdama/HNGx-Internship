const days = [
  "sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDay = new Date();
const currentDayOfTheWeek = days[currentDay.getDay()];
const daysOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
daysOfTheWeek.textContent = currentDayOfTheWeek;

const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
const currentTimeInMS = new Date().getTime();
utcTimeElement.textContent = currentTimeInMS;
