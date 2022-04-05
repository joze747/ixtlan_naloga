import { weekDaysShort } from "../constants";

const WeekDaysText = () => {
  return (
    <div
      style={{
        height: "2rem",
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        width: "95%",
        marginBottom: "5px"
      }}
    >
      {weekDaysShort.map((value) => (
        <div
          style={{
            height: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "95%"
          }}
          key={value}
        >
          {value}
        </div>
      ))}
    </div>
  );
};
export default WeekDaysText;
