import { Component } from "react";
import "./DestinationStyles.css";
import Manali1 from "/src/assets/27.avif";
import Manali2 from "/src/assets/28.avif";
import xyz from "/src/assets/13.avif";
class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img src={this.props.img1} alt="img" />
          <img src={this.props.img2} alt="img" />
        </div>
      </div>
    );
  }
}

export default DestinationData;
