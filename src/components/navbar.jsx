import React from "react";
import $ from "jquery";

import me from "../img/me.jpg"
import me2 from "../img/me2.jpg"

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: me,
    };
    this.navbarRef = React.createRef(); // Create a ref for the navbar
  }

  componentDidMount() {
    const nav = $(this.navbarRef.current); // Use the ref to access the navbar
    let navHeight = nav.outerHeight();

    // Toggle navbar-reduce class on button click
    $(".navbar-toggler").on("click", () => {
      if (!$(this.navbarRef.current).hasClass("navbar-reduce")) {
        $(this.navbarRef.current).addClass("navbar-reduce");
      }
    });

    // Initialize scrollspy
    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight,
    });

    // Close navbar on scroll link click
    $(".js-scroll").on("click", () => {
      $(".navbar-collapse").collapse("hide");
    });

    // Handle scroll event
    window.addEventListener("scroll", () => {
      const navbar = this.navbarRef.current;
      if (!navbar) {
        console.error("Navbar element not found!");
        return;
      }

      if (window.pageYOffset > 50) {
        navbar.classList.add("navbar-reduce");
        navbar.classList.remove("navbar-trans");
        this.setState({ logo: me2 });
      } else {
        navbar.classList.add("navbar-trans");
        navbar.classList.remove("navbar-reduce");
        this.setState({ logo: me });
      }
    });

    // Smooth scrolling for anchor links
    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function (e) {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        const target = $(this.hash);
        if (target.length) {
          e.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5,
            },
            1000,
            "easeInExpo"
          );
        }
      }
    });

    // Close navbar on scroll link click
    $(".js-scroll").on("click", () => {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
        ref={this.navbarRef} // Attach the ref to the nav element
      >
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
            <img
              src={this.state.logo}
              alt="logo"
              style={{ 
                maxWidth: "100px",
                borderRadius: "50%"
              }}
            />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;