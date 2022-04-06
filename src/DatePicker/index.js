import { useEffect, useState } from "react";
import { getFirstWeekDay, getDaysInMonth, getDaysArray } from "./code";
import DaysGrid from "./DaysGrid";
import DirectDateInput from "./DirectDateInput";
import Exit from "./Exit";
import { datePickerBoxStyle } from "./styles";
import TitleButton from "./TitleButton";
import WeekDaysText from "./WeekDaysText";
import WeekYear from "./WeekYear";

const DatePicker = () => {
  const d = new Date();
  // uporaba useStatov za spremenljike
  const [month, setMonth] = useState(d.getMonth());
  const [year, setYear] = useState(d.getFullYear());
  const [date, setDate] = useState("");
  const [daysArray, setDaysArray] = useState([]);
  const [active, setActive] = useState(false);
  const firstDay = getFirstWeekDay(month, year);
  const daysInMonth = getDaysInMonth(month, year);

  useEffect(() => {
    getDaysArray(month, year, setDaysArray);
  }, [month, year]);

  const handleClick = () => {
    // preverjanje ali je vnešen datum pravilne oblike z regex
    const isDate = date.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
    // preverjanje ali je vnešena vrednost meseca datuma sprejemljiva
    const month =
      isDate && parseInt(isDate[2], 10) <= 12 && parseInt(isDate[2], 10) > 0;
    // preverjanje ali je vnešena vrednost dneva datuma glede na mesec sprejemljiva
    const day =
      month &&
      getDaysInMonth(parseInt(isDate[2], 10) - 1, parseInt(isDate[3], 10)) >=
        parseInt(isDate[1], 10) &&
      0 < parseInt(isDate[1], 10);

    day && setMonth(parseInt(isDate[2], 10) - 1);
    day && setYear(parseInt(isDate[3], 10));
  };

  return active ? (
    <div style={datePickerBoxStyle}>
      <Exit setActive={setActive} />
      <DirectDateInput setDate={setDate} handleClick={handleClick} />
      <WeekYear
        setMonth={setMonth}
        month={month}
        year={year}
        setYear={setYear}
      />
      <div style={{ height: "1rem" }} />
      <WeekDaysText />
      <DaysGrid
        daysInMonth={daysInMonth}
        firstDay={firstDay}
        daysArray={daysArray}
      />
    </div>
  ) : (
    <TitleButton setActive={setActive} />
  );
};
export default DatePicker;
