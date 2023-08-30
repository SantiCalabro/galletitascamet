import React from "react";
import Layout from "../layouts/index";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import * as E from "../styles/Error.module.css";

export default function NotFound({ data }) {
  const cookie = getImage(data.cookie);
  return (
    <div>
      <Layout>
        <div className={E.container}>
          <div className={E.cookieContainer}>
            <GatsbyImage image={cookie} alt="La página que buscas no existe" />
          </div>
          <div className={E.textContainer}>
            <h3>La página que buscas no existe</h3>
            <Link to="/">
              <button>Volver al inicio</button>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export const query = graphql`
  query {
    cookie: file(relativePath: { eq: "galleta.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
  }
`;
