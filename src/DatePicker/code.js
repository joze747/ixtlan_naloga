import { dayNumsByMonths, months, weekDaysShort } from "./constants";

export function dater() {
  const d = new Date();
  console.log(months[d.getMonth()]);
  d.setDate(1);
  console.log(weekDaysShort[d.getDay() - 1]);
}
export function getFirstWeekDay(month, year) {
  const d = new Date();
  d.setMonth(month);
  d.setFullYear(year);
  d.setDate(1);
  return (d.getDay() - 1 + 7) % 7;
}

export function getDaysInMonth(month, year) {
  if (month === 1 && year % 4 === 0 && year % 100 !== 0) {
    return 29;
  }
  return dayNumsByMonths[month];
}
