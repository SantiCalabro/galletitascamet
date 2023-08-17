import React from "react";
import Layout from "../layouts/index";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import * as N from "../styles/Nosotros.module.css";
import { useState } from "react";

export default function Nosotros({ data }) {
  const [pic, setPic] = useState("");

  const desktopHeader = getImage(
    data.desktopHeader.childImageSharp.gatsbyImageData
  );
  const somosCamet = getImage(data.somosCamet.childImageSharp.gatsbyImageData);
  const history = getImage(data.historia.childImageSharp.gatsbyImageData);
  const marDelPlata = getImage(
    data.marDelPlata.childImageSharp.gatsbyImageData
  );
  return (
    <Layout>
      {pic && (
        <div className={N.popUpContainer}>
          <div className={N.closeContainer}>
            <svg
              onClick={() => setPic("")}
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
            </svg>
          </div>

          <div className={N.popUp}>
            <GatsbyImage
              image={pic}
              alt="Fotografía histórica de Galletitas Camet"
            />
          </div>
        </div>
      )}

      <div className={N.desktopHeader}>
        <h1>Nosotros</h1>
        <div>
          <GatsbyImage
            image={desktopHeader}
            alt="Fotografía de la planta de Galletitas Camet"
          />
        </div>
      </div>
      <div>
        <div className={N.sectionOne}>
          <div className={N.textContainer}>
            <h3>Somos CAMET</h3>
            <p>
              Trabajamos para llegar a los hogares, con nuestros productos que
              gustan, la mejor calidad y precio. Contamos con un equipo familiar
              e historia que nos respalda, siempre respetando nuestras recetas
              de origen artesanal y saludables. Queremos acompañarte y seguir
              formando parte de la mesa de todos los argentinos, buscando llevar
              el sabor marplatense a cada rincón, teniendo el objetivo de seguir
              creciendo, como lo hacemos desde 1978.
            </p>
          </div>
          <div onClick={() => setPic(somosCamet)} className={N.picContainer}>
            <GatsbyImage
              image={somosCamet}
              alt="Fotografía de Carlos trabajando con la amasadora"
            />
          </div>
        </div>
        <div className={N.sectionTwo}>
          <div className={N.textContainer}>
            <h3>La historia de la empresa</h3>
            <p>
              En 1978, Carlos fundó una pequeña empresa en las afueras de Mar
              del Plata, donde puso en práctica el conocimiento propio y el
              heredado de su familia de panaderos. En esta hermosa ciudad, se
              estableció y fundó Camet. Con el pasar de los años, la marca fue
              creciendo y haciéndose más popular en la zona, y así toda la
              familia tuvo que trabajar para abastecer la demanda local. En
              Camet tenemos como objetivo que nuestros productos lleguen a cada
              hogar con la misma calidad de siempre. Manteniendo el sabor y
              esencia original.
            </p>
          </div>
          <div onClick={() => setPic(history)} className={N.picContainer}>
            <GatsbyImage
              image={history}
              alt="Carlos trabajando cortando las galletitas Camet"
            />
          </div>
        </div>
        <div className={N.sectionThree}>
          <div className={N.textContainer}>
            <h3>Tradición Marplatense</h3>
            <p>
              Nos enorgullece ser una marca emblemática en nuestra ciudad.
              Durante años, hemos sido parte de la vida de nuestros clientes,
              brindando productos de calidad reconocida y creando momentos
              especiales en su vida. Nuestro compromiso con la excelencia y la
              satisfacción de nuestros clientes nos ha convertido en una marca
              reconocida y querida en nuestra comunidad.
            </p>
          </div>
          <div onClick={() => setPic(marDelPlata)} className={N.picContainer}>
            <GatsbyImage
              image={marDelPlata}
              alt="Fotografía de la playa desde el Torreón del Monje"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export const query = graphql`
  query {
    desktopHeader: file(relativePath: { eq: "prueba.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    somosCamet: file(relativePath: { eq: "somos_camet.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    historia: file(relativePath: { eq: "historia.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    marDelPlata: file(relativePath: { eq: "mar_del_plata.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
