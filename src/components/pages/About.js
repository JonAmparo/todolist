import React from "react";

function About() {
  return (
    <React.Fragment>
      <h1 style={textCenter}>About</h1>
      <p style={textCenter}>
        This is the To do list application made with React
      </p>
    </React.Fragment>
  );
}

const textCenter = {
  textAlign: "center"
};

export default About;
