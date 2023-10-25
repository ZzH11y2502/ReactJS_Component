import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark  d-flex justify-content-around ">
          <a class="navbar-brand text-light" href="#">
            Start Boostraps
          </a>

          <div class="navbar-nav ">
            <a class="nav-link text-light active " href="#">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-link text-light" href="#">
              Features
            </a>
            <a class="nav-link text-light" href="#">
              Pricing
            </a>
            <a class="nav-link text-light">Contact</a>
          </div>
        </nav>
      </div>
    );
  }
}
