import React from "react";
import ReactDOM from 'react-dom'
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import Script from "react-load-script";

import Navbar from "../components/Navbar";
import "./all.sass";

class TemplateWrapper extends React.Component {

  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.timeline = React.createRef();
    // this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    // window.initTimeline = this.initTimeline;

    loadJS('https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js');

    new TL.Timeline(this.refs.timeline, "../data/england.json", {
      // ga_property_id: "UA-XXXX" 
    });
    // window.onresize = function(event) {
    //   timeline.updateDisplay();
    // };
  }

  // initTimeline() {
  //   const timeline = new TL.Timeline(this.refs.timeline, "../data/england.json", {
  //     // ga_property_id: "UA-XXXX" 
  //   });
  //   window.onresize = function(event) {
  //     timeline.updateDisplay();
  //   };
  // }

  // All this file should be in separate component inside blog post. TRY THAT OUT NEXT.

  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet title="Daniel Easterman" />
        <Navbar />        
        <div>{children()}</div>
        <div ref="timeline" style={{height: '100%', width: '100%'}}></div>
      </div>
    );
  }  
}

function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
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
