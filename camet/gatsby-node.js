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
          }
        }
      }
    }
  `);

  // Recorre los nodos y crea una página para cada producto
  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: `/productos/${node.frontmatter.productId}`,
      component: path.resolve("./src/templates/product.js"),
      context: {
        // Pasamos el productId como variable para la consulta GraphQL en el archivo "producto.js"
        productId: node.frontmatter.productId,
      },
    });
  });
};
