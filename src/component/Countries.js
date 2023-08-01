import React from "react";
// import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
import style from "./countries.module.css";
function Countries(props) {
  return (
    <div className={style.coutries}>
      {props.countries.map((country, index) => {
        const newCountry = { country };
        return (
          <Country
            {...newCountry}
            key={index}
            onRemoveCount={props.onRemoveCount}
          />
        );
      })}
    </div>
  );
}

export default Countries;
