import "./app.css";
import Countries from "./component/Countries";
import Search from "./component/Search";
import useFetch from "./component/CustomComponent/useFetch";
const url = "https://restcountries.com/v2/all";
function App() {
  const { countries, loading, error, filterCountry, onRemoveCount, onSearch } =
    useFetch(url);
  return (
    <>
      <div>
        <h1>Country App</h1>
        <Search onSearch={onSearch} />
        {loading && <h3>Loading...</h3>}
        {error && <h2>{error.message}</h2>}
        {countries && (
          <Countries countries={filterCountry} onRemoveCount={onRemoveCount} />
        )}
      </div>
    </>
  );
}

export default App;
