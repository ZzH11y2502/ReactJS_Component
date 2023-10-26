import React, { Component } from "react";
import Banner from "../Banner/Banner";
import Item from "../Item/Item";
import Copyright from "../Copyright/Copyright";

export default class Body extends Component {
  render() {
    return (
      <div>
        <div className="container mt-2 ">
          <Banner />
          <div className="Item_slide mt-5 d-flex justify-content-between ">
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
        <Copyright />
      </div>
    );
  }
}
