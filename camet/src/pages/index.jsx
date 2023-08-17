import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../layouts/index";
import { Carousel } from "react-bootstrap";
import "../styles/global.css";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import FactoryProcess from "../components/FactoryProcess";
import * as I from "../styles/Index.module.css";
import ProductsPreview from "../components/ProductsPreview";
import WhatsappButton from "../components/WhatsappButton";
export default function Home({ data }) {
  const [isBottom, setIsBottom] = useState(false);

  // Agrega un event listener para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerHeight = 400; // Altura del footer en píxeles

      // Calcula la posición del scroll en relación al footer
      const scrollFromBottom =
        document.body.scrollHeight - scrollPosition - windowHeight;

      // Cambia el estado isBottom en función de la posición del scroll
      setIsBottom(scrollFromBottom <= footerHeight);
    };

    // Agrega el listener al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Layout>
      <div
        className={`${I.whatsappButton} ${
          isBottom ? I.whatsappButtonBottom : ""
        }`}
      >
        <WhatsappButton
          phoneNumber="+5492233550129"
          message={"Hola, quiero más información"}
          text={"Hacenos tu pregunta"}
        />
      </div>
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
            <Link to="/productos">
              <Img
                fluid={data.slide03ql.childImageSharp.fluid}
                alt="Nuestros productos están libres de octógonos"
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
            <Link to="/productos">
              <Img
                fluid={data.slide03ql_resp.childImageSharp.fluid}
                alt="Nuestros productos están libres de octógonos"
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
      <div className={I.responsiveWhatsappButton}>
        <WhatsappButton
          phoneNumber="+5492233550129"
          message={"Hola, quiero más información"}
          text={"Hacenos tu pregunta"}
        />
      </div>
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
    slide03ql: file(relativePath: { eq: "Slide03_desktop.jpg" }) {
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
    slide03ql_resp: file(relativePath: { eq: "Slide03_mobile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
