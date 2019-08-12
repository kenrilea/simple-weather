import React from "react";

import { proxy } from "../../constants.js";

//renders the ground, sky, and house

class BaseScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => {
    return (
      <div className={"sky"}>
        <img className={"ground"} src={proxy + "/images/ground.png"} />
        <img className={"house"} src={proxy + "/images/house.png"} />
      </div>
    );
  };
}

export default BaseScene;
