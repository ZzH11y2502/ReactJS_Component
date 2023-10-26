import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div>
        <div className="card mr-2">
          <div className="card-img-top">
            <img src={`https://picsum.photos/300/300`} alt="" />
          </div>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
