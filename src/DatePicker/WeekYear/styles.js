export const outerDivStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "90%",
  marginBottom: "5px"
};

export const inputStyle = {
  width: "6rem",
  backgroundColor: "white",
  border: "1px solid blue",
  borderRadius: "5px",
  fontSize: "17px"
};

export const customStyles = {
  container: (provided) => ({
    ...provided,
    backgroundColor: "white",
    border: "1px solid blue",
    borderRadius: "5px"
  })
};
