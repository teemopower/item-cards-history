import React from "react";

export class Chair extends React.Component {
  componentDidMount() {
    console.log("chairs.js", this.props);
  }

  render() {
    return (
      <div>
        <button
          style={{ marginTop: "20px" }}
          onClick={this.props.history.goBack}
        >
          Back
        </button>
      </div>
    );
  }
}
