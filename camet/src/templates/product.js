import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layouts/index";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as P from "../styles/Product.module.css";
import WhatsappButton from "../components/WhatsappButtonLarge";

const ProductoTemplate = ({ data }) => {
  const card = data.markdownRemark;
  const image = getImage(
    card.frontmatter.image.childImageSharp.gatsbyImageData
  );

  return (
    <Layout>
      <div className={P.container}>
        <div className={P.imgContainer}>
          <div className={P.img}>
            <GatsbyImage image={image} alt={card.frontmatter.title} />
          </div>

          <div className={P.textBackground}>
            <div className={P.textContainer}>
              <h1>{card.frontmatter.title}</h1>
              <p className={P.description}>{card.frontmatter.description}</p>
              <p>
                <strong>Ideales para </strong>
                {card.frontmatter.ideals}
              </p>
            </div>
          </div>
        </div>
        <div className={P.rightColumn}>
          <div className={P.aditionalInfo}>
            <h5>
              Productos <strong>sin octógonos.</strong>
            </h5>
            <p>
              En Camet, te garantizamos que nuestros productos no llevan ningún
              octógono de advertencia. Creemos en la transparencia y en
              proporcionar productos que puedas consumir con total confianza y
              tranquilidad.
            </p>
          </div>
          <div className={P.whatsapp}>
            <WhatsappButton />
          </div>
        </div>
      </div>
      <div className={P.relatedProductsContainer}>
        <h2>• Más opciones para tu mesa •</h2>
        <div className={P.productsContainer}>
          {data.relatedProducts.nodes.map(product => (
            <Link to={`/productos/${product.frontmatter.productId}`}>
              <div
                key={product.frontmatter.productId}
                className={P.relatedProduct}
              >
                <div className={P.relatedImage}>
                  <GatsbyImage
                    image={getImage(
                      product.frontmatter.image.childImageSharp.gatsbyImageData
                    )}
                    alt={product.frontmatter.title}
                  />
                </div>
                <div className={P.relatedTextContainer}>
                  <h3>{product.frontmatter.title}</h3>
                  <p>{product.frontmatter.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($productId: String!, $relatedProducts: [String]!) {
    markdownRemark(frontmatter: { productId: { eq: $productId } }) {
      frontmatter {
        title
        productId
        description
        ideals
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
    relatedProducts: allMarkdownRemark(
      filter: { frontmatter: { productId: { in: $relatedProducts } } }
    ) {
      nodes {
        frontmatter {
          productId
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, quality: 100)
            }
          }
        }
      }
    }
  }
`;

export default ProductoTemplate;
