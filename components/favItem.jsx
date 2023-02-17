import { useState, useEffect } from "react";
import React from "react";

const FavItem = (props) => {  
  return (
    <li>
      <span
        onClick={() => {
          props.check(props.cityName);
        }}
      >
        {props.cityName}
      </span>
      <button
        id="delButton"
        onClick={() => {
          props.del(props.cityName);
        }}
      >
        ×
      </button>
    </li>
  );
};

export default FavItem;