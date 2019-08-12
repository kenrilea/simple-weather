import React from "react";
import { connect } from "react-redux";

import WeatherScene from "./WeatherScene.jsx";
import WeatherDataTable from "./WeatherDataTable.jsx";

// verifies the weather data in the store and then renders the data table
// and the scene with weather (clouds/rain/sun)

class UnconnectedWeatherInfo extends React.Component {
  renderWeatherData = () => {
    if (
      this.props.weatherData === undefined ||
      this.props.weatherData.weather === undefined
    ) {
      return <></>;
    }
    return (
      <div>
        <WeatherScene
          cloudCover={this.props.weatherData.clouds.all}
          weatherMain={this.props.weatherData.weather[0].main}
        />
        <WeatherDataTable weatherData={this.props.weatherData} />
      </div>
    );
  };
  render = () => {
    return <div>{this.renderWeatherData()}</div>;
  };
}
let mapStateToProps = state => {
  return { weatherData: state.weatherData };
};
let WeatherInfo = connect(mapStateToProps)(UnconnectedWeatherInfo);

export default WeatherInfo;
