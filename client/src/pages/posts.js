import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import moment from 'moment';
import marked from 'marked';
import './index.css'

const PostPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allStrapiPost.edges.map(document => (
        <li key={document.node.id}>
          <p>{moment(document.node.date).format('MMMM Do, YYYY')}</p>
          <h2><Link to={`/posts/${document.node.id}`}>{document.node.title}</Link></h2>
          <br />
          <div className="all-posts-body"
            dangerouslySetInnerHTML={{ __html: marked(document.node.body) }}
          />
          <br />
          <p>Posted by: {document.node.author}</p>
          <hr />
          <br />
        </li>
      ))}
    </ul>
  </Layout>
);

export default PostPage;

export const pageQuery = graphql`
  query PostQuery {
    allStrapiPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          body
          author
          date
          image1
          image2
        }
      }
    }
  }
`;
