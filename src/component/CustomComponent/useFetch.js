import { useEffect, useState } from "react";

function useFetch(url) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [filterCountry, setFilterCountry] = useState(countries);
  const onCountries = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
      setFilterCountry(data);
      setLoading(false);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };
  useEffect(() => {
    onCountries(url);
  }, [url]);
  const onRemoveCount = (cname) => {
    const countryfilter = filterCountry.filter((fcountry) => {
      return fcountry.name !== cname;
    });
    setFilterCountry(countryfilter);
  };
  const onSearch = (svalue) => {
    const lowValue = svalue.toLowerCase();
    const filterCountry = countries.filter((country) => {
      const lowcountry = country.name.toLowerCase();
      return lowcountry.startsWith(lowValue);
    });
    setFilterCountry(filterCountry);
  };
  return { countries, loading, error, filterCountry, onRemoveCount, onSearch };
}

export default useFetch;
