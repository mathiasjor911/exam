import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/Layout.jsx";
import * as styles from "./blogpost.module.css";

export default function BlogTemplate({ data }) {
	const { markdownRemark } = data;
	const { frontmatter:{title, date}, html } = markdownRemark;

	return (
		<Layout>
			<div className={styles.blogInfo}>
				<h1 className={styles.title}>{title}</h1>
				<span className={styles.date}>{date}</span>
			</div>
			<article
				dangerouslySetInnerHTML={{ __html: html }}
			></article>
		</Layout>
	);
}
export const query = graphql`
query($id: String!){
	markdownRemark(id: {eq: $id}) {
		html
		frontmatter{
      slug
      date(formatString: "MMMM DD, YYYY")
      title
		}
	}
}
`
