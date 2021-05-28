import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./layout.module.css";

export default function Layout({ children, home }) {
	const data = useStaticQuery(
		graphql`
			query getName {
				site {
					siteMetadata {
						name
					}
				}
			}
		`
	);

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				{home ? (
					<>
						<StaticImage
							src="../images/user.jpg"
							placeholder="blurred"
							className={styles.headerImage}
							quality={90}
							layout="fixed"
							width={144}
							height={144}
							alt="user"
						/>
						<h1 className={styles.headerTitle}>
							{data.site.siteMetadata.name}
						</h1>
					</>
				) : (
					<>
						<Link to="/">
							<StaticImage
								src="../images/user.jpg"
								placeholder="blurred"
								className={styles.headerImage}
								quality={90}
								layout="fixed"
								width={120}
								height={120}
								alt="user"
							/>
						</Link>
						<h1 className={styles.headerTitle}>
							{data.site.siteMetadata.name}
						</h1>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
				<Link to="/">
					<a>← Back to home</a>
				</Link>
			</div>
			)}
		</div>
	);
}
