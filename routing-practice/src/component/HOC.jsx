import { useState, StyleSheet } from "react";
const HOC = ({ ChildComponent }) => {
  const [color, setColor] = useState("white");
  const [cColor, setcColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const isRedValid = CSS.supports("color", cColor);
    if (isRedValid) setColor(cColor);
    else alert("Color is Not valid !");
  };
  return (
    <div style={styles.container}>
      <div>
        <form style={styles.formContainer}>
          <input
            type="text"
            placeholder="Input color"
            name="color"
            onChange={(e) => setcColor(e.target.value)}
          />

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <br />
      </div>
      <div style={{...styles.container3,backgroundColor:color}}>
        <ChildComponent />
      </div>
    </div>
  );
};

const styles = {
  container3: {
    width: 100,
    hegiht: 100,
    alignSelf: "center",
    borderRadius: 20,
  },
  formContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "30px",
  },
};
export default HOC;
