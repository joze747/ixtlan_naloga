import Select from "react-select";
import { months } from "../constants";
import { customStyles, inputStyle, outerDivStyle } from "./styles";

const WeekYear = ({ setMonth, month, setYear, year }) => (
  <div style={outerDivStyle}>
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
      style={inputStyle}
    />
  </div>
);
export default WeekYear;
