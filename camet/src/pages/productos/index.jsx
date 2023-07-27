import React from "react";
import Layout from "../../layouts/index.jsx";
import { graphql, Link } from "gatsby";
import * as P from "../../styles/Products.module.css";
import Img from "gatsby-image";
export default function Productos({ data }) {
  return (
    <Layout>
      <div className={P.desktopHeader}>
        <Img
          fluid={data.desktopBanner.childImageSharp.fluid}
          alt="Fotografía de galletitas con salamín"
        />
      </div>
      <div className={P.responsiveHeader}>
        <Img
          fluid={data.mobileBanner.childImageSharp.fluid}
          alt="Fotografía de galletitas con salamín"
        />
      </div>
      <div className={P.titleContainer}>
        <h3>• Nuestras variedades •</h3>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    desktopBanner: file(relativePath: { eq: "productos.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileBanner: file(relativePath: { eq: "productos_mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
