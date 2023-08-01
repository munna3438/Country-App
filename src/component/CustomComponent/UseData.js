import React from "react";
import useFetch from "./useFetch";

function UseData() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const datatitle =
    data &&
    data.map((todo, index) => {
      return <p key={index}>{todo.title}</p>;
    });
  return (
    <div>
      {datatitle}
      {error && error}
      {loading && <h3>Loading...</h3>}
    </div>
  );
}

export default UseData;
