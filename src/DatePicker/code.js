import { dayNumsByMonths } from "./constants";
import holidays from "../holidays.txt";

// index dneva v tednu prvega dneva meseca
export function getFirstWeekDay(month, year) {
  const d = new Date();
  d.setMonth(month);
  d.setFullYear(year);
  d.setDate(1);
  return (d.getDay() - 1 + 7) % 7;
}

// število dnevov v mesecu
export function getDaysInMonth(month, year) {
  if (month === 1 && year % 4 === 0 && year % 100 !== 0) {
    return 29;
  }
  return dayNumsByMonths[month];
}

// izdelava tabele dnevov za prikaz iz podatkov iz datoteke holidays.txt
export async function getDaysArray(month, year, setResArray) {
  const resArray = new Array(getDaysInMonth(month, year)).fill(-1);
  await fetch(holidays)
    .then((r) => r.json())
    .then((data) => {
      data[month].forEach((element) => {
        if (element.year === -1 && element.day < getDaysInMonth(month, year))
          resArray[element.day] = element.name;
        else if (
          element.year === parseInt(year, 10) &&
          element.day < getDaysInMonth(month, year)
        )
          resArray[element.day] = element.name;
      });
    });
  return setResArray(resArray);
}
