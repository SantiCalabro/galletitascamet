import * as React from "react";
import Layout from "../layouts/index";
import { Carousel } from "react-bootstrap";
import "../styles/global.css";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import FactoryProcess from "../components/FactoryProcess";
import * as I from "../styles/index.module.css";
import ProductsPreview from "../components/ProductsPreview";
export default function Home({ data }) {
  return (
    <Layout>
      <div className={I.desktopCarousel}>
        <Carousel>
          <Carousel.Item>
            <Link to="/productos/sinsal">
              <Img
                fluid={data.slide02ql.childImageSharp.fluid}
                alt="Línea sin sal"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={data.slide01ql.childImageSharp.fluid}
              alt="Tradición marplatense"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={I.responsiveCarousel}>
        <Carousel>
          <Carousel.Item>
            <Link to="/productos/sinsal">
              <Img
                fluid={data.slide01ql_resp.childImageSharp.fluid}
                alt="Línea sin sal"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Img
              fluid={data.slide02ql_resp.childImageSharp.fluid}
              alt="Tradición marplatense"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <ProductsPreview />
      <FactoryProcess />
    </Layout>
  );
}
export const query = graphql`
  query {
    slide01ql: file(relativePath: { eq: "Slide01_desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide02ql: file(relativePath: { eq: "Slide02_desktop.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide01ql_resp: file(relativePath: { eq: "sin_sal_mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide02ql_resp: file(relativePath: { eq: "lobo_mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
