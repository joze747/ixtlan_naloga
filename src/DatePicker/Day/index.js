const Day = ({ value, active, sunday }) => {
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
    backgroundColor: "white",
    marginTop: "5px",
    border: "1px solid blue",
    borderRadius: "5px"
  };

  const dayStyleOnSunday = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2.2rem",
    height: "2.2rem",
    backgroundColor: "white",
    color: "red",
    marginTop: "5px",
    border: "1px solid blue",
    borderRadius: "5px"
  };

  return (
    <div
      style={active ? (sunday ? dayStyleOnSunday : dayStyleOn) : dayStyleOff}
      key={value}
    >
      {active && value + 1}
    </div>
  );
};

export default Day;
