import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import Script from "react-load-script";

import Navbar from "../components/Navbar";
import "./all.sass";

class TemplateWrapper extends React.Component {
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

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

// const TemplateWrapper = ({ children }) => (
//   <div>
//     <Helmet title="Daniel Easterman" />
//     <Navbar />
//     <div>{children()}</div>
//   </div>
// );

// executeAllBlogTimelines() {
//   let scripts = document.querySelectorAll(
//     '[data-inline-script="data-inline-script"]'
//   );
//   scripts.forEach(function forEachScript(element) {
//     const script = element.innerHTML;
//     window.Function(script)();
//     // window.eval(script);
//   });
// }
