import React from "react";
import { connect } from "react-redux";

import DataTableRow from "./primitive/DataTableRow.jsx";

import "../styles/DataTable.css";

// the weather data table renders selected properties of the object in the API.

// with additional time this could be turned into a component that acts similarily
// to the ReactTable component from the ReactTable library

class WeatherDataTable extends React.Component {
  render = () => {
    return (
      <div className={"weather_info"}>
        <DataTableRow
          name={"Conditions"}
          value={this.props.weatherData.weather[0].description}
        />
        <DataTableRow
          name={"Temperature"}
          value={
            Math.round(parseInt(this.props.weatherData.main.temp) - 273.15) +
            "C"
          }
        />
        <DataTableRow
          name={"Humidity"}
          value={this.props.weatherData.main.humidity + "%"}
        />
        <DataTableRow
          name={"Wind Speed"}
          value={parseInt(this.props.weatherData.wind.speed) * 3.6 + " km/h"}
        />
      </div>
    );
  };
}

export default WeatherDataTable;
