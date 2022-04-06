import Day from "./Day";
import { outerDiv } from "./styles";

const DaysGrid = ({ firstDay, daysInMonth, daysArray }) => {
  return (
    <div style={outerDiv}>
      {[...Array(firstDay).keys()].map((value) => (
        <Day value={value} active={false} key={value} />
      ))}
      {daysArray.map((value, i) => (
        <Day
          value={i}
          active={true}
          key={i}
          sunday={6 - firstDay === i % 7}
          holiday={value !== -1}
        />
      ))}
    </div>
  );
};
export default DaysGrid;
