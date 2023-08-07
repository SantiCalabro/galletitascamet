import React from "react";
import Layout from "../../layouts/index.jsx";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as P from "../../styles/Products.module.css";
import Img from "gatsby-image";
import WhatsappButtonLarge from "../../components/WhatsappButtonLarge.jsx";

export default function Productos({ data }) {
  const cards = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className={P.container}>
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
        <div className={P.itemContainer}>
          {cards.map(card => {
            const image = getImage(card.frontmatter.image);
            return (
              <Link
                to={`/productos/${card.frontmatter.productId}`}
                key={card.id}
              >
                <div key={card.id} className={P.item}>
                  <div className={P.productImage}>
                    <div className={P.img}>
                      <GatsbyImage image={image} alt={card.frontmatter.title} />
                    </div>
                  </div>
                  <span>{card.frontmatter.title}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={P.whatsapp}>
          <WhatsappButtonLarge
            phoneNumber="+542213085752"
            message={"Hola, quiero más información"}
            text={"Hacenos tu pregunta"}
          />
        </div>
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
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          productId
          image {
            childImageSharp {
              gatsbyImageData(width: 150)
            }
          }
        }
      }
    }
  }
`;
