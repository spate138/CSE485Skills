/* eslint-disable react/prop-types */

import React from "react";

const Navigation = ({ nextCard }) => {
    return (
      <div className="navigation">
        <button onClick={nextCard}>Next</button>
      </div>
    );
  };
  
  export default Navigation;
  