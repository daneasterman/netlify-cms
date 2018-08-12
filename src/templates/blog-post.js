import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);    
  }

  // Key Timeline JS proprietary code:
  // https://cdn.knightlab.com/libs/timeline3/latest/js/timeline.js
  // const timelineID = document.getElementById('timelineID');

  //   const timeline = new TL.Timeline(timelineID, "../../data/england.json");
  //   window.onresize = function(event) {
  //     timeline.updateDisplay();
  //   };

  componentWillUnmount() {
    var elem = document.querySelector('#timelineID');
    elem.parentNode.removeChild(elem);
  }

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

export default BlogPost;

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
