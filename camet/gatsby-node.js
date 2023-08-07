const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Consulta para obtener todos los productos desde tu fuente de datos
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            productId
            relatedProducts
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }
  // Recorre los nodos y crea una página para cada producto
  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/productos/${node.frontmatter.productId}`,
      component: path.resolve(__dirname, "./src/templates/product.js"),
      context: {
        productId: node.frontmatter.productId,
        relatedProducts: node.frontmatter.relatedProducts,
      },
    });
  });
};
