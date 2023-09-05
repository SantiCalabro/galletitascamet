import React from "react";
import Layout from "../../layouts/index.jsx";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as P from "../../styles/Products.module.css";
import Img from "gatsby-image";
import WhatsappButton from "../../components/WhatsappButton.jsx";
import { useState, useEffect } from "react";
import catalogo from "../../pdf/Catalogo.pdf";
export default function Productos({ data }) {
  const cards = data.allMarkdownRemark.nodes;
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerHeight = 200;
      const scrollFromBottom =
        document.body.scrollHeight - scrollPosition - windowHeight;
      setIsBottom(scrollFromBottom <= footerHeight);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <div
        className={`${P.whatsappButton} ${
          isBottom ? P.whatsappButtonBottom : ""
        }`}
      >
        <WhatsappButton
          phoneNumber="+5492233550129"
          message={"Hola, quiero más información"}
          text={"Hacenos tu pregunta"}
        />
      </div>
      <div className={P.container}>
        <div className={P.qualityContainer}>
          <div className={P.quality}>
            <h3>Para tu mesa, lo mejor</h3>
            <p>
              Nuestro compromiso con la salud va más allá de la calidad de los
              ingredientes. Trabajamos en estrecha colaboración con expertos en
              nutrición y salud para desarrollar productos que sean beneficiosos
              para tu bienestar. Nuestro objetivo es brindarte opciones
              alimentarias saludables que te ayuden a mantener un estilo de vida
              equilibrado y activo.
            </p>
          </div>
        </div>

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
                state={{ scrollTop: true }}
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
          <WhatsappButton
            phoneNumber="+5492233550129"
            message={"Hola, quiero más información"}
            text={"Hacenos tu pregunta"}
          />
        </div>
      </div>
      <div className={P.download}>
        <a href={catalogo} download="Catalogo">
          <button>
            Descargar catálogo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M16 11h5l-9 10-9-10h5v-11h8v11zm3 8v3h-14v-3h-2v5h18v-5h-2z" />
            </svg>
          </button>
        </a>
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
    allMarkdownRemark(sort: { fields: [frontmatter___productId], order: ASC }) {
      nodes {
        id
        frontmatter {
          title
          productId
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
