import { Component } from "react";

export default class PhotoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src, photographer } = this.props;
    return (
      <div>
        <img src={src.medium} />
        <div>{photographer}</div>
      </div>
    );
  }
}
