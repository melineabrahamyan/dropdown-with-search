import { Component } from "react";

export default class PhotoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src, photographer } = this.props;
    return (
      <div className="card">
        <img src={src.medium} />
        <div className="name">{photographer}</div>
      </div>
    );
  }
}
