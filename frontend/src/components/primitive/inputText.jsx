import React from "react";

//a text input that calls a callback function when the user provides input

export default class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInputValue: "" };
  }
  handleTextInput = event => {
    this.props.onChangeCallback(event.target.value);
    this.setState({ searchInputValue: event.target.value });
  };

  render = () => {
    return (
      <input
        className={"input_text"}
        type={"text"}
        onChange={this.handleTextInput}
        value={this.state.searchInputValue}
        placeholder={this.props.placeholder}
      />
    );
  };
}
