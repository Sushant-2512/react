import React from "react";
import { Link } from "react-router-dom";
import "../css/Animation.css"


const Animation = () => {
  return (
    <div style={styles.container}>
      <p>Fade In</p>
      <div className="Animation1">
        <p>This is animation</p>
      </div>
      <p>Fade Out</p>
      <div className="Animation2">
        <p>This is animation</p>
      </div>
    </div>
  );
};


const styles = {

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

};
export default Animation;
