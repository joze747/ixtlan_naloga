import { useState } from "react";
import { buttonStyle, inputStyle, outerDivStyle } from "./styles";

// Vnašanje in potrjevanje celega datuma
const DirectDateInput = ({ setDate, handleClick }) => {
  const [hover, setHover] = useState("17px");
  const buttonTextStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: hover,
    cursor: "pointer"
  };

  return (
    <div style={outerDivStyle}>
      <input
        style={inputStyle}
        type="text"
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        style={buttonStyle}
        onClick={handleClick}
        onMouseEnter={() => setHover("19px")}
        onMouseLeave={() => setHover("17px")}
      >
        <div style={buttonTextStyle}>Išči</div>
      </button>
    </div>
  );
};

export default DirectDateInput;
