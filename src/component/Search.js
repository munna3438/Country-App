import React, { useEffect, useState } from "react";

function Search(props) {
  const [value, setValue] = useState("");
  const searchHandel = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    props.onSearch(value);
  }, [value]);
  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" onInput={searchHandel} />
    </div>
  );
}

export default Search;
