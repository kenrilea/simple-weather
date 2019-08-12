import React from "react";

import { proxy } from "../../constants.js";
import checkWeatherExtras from "../../helpers/checkWeatherExtras.js";

//renders a number of clouds depending on the quantity of cloud cover.  1 cloud per 25% cover
//if it is raining as determined by the checkWeatherExtras function this componenet also renders Rain

class Cloud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderClouds = () => {
    let nClouds = Math.round(parseInt(this.props.percentageCover) / 25);
    let cloudArray = [];
    let leftOffset = 0;
    for (let i = 0; i < nClouds; i++) {
      cloudArray.push(
        <img
          key={"cloud_" + i}
          className={"cloud"}
          style={{ left: leftOffset + "px" }}
          src={proxy + "/images/cloud.png"}
        />
      );
      if (checkWeatherExtras(this.props.weatherMain, "rain") === true)
        cloudArray.push(
          <img
            key={"rain_" + i}
            className={"rain"}
            style={{ left: leftOffset + 5 + "px" }}
            src={proxy + "/images/rain.png "}
          />
        );
      leftOffset = 150 / nClouds + leftOffset;
    }
    return cloudArray;
  };
  render = () => {
    return <>{this.renderClouds(this.state.isRaining)}</>;
  };
}

export default Cloud;
