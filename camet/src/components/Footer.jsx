import React from "react";
import * as F from "../styles/Footer.module.css";
import { graphql, useStaticQuery, Link } from "gatsby";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "White-Logo.png" }) {
        publicURL
      }
    }
  `);
  const logoImageUrl = data.logoImage.publicURL;

  return (
    <div className={F.container}>
      <div className={F.firstRow}>
        <div className={F.logoContainer}>
          <Link to="/">
            <img src={logoImageUrl} alt="Logo Camet" />
          </Link>
        </div>
      </div>

      <div className={F.secondRow}>
        <div className={F.linksContainer}>
          <div className={F.column}>
            <Link to="/">
              <li>Inicio</li>
            </Link>
            <Link to="/nosotros">
              <li>Nosotros</li>
            </Link>
            <Link to="/productos">
              <li>Productos</li>
            </Link>
          </div>

          <div className={F.column}>
            <Link to="/recetas">
              <li>Recetas</li>
            </Link>
            <Link to="/contacto">
              <li>Contactanos</li>
            </Link>
          </div>
        </div>

        <div className={F.adress}>
          <p className={F.firstLine}>
            Galletitas Camet, Mar del Plata, Provincia de Buenos Aires
          </p>
          <p>
            +54 9 223 355-0129 Info: galletitascamet69@gmail.com Ruta Provincial
            2, km 392, Estación Camet, Provincia de Buenos Aires, Argentina.
          </p>
        </div>
        <div>
          <div className={F.socialMedia}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
