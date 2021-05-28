import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout.jsx";


const IndexPage = ({data}) => {

	return (
		<Layout home>
			<p className="lead text-center">Welcome to my personal blog. This blog has been built with React and Gatsby.</p>
      <br />
      <h2>Blog</h2>
      <ul className="list">
        {data.allMarkdownRemark.edges.map(({node: {id,frontmatter: {slug, title, date}}}) =>
      <li className="list-item" key={id}>
        <Link className="item-link" to={`/posts/${slug}`}>
          {title}
        </Link>
        <time>{date}</time>
      </li>
        )}
        </ul>
		</Layout>
	);
};
export default IndexPage;

export const query = graphql`
query getPosts{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`
