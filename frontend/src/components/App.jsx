import React from "react";
import { connect } from "react-redux";

import LocationSearch from "./LocationSearch.jsx";
import WeatherInfo from "./WeatherInfo.jsx";
import BaseScene from "./primitive/BaseScene.jsx";

// collects components to render

class UnconnectedApp extends React.Component {
  render = () => {
    return (
      <div>
        <BaseScene />
        <div className={"weather_scene"} />
        <LocationSearch />
        <WeatherInfo />
      </div>
    );
  };
}
let mapStateToProps = state => {
  return {};
};
let App = connect(mapStateToProps)(UnconnectedApp);

export default App;
