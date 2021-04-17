import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
import { useEffect, useState } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
const CountryPicker = ({ handleChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchApi = async () => setCountries(await fetchCountries());

    fetchApi();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
