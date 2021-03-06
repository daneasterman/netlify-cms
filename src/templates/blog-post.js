import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";
import scriptLoader from 'react-async-script-loader'

 // Key Timeline JS proprietary code:
  // https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js
  // const timelineID = document.getElementById('timelineID');

  //   const timeline = new TL.Timeline(timelineID, "../../data/england.json");
  //   window.onresize = function(event) {
  //     timeline.updateDisplay();
  //   };

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);    
  }

  componentWillReceiveProps (isScriptLoaded) {
    if (isScriptLoaded) {
        console.log("Script reached here and is loaded?")

        var markers = [];

            var map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 12,
                center: {lat: 37.7749300, lng: -122.4194200}
            });
        }
        else {
            alert("script not loaded")
        }        
    }
    
    //   const timelineID = document.getElementById('timelineID');
    //   const timeline = new TL.Timeline(timelineID, "../../data/england.json");
    //       window.onresize = function(event) {
    //         timeline.updateDisplay();
    //       };
    // }

  // componentWillUnmount() {
  //   const elem = document.getElementById('timelineID');     
  //   elem.parentNode.removeChild(elem);
  // }

  render() {
    const {
      content,
      contentComponent,
      description,
      tags,
      title,
      helmet
    } = this.props;

    const PostContent = contentComponent || Content;

    return (
      <section className="section">      
        <Helmet>
          <link
            title="timeline-styles"
            rel="stylesheet"
            href="https://cdn.knightlab.com/libs/timeline3/latest/css/timeline.css"
          />
        </Helmet>        
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="blog-title">{title}</h1>
                <p>{description}</p>

                <PostContent content={content} />
                <div id="timelineID" />
                <div id="map" style={{height: "600px"}} />
                {tags && tags.length ? (
                  <div style={{ marginTop: `4rem` }}>
                    <h4>Tags</h4>
                    <ul className="taglist">
                      {tags.map(tag => (
                        <li key={tag + `tag`}>
                          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  );
};

BlogPost.propTypes = {  
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

// export default scriptLoader('https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js')(BlogPost);

export default scriptLoader([`https://maps.googleapis.com/maps/api/js?key=${process.env.GMAPS_API_KEY}`])(BlogPost);

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
