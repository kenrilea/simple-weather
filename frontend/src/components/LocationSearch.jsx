import React from "react";
import { connect } from "react-redux";

import InputText from "./primitive/InputText.jsx";
import InputSubmit from "./primitive/InputSubmit.jsx";

import GetCurrentByCity from "../helpers/fetches/GetCurrentByCity.js";

//A form where users enter the city and the country
//    - on submit this will fetch the cities data from the api
//      and add it to the redux store

class UnconnectedLocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchCity: "", searchCountry: "" };
  }
  onChangeCountryInput = newValue => {
    this.setState({ searchCountry: newValue });
  };
  onChangeCityInput = newValue => {
    this.setState({ searchCity: newValue });
  };
  submitSearch = event => {
    event.preventDefault();
    GetCurrentByCity(this.state.searchCity, this.state.searchCountry).then(
      weatherData => {
        this.props.dispatch({ type: "newWeatherData", data: weatherData });
      }
    );
    this.setState({ searchInputValue: "" });
  };
  render = () => {
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <InputText
            onChangeCallback={this.onChangeCityInput}
            placeholder={"City"}
          />
          <InputText
            onChangeCallback={this.onChangeCountryInput}
            placeholder={"Country"}
          />
          <InputSubmit />
        </form>
      </div>
    );
  };
}
let LocationSearch = connect()(UnconnectedLocationSearch);
export default LocationSearch;
