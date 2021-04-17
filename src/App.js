import styles from "./App.module.css";
import React from "react";
import { fetchData } from "./api";
import { Cards, Chart, CountryPicker } from "./components";
import logo from "./assets/images/logo.jpg";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    // console.log(fetchedData);
  };
  render() {
    const { data, country } = this.state;
    // console.log(data);
    return (
      <div className={styles.container}>
        <img src={logo} className={styles.image} alt="covid-19" />
        <Cards data={data} />
        <CountryPicker handleChange={this.handleChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
