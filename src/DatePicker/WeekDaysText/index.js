import { weekDaysShort } from "../constants";
import { outerDivStyle, textStyle } from "./styles";

// Prikaz dnevov imen dnevov nad gridom
const WeekDaysText = () => {
  return (
    <div style={outerDivStyle}>
      {weekDaysShort.map((value) => (
        <div style={textStyle} key={value}>
          {value}
        </div>
      ))}
    </div>
  );
};
export default WeekDaysText;
