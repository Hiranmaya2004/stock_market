import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="./">
          <img
            src="public/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-lg-0">
              <li class="nav-item">
                <Link  class="nav-link active text-secondary" aria-current="page" to="./singup">
                  Signup
                </Link >
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-secondary" to="./about"  >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link  class="nav-link active text-secondary" to="./product">
                  Product
                </Link >
              </li>
              <li class="nav-item">
                <Link  class="nav-link active text-secondary" to="./pricing">
                  Pricing
                </Link >
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-secondary" to="./support">
                  Support
                </Link >
              </li>
              <li class="nav-item mt-2">
                <i class="ri-menu-line"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
