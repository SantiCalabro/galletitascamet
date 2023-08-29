import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../layouts/index";
import { Carousel } from "react-bootstrap";
import "../styles/global.css";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FactoryProcess from "../components/FactoryProcess";
import * as I from "../styles/Index.module.css";
import ProductsPreview from "../components/ProductsPreview";
import WhatsappButton from "../components/WhatsappButton";
export default function Home({ data }) {
  const [isBottom, setIsBottom] = useState(false);
  const desktopBanner = getImage(data.nosotrosDesktopImg);
  const mobileBanner = getImage(data.nosotrosMobileImg);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const footerHeight = 400;
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
            <Link to="/nosotros">
              {" "}
              <Img
                fluid={data.slide01ql.childImageSharp.fluid}
                alt="Tradición marplatense"
              />
            </Link>
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
      <Link to="/nosotros">
        <div className={I.nosotrosContainer}>
          <div className={I.nosotrosTextContainer}>
            <h3>Nuestra fábrica</h3>
            <p>Conocé la historia de las galletitas marplatenses favoritas</p>
          </div>
          <div className={I.nosotrosDesktop}>
            <GatsbyImage
              image={desktopBanner}
              alt="Fotografìa de la línea de producción de Galletitas Camet"
            />
          </div>
          <div className={I.nosotrosMobile}>
            <GatsbyImage
              image={mobileBanner}
              alt="Fotografìa de la línea de producción de Galletitas Camet"
            />
          </div>
        </div>
      </Link>
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

    nosotrosDesktopImg: file(relativePath: { eq: "produccion2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
    nosotrosMobileImg: file(relativePath: { eq: "produccion2_mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100)
      }
    }
  }
`;
