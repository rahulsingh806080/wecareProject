import React from "react";

export default class WhiteBoard extends React.Component {
  state = {
    count: 1,
    boards: [1],
  };

  addPage = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  previousPage = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.addPage}>Add Page</button>
        <button onClick={this.previousPage}>Previous Page</button>
      </>
    );
  }
}
