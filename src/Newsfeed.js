import React, { Component } from "react";
import "./Newsfeed.css";
import LineGraph from "./LineGraph";

export class Newsfeed extends Component {
  render() {
    return (
      <div className="newsfeed">
        <div className="newsfeed__container">
          <div className="newsfeed__chartSection">
            <div className="newsfeed__portfolio">
              <h1>$114,568</h1>
              <p>+$44.63 (+0.04%) Today</p>
            </div>
            <div className="newsfeed__chart">
              <LineGraph />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsfeed;