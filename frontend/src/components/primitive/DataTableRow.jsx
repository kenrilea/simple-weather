import React from "react";

import { proxy } from "../../constants.js";

//renders a name and corresponding data which are passed as props

class DataTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render = () => {
    return (
      <div className={"table_row"}>
        <div className={"table_row_name"}>{this.props.name}</div>
        <div className={"table_row_value"}>{this.props.value}</div>
      </div>
    );
  };
}

export default DataTableRow;
