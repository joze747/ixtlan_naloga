import { useState } from "react";

const Day = ({ value, active, sunday, holiday }) => {
  const [fontSize, setFontSize] = useState("16px");
  const dayStyleOff = {
    display: "flex",
    width: "2.2rem",
    height: "2.2rem",
    backgroundColor: "whitesmoke",
    marginTop: "5px",
    border: "1px solid whiteSmoke",
    borderRadius: "5px"
  };

  const dayStyleOn = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2.2rem",
    height: "2.2rem",
    backgroundColor: holiday ? "lightBlue" : "white",
    marginTop: "5px",
    border: "1px solid blue",
    borderRadius: "5px",
    fontSize: fontSize,
    cursor: "pointer"
  };

  const dayStyleOnSunday = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2.2rem",
    height: "2.2rem",
    backgroundColor: holiday ? "lightBlue" : "white",
    color: "red",
    marginTop: "5px",
    border: "1px solid blue",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: fontSize
  };

  return (
    <div
      style={active ? (sunday ? dayStyleOnSunday : dayStyleOn) : dayStyleOff}
      key={value}
      onMouseEnter={() => setFontSize("19px")}
      onMouseLeave={() => setFontSize("16px")}
    >
      {active && value + 1}
    </div>
  );
};

export default Day;
