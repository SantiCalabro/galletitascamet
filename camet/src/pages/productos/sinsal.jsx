import React from "react";
import Layout from "../../layouts/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import WhatsappButtonLarge from "../../components/WhatsappButtonLarge.jsx";
import * as S from "../../styles/SinSal.module.css";
import { Link } from "gatsby";
export default function Sinsal({ data }) {
  const desktopHeader = getImage(data.headerBanner);
  const mobileHeader = getImage(data.headerMobileBanner);

  return (
    <Layout>
      <div className={S.desktopHeader}>
        <GatsbyImage
          image={desktopHeader}
          alt={"Banner con galletitas sin sal"}
        />
      </div>
      <div className={S.mobileHeader}>
        <GatsbyImage
          image={mobileHeader}
          alt={"Banner con galletitas sin sal"}
        />
      </div>
      <div className={S.titleContainer}>
        <h4>• Nuestras variedades sin sal •</h4>
      </div>
      <div className={S.productsContainer}>
        {data.products.nodes.map(p => (
          <Link to={`/productos/${p.frontmatter.productId}`}>
            <div className={S.itemContainer} key={p.frontmatter.productId}>
              <div className={S.image}>
                <GatsbyImage
                  image={getImage(
                    p.frontmatter.image.childImageSharp.gatsbyImageData
                  )}
                  alt={p.frontmatter.title}
                />
              </div>
              <div className={S.itemTitle}>
                <h5>{p.frontmatter.title}</h5>
                <p>
                  {p.frontmatter.description.includes("Paquete acomodado")
                    ? p.frontmatter.description.slice(0, 25)
                    : p.frontmatter.description.slice(0, 13)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={S.whatsappBtnContainer}>
        <WhatsappButtonLarge
          phoneNumber="+542213085752"
          message={"Hola, quiero más información"}
        />
      </div>
    </Layout>
  );
}
export const query = graphql`
  query {
    headerBanner: file(relativePath: { eq: "sin_sal_desktop_header.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
      }
    }
    headerMobileBanner: file(
      relativePath: { eq: "Sin_Sal_Mobile_Header.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
      }
    }
    products: allMarkdownRemark(
      filter: { frontmatter: { sal: { eq: "sin sal" } } }
    ) {
      nodes {
        frontmatter {
          productId
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
