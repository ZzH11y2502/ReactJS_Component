import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div className="banner  p-3">
          <h1 className="mt-3  text-left">A Warm Welcome</h1>
          <p className="text-left mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            doloribus illo nam fuga? Repellendus autem quas at dolorem odit
            blanditiis dolore voluptatum quaerat.
          </p>
          <button className="btn btn-primary  mt-5">Call to action!</button>
        </div>
      </div>
    );
  }
}
