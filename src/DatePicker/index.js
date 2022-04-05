import { useState } from "react";
import Select from "react-select";
import { getFirstWeekDay, getDaysInMonth } from "./code";
import { months } from "./constants";
import Day from "./Day";
import WeekDaysText from "./WeekDaysText";

const datePickerBoxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "20rem",
  height: "15rem",
  backgroundColor: "white",
  paddingLeft: "7px",
  border: "2px solid whiteSmoke",
  borderRadius: "5px"
};
const customStyles = {
  container: (provided) => ({
    ...provided,
    backgroundColor: "white",
    border: "1px solid blue",
    borderRadius: "5px"
  })
};
const DatePicker = () => {
  const d = new Date();
  const [month, setMonth] = useState(d.getMonth());
  const [year, setYear] = useState(d.getFullYear());
  const [date, setDate] = useState("");
  const firstDay = getFirstWeekDay(month, year);
  console.log(firstDay);
  const daysInMonth = getDaysInMonth(month, year);

  const handleClick = () => {
    const isDate = date.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
    const month =
      isDate && parseInt(isDate[2], 10) <= 12 && parseInt(isDate[2], 10) > 0;
    const day =
      month &&
      getDaysInMonth(parseInt(isDate[2], 10) - 1, parseInt(isDate[3], 10)) >=
        parseInt(isDate[1], 10) &&
      0 < parseInt(isDate[1], 10);
    const dt =
      isDate &&
      month &&
      day &&
      new Date(
        parseInt(isDate[3], 10),
        parseInt(isDate[2], 10) - 1,
        parseInt(isDate[1], 10)
      );
    console.log(dt);
    console.log(month);
    console.log(day);
    day && setMonth(parseInt(isDate[2], 10) - 1);
    day && setYear(parseInt(isDate[3], 10));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        width: "20rem",
        height: "30rem",
        backgroundColor: "white",
        paddingLeft: "7px",
        border: "4px solid blue",
        borderRadius: "15px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          marginBottom: "15px",
          marginTop: "15px",
          height: "2.4rem"
        }}
      >
        <input
          style={{
            backgroundColor: "white",
            border: "1px solid blue",
            borderRadius: "5px",
            fontSize: "17px",
            width: "8rem"
          }}
          type="text"
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          style={{
            width: "4rem",
            backgroundColor: "white",
            border: "1px solid blue",
            borderRadius: "5px"
          }}
          onClick={handleClick}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "17px"
            }}
          >
            Išči
          </div>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          marginBottom: "5px"
        }}
      >
        <Select
          styles={customStyles}
          options={months}
          onChange={(value) => {
            setMonth(value.value);
          }}
          value={months[month]}
        />
        <input
          type="number"
          value={year}
          onChange={(e) => {
            return isNaN(e.target.value) ? null : setYear(e.target.value);
          }}
          style={{
            width: "6rem",
            backgroundColor: "white",
            border: "1px solid blue",
            borderRadius: "5px",
            fontSize: "17px"
          }}
        />
      </div>
      <WeekDaysText />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          width: "95%"
        }}
      >
        {[...Array(firstDay).keys()].map((value) => (
          <Day value={value} active={false} key={value} />
        ))}
        {[...Array(daysInMonth).keys()].map((value) => (
          <Day
            value={value}
            active={true}
            key={value}
            sunday={6 - firstDay === value % 7}
          />
        ))}
      </div>
    </div>
  );
};
export default DatePicker;
