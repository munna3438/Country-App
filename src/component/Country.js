import React from "react";
import style from "./country.module.css";
function Country(props) {
  const RemoveCountry = (name) => {
    props.onRemoveCount(name);
  };
  const { name, flags, capital, population, area } = props.country;
  return (
    <article className={style.country}>
      <div>
        <img className={style.flag} src={flags.png} alt={name} />
        <h3>Name : {name}</h3>
        <h3>Population : {population}</h3>
        <h3>Capital : {capital}</h3>
        <h3>Area : {area}</h3>
        <button
          onClick={() => {
            RemoveCountry(name);
          }}
          className={style.btn}>
          Remove
        </button>
      </div>
    </article>
  );
}

export default Country;
