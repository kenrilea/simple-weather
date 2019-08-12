import React from "react";

//a submit input; submits the form it belongs to when clicked on.
//    - the action of this input can not be seen in this component
//      as it will trigger the onSubmit of the form it belongs to

export default class UnconnectedSearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render = () => {
    return <input className={"input_submit"} type={"submit"} value={"Go!"} />;
  };
}
