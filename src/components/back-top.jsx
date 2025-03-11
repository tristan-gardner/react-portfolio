import React from 'react';
import $ from 'jquery';
import '../libs/easing.js';

class BackToTop extends React.Component {
  constructor(props) {
    super(props);
    this.backToTopRef = React.createRef(); // Create a ref for the .back-to-top element
    this.handleScroll = this.handleScroll.bind(this); // Bind the scroll handler
  }

  componentDidMount() {
    const backToTopElement = this.backToTopRef.current; // Access the element using ref

    // Smooth scroll to top on click
    $(backToTopElement).on('click', this.handleClick);

    // Add scroll event listener
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    const backToTopElement = this.backToTopRef.current;

    // Clean up jQuery click handler
    $(backToTopElement).off('click', this.handleClick);

    // Remove scroll event listener
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick(e) {
    e.preventDefault(); // Prevent default anchor behavior
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
  }

  handleScroll() {
    const backToTopElement = this.backToTopRef.current;

    if (backToTopElement) {
      if (window.pageYOffset > 100) {
        backToTopElement.classList.remove('fadeOut');
        backToTopElement.style.display = 'block';
        backToTopElement.classList.add('fadeIn');
      } else {
        backToTopElement.classList.remove('fadeIn');
        backToTopElement.classList.add('fadeOut');
      }
    }
  }

  render() {
    return (
      <a href="#" className="back-to-top animated" ref={this.backToTopRef}>
        <i className="fa fa-chevron-up"></i>
      </a>
    );
  }
}

export default BackToTop;