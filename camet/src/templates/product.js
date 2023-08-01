import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/index";
// import Img from "gatsby-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProductoTemplate = ({ data }) => {
  const card = data.markdownRemark;
  const image = getImage(
    card.frontmatter.image.childImageSharp.gatsbyImageData
  );
  return (
    <Layout>
      <div>
        <div>
          <GatsbyImage image={image} alt={card.frontmatter.title} />
          {/* <Img fluid={card.frontmatter.image.childImageSharp.fluid} /> */}
        </div>
        <h1>{card.frontmatter.title}</h1>
        <p>{card.frontmatter.productId}</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($productId: String!) {
    markdownRemark(frontmatter: { productId: { eq: $productId } }) {
      frontmatter {
        title
        productId
        description
        ideals
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
// childImageSharp {
//   fluid(maxWidth: 800) {
//     ...GatsbyImageSharpFluid
//   }
// }
export default ProductoTemplate;
