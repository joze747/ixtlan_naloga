import { useState } from "react";

const TitleButton = ({ setActive }) => {
  const [fontSize, setFontSize] = useState("20px");
  const titleStyle = {
    width: "20rem",
    height: "3rem",
    border: "4px solid blue",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: fontSize,
    fontWeight: "bold",
    cursor: "pointer"
  };
  return (
    <div
      style={titleStyle}
      onClick={() => setActive(true)}
      onMouseEnter={() => setFontSize("22px")}
      onMouseLeave={() => setFontSize("20px")}
    >
      Koledarček
    </div>
  );
};
export default TitleButton;
