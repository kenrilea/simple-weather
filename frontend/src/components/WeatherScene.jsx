import React from "react";
import { connect } from "react-redux";

import CloudCover from "./primitive/CloudCover.jsx";

import { proxy } from "../constants.js";

//renders the sun and the clouds

class UnconnectedWeatherScene extends React.Component {
  render = () => {
    return (
      <div>
        <img className={"sun"} src={proxy + "/images/sun.png"} />
        <CloudCover
          percentageCover={this.props.cloudCover}
          weatherMain={this.props.weatherMain}
        />
      </div>
    );
  };
}
let mapStateToProps = state => {
  return { weatherData: state.weatherData };
};
let WeatherScene = connect(mapStateToProps)(UnconnectedWeatherScene);

export default WeatherScene;
