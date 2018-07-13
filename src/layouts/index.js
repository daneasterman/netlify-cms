import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.sass";

class TemplateWrapper extends React.Component {
  componentDidMount() {
    let scripts = document.querySelectorAll(
      '[data-inline-script="data-inline-script"]'
    );
    scripts.forEach(function forEachScript(element) {
      const script = element.innerHTML;
      window.eval(script);
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet title="Daniel Easterman" />
        <Navbar />
        <div>{children()}</div>
      </div>
    );
  }
}

// const TemplateWrapper = ({ children }) => (
//   <div>
//     <Helmet title="Daniel Easterman" />
//     <Navbar />
//     <div>{children()}</div>
//   </div>
// );

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
