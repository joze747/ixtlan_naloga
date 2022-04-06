import { useState } from "react";

const Exit = ({ setActive }) => {
  const [hover, setHover] = useState("17px");

  const buttonStyle = {
    width: "4rem",
    backgroundColor: "red",
    border: "1px solid red",
    borderRadius: "5px"
  };

  const buttonTextStyle = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: hover,
    cursor: "pointer",
    color: "white",
    fontWeight: "bold"
  };

  return (
    <div
      style={{
        width: "90%",
        height: "2rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: "10px"
      }}
    >
      <button
        style={buttonStyle}
        onClick={() => setActive(false)}
        onMouseEnter={() => setHover("18px")}
        onMouseLeave={() => setHover("17px")}
      >
        <div style={buttonTextStyle}>Izhod</div>
      </button>
    </div>
  );
};
export default Exit;
