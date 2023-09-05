import React from "react";
import Layout from "../../layouts/index";
import * as R from "../../styles/Recetas.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { useState, useEffect } from "react";

export default function Recetas({ data }) {
  const desktopHeader = getImage(data.desktopHeader);
  const mobileHeader = getImage(data.mobileHeader);
  const milanesa = getImage(data.milanesa);
  const dip = getImage(data.dip);
  const trufas = getImage(data.trufas);
  const panRallado = getImage(data.panRallado);
  const tortaCrackers = getImage(data.tortaCrackers);
  const cheesecake = getImage(data.cheesecake);
  const [isShowing, setIsShowing] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const footer = document.querySelector("#footer");
    const arrowBtn = document.querySelector("#upBtn");
    const footerOffset = footer.getBoundingClientRect().top + window.scrollY;
    const upBtnOffset = arrowBtn.getBoundingClientRect().top + window.scrollY;
    const offset = 50;
    const tolerance = 20;
    const showButtonThreshold = 500;
    if (window.scrollY >= showButtonThreshold) {
      setIsShowing(true);
    } else if (window.scrollY <= showButtonThreshold) {
      setIsShowing(false);
    }
    if (
      upBtnOffset + arrowBtn.clientHeight >=
      footerOffset - offset - tolerance
    ) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Layout>
      <div className={R.container}>
        <div className={R.desktopHeader}>
          <GatsbyImage
            image={desktopHeader}
            alt="Fotografía de snacks a partir de las galletitas Camet Almuerzo"
          />
        </div>
        <div className={R.mobileHeader}>
          <GatsbyImage
            image={mobileHeader}
            alt="Fotografía de snacks a partir de las galletitas Camet Almuerzo"
          />
        </div>
        <div className={R.headerText}>
          <h1>Recetas</h1>
          <p>
            Transformá ingeniosamente tus galletitas en creaciones
            irresistibles. Aprovecha cada bocado al máximo con estas
            ideas sorprendentes
          </p>
        </div>
        <div id="recetas" className={R.recipesList}>
          <h4>¡Probá cualquiera de estas ideas!</h4>
          <ul>
            <li>
              <a href="#receta-1">
                Cheesecake o tarta de queso con base de galletitas tipo crackers
                <svg
                  className={R.titleArrow}
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />{" "}
                </svg>
              </a>
            </li>
            <li>
              <a href="#receta-2">Dip de Galletitas tipo Crackers</a>
              <svg
                className={R.titleArrow}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />{" "}
              </svg>
            </li>
            <li>
              <a href="#receta-3">Trufas de Galletitas tipo Crackers</a>
              <svg
                className={R.titleArrow}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />{" "}
              </svg>
            </li>
            <li>
              <a href="#receta-4">
                Pollo a la Milanesa con Empanado de Galletitas
              </a>
              <svg
                className={R.titleArrow}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />{" "}
              </svg>
            </li>
            <li>
              <a href="#receta-5">
                Pastel de Chocolate y Galletitas tipo Crackers (Torta Fría)
              </a>
              <svg
                className={R.titleArrow}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />{" "}
              </svg>
            </li>
            <li>
              <a href="#receta-6">Pan Rallado con Galletitas tipo Crackers</a>
              <svg
                className={R.titleArrow}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />{" "}
              </svg>
            </li>
          </ul>
        </div>

        <div id="receta-1" className={R.recipeContainer}>
          <div className={R.firstRow}>
            <div className={R.textContainer}>
              <h3>Cheesecake con base de galletitas tipo crackers</h3>
              <div className={R.ingredients}>
                <strong>Ingredientes</strong>
                <li>2 tazas de galletitas tipo crackers trituradas</li>
                <li>1/2 taza de mantequilla derretida</li>
                <li>2 tazas de queso crema</li>
                <li>1 taza de azúcar</li>
                <li>1 cucharadita de esencia de vainilla</li>
                <li>2 huevos</li>
                <li>1 taza de crema agria</li>
              </div>
            </div>
            <div className={R.picContainer}>
              <GatsbyImage
                image={cheesecake}
                alt="Fotografía de Cheesecake con base de galletitas tipo crackers"
              />
            </div>
          </div>
          <div className={R.recipe}>
            <strong>Instrucciones </strong>
            <p>1. Precalienta el horno a 180°C.</p>
            <p>
              2. En un recipiente, mezcla las galletitas “Camet” trituradas con
              la manteca derretida hasta que estén bien combinadas.
            </p>
            <p>
              3. Presiona la mezcla de galletitas en el fondo de un molde para
              pastel, formando la base del cheesecake.
            </p>
            <p>
              4. En otro recipiente, batir el queso crema con el azúcar y la
              esencia de vainilla hasta obtener una mezcla suave.
            </p>
            <p>
              5. Agrega los huevos uno por uno, batiendo bien después de cada
              adición.
            </p>
            <p>
              6. Incorpora la crema agria y mezcla hasta que esté todo
              combinado.
            </p>
            <p>
              7. Vierte la mezcla de queso crema sobre la base de galletitas en
              el molde.
            </p>
            <p>
              8. Hornea el cheesecake durante aproximadamente 40 minutos, o
              hasta que el centro esté casi firme.
            </p>
            <p>
              9. Retira el cheesecake del horno y déjalo enfriar a temperatura
              ambiente.
            </p>
            <p>
              10. Refrigera el cheesecake durante al menos 4 horas, o
              preferiblemente durante la noche, antes de servir.
            </p>
            <p>
              ¡Disfruta de tu delicioso cheesecake de galletitas Camet, dando
              así un nuevo uso!
            </p>
          </div>
        </div>
        <div id="receta-2" className={R.recipeContainer}>
          <div className={R.firstRow}>
            <div className={R.textContainer}>
              <h3>Dip de Galletitas tipo Crackers</h3>
              <div className={R.ingredients}>
                <strong>Ingredientes</strong>
                <li>1 paquete de galletitas tipo crackers</li>
                <li>200 gramos de queso crema</li>
                <li>1 taza de crema agria</li>
                <li>1 cucharadita de jugo de limón</li>
                <li>1 cucharadita de cebolla en polvo</li>
                <li>1 cucharadita de ajo en polvo</li>
                <li>Sal y pimienta al gusto</li>
                <li>Cebollino fresco picado (opcional)</li>
              </div>
            </div>
            <div className={R.picContainer}>
              <GatsbyImage
                image={dip}
                alt="Fotografía de Dip de Galletitas tipo Crackers"
              />
            </div>
          </div>
          <div className={R.recipe}>
            <strong>Instrucciones </strong>
            <p>
              1. En un recipiente, mezcla el queso crema y la crema agria hasta
              obtener una mezcla suave.
            </p>
            <p>
              2. Agrega el jugo de limón, la cebolla en polvo y el ajo en polvo.
              Mezcla bien para combinar los sabores.
            </p>
            <p>
              3. Condimenta con sal y pimienta al gusto y revuelve nuevamente.
            </p>
            <p>
              4. Espolvorea el cebollino fresco picado por encima (opcional).
            </p>
            <p>
              5. Sirve el dip en un plato acompañado de las galletitas tipo
              crackers.
            </p>

            <p>
              ¡Disfruta de este delicioso dip de galletitas tipo crackers,
              perfecto para picar y compartir en cualquier ocasión!
            </p>
          </div>
        </div>
        <div id="receta-3" className={R.recipeContainer}>
          <div className={R.firstRow}>
            <div className={R.textContainer}>
              <h3>Trufas de Galletitas tipo Crackers</h3>
              <div className={R.ingredients}>
                <strong>Ingredientes</strong>
                <li>2 tazas de galletitas tipo crackers trituradas</li>
                <li>1 taza de queso crema</li>
                <li>1 taza de chocolate semidulce derretido</li>
                <li>1/2 taza de azúcar glass</li>
                <li>1 cucharadita de esencia de vainilla</li>
                <li>
                  Opcional: coco rallado, cacao en polvo o nueces picadas para
                  decorar
                </li>
              </div>
            </div>
            <div className={R.picContainer}>
              <GatsbyImage
                image={trufas}
                alt="Fotografía de Trufas de Galletitas tipo Crackers"
              />
            </div>
          </div>
          <div className={R.recipe}>
            <strong>Instrucciones </strong>
            <p>
              1. En un recipiente, mezcla las galletitas tipo crackers
              trituradas con el queso crema y la esencia de vainilla. Asegúrate
              de que estén bien combinados.
            </p>
            <p>
              2. Forma pequeñas bolitas con la mezcla y colócalas en una bandeja
              forrada con papel encerado.
            </p>
            <p>
              3. Refrigera las bolitas durante al menos 30 minutos para que se
              endurezcan un poco.
            </p>
            <p>
              4. Mientras tanto, derrite el chocolate semidulce en el microondas
              o a baño maría, revolviendo ocasionalmente hasta que esté
              completamente derretido y suave.
            </p>
            <p>
              5. Saca las bolitas de galletitas tipo crackers del refrigerador y
              sumérgelas una a una en el chocolate derretido, asegurándote de
              cubrirlas por completo.
            </p>
            <p>
              6. Coloca las trufas nuevamente en la bandeja forrada con papel
              encerado.
            </p>
            <p>
              7. Si deseas, puedes decorar las trufas con coco rallado, cacao en
              polvo o nueces picadas antes de que el chocolate se endurezca.
            </p>
            <p>
              8. Refrigera las trufas durante al menos 1 hora, o hasta que el
              chocolate esté completamente firme.
            </p>
            <p>
              9. Una vez que estén listas, retira las trufas de la nevera y
              sírvelas.
            </p>
            <p>
              ¡Disfruta de estas deliciosas trufas de galletitas tipo crackers
              como un dulce bocado o como un regalo para compartir!
            </p>
          </div>
        </div>
        <div id="receta-4" className={R.recipeContainer}>
          <div className={R.firstRow}>
            <div className={R.textContainer}>
              <h3>Pollo a la Milanesa con Empanado de Galletitas</h3>
              <div className={R.ingredients}>
                <strong>Ingredientes</strong>
                <li>4 bifes de pechuga de pollo (o la cantidad deseada)</li>
                <li>1 taza de galletitas criollitas trituradas</li>
                <li>1/2 taza de queso parmesano rallado</li>
                <li>1 cucharadita de ajo en polvo</li>
                <li>
                  1 cucharadita de perejil seco (u otra hierba de tu elección)
                </li>
                <li>Sal y pimienta a gusto</li>
                <li>1/4 taza de manteca derretida</li>
              </div>
            </div>
            <div className={R.picContainer}>
              <GatsbyImage
                image={milanesa}
                alt="Fotografía de Pollo a la Milanesa con Empanado de Galletitas"
              />
            </div>
          </div>
          <div className={R.recipe}>
            <strong>Instrucciones </strong>
            <p>1. Precalienta el horno a 200°C.</p>
            <p>
              2. En un bowl, mezcla las galletitas trituradas, el queso
              parmesano rallado, el ajo en polvo, el perejil seco, la sal y la
              pimienta. Revolvé bien los ingredientes secos.
            </p>
            <p>
              3. Pasá los bifes de pollo por la manteca derretida, asegurándote
              de cubrirlos por completo.
            </p>
            <p>
              4. Luego, empanizá los bifes con la mezcla de galletitas y
              presioná ligeramente para que la costra se adhiera bien al pollo.
            </p>
            <p>
              5. Colocá los bifes de pollo en una fuente para horno previamente
              enmantecada o forrada con papel manteca.
            </p>
            <p>
              6. Horneá el pollo en el horno precalentado durante
              aproximadamente 25-30 minutos, o hasta que estén bien cocidos y la
              costra esté dorada y crocante.
            </p>
            <p>7. Retirá los bifes de pollo del horno y servilos calientes.</p>
          </div>
        </div>
        <div id="receta-5" className={R.recipeContainer}>
          <div className={R.firstRow}>
            <div className={R.textContainer}>
              <h3>
                Pastel de Chocolate y Galletitas tipo Crackers (Torta Fría)
              </h3>
              <div className={R.ingredients}>
                <strong>Ingredientes</strong>
                <li>
                  2 paquetes de galletitas tipo crackers (aproximadamente 400
                  gramos)
                </li>
                <li>1 taza de leche</li>
                <li>1/2 taza de cacao en polvo sin azúcar</li>
                <li>1 lata de leche condensada (397 gramos)</li>
                <li>1 cucharadita de esencia de vainilla</li>
                <li>500 ml de crema de leche para batir (nata para montar)</li>
                <li>2 cucharadas de azúcar glass (azúcar impalpable)</li>
                <li>
                  Virutas de chocolate o cacao en polvo para decorar (opcional)
                </li>
              </div>
            </div>
            <div className={R.picContainer}>
              <GatsbyImage
                image={tortaCrackers}
                alt="Fotografía de Pastel de Chocolate y Galletitas tipo Crackers (Torta Fría)"
              />
            </div>
          </div>
          <div className={R.recipe}>
            <strong>Instrucciones </strong>
            <p>
              1. En un recipiente grande, mezcla la leche con el cacao en polvo
              hasta obtener una mezcla homogénea.
            </p>
            <p>
              2. Añade la leche condensada y la esencia de vainilla a la mezcla
              anterior, y mezcla bien para combinar los ingredientes.
            </p>
            <p>
              3. En otro recipiente, bate la crema de leche (nata) con el azúcar
              glass hasta que esté firme y forme picos suaves.
            </p>
            <p>
              4. Incorpora la crema batida a la mezcla de leche y cacao con
              movimientos suaves y envolventes, asegurándote de que quede bien
              integrada.
            </p>
            <p>
              5. En un molde rectangular o cuadrado, coloca una capa de
              galletitas tipo crackers en el fondo. Vierte una porción de la
              mezcla de chocolate y crema por encima para cubrir las galletitas.
            </p>
            <p>
              6. Repite el proceso, colocando otra capa de galletitas y
              agregando más mezcla de chocolate y crema, hasta que se terminen
              los ingredientes. La última capa debe ser de la mezcla de
              chocolate y crema.
            </p>
            <p>
              7. Refrigera el pastel durante al menos 4 horas, o preferiblemente
              durante la noche, para que adquiera consistencia y se asienten los
              sabores.
            </p>
            <p>
              8. Opcionalmente, antes de servir, decora el pastel con virutas de
              chocolate o espolvorea cacao en polvo por encima.
            </p>
          </div>
        </div>
        <div id="receta-6" className={R.recipeContainer}>
          <div className={R.firstRow}>
            <div className={R.textContainer}>
              <h3>Pan Rallado con Galletitas tipo Crackers</h3>
              <div className={R.ingredients}>
                <strong>Ingredientes</strong>
                <li>
                  1 taza de galletitas tipo crackers trituradas (pueden ser de
                  sabor neutro o con algún condimento que te guste)
                </li>
                <li>1 cucharadita de ajo en polvo</li>
                <li>1 cucharadita de cebolla en polvo</li>
                <li>1/2 cucharadita de sal</li>
                <li>1/2 cucharadita de pimienta</li>
                <li>1/2 cucharadita de orégano (opcional)</li>
                <li>1/2 cucharadita de perejil seco (opcional)</li>
              </div>
            </div>
            <div className={R.picContainer}>
              <GatsbyImage
                image={panRallado}
                alt="Fotografía de Pan Rallado con Galletitas tipo Crackers"
              />
            </div>
          </div>
          <div className={R.recipe}>
            <strong>Instrucciones </strong>
            <p>1. Precalienta el horno a 180°C.</p>
            <p>
              2. Coloca las galletitas tipo crackers en una bolsa de plástico
              resellable y ciérrala bien. Con la ayuda de un rodillo de cocina o
              una cuchara de madera, tritura las galletitas hasta obtener
              migajas finas. También puedes usar un procesador de alimentos para
              hacer esto.
            </p>
            <p>
              3. En un tazón, mezcla las migajas de galletitas con el ajo en
              polvo, la cebolla en polvo, la sal, la pimienta, el orégano y el
              perejil seco si estás usando estos ingredientes adicionales.
              Mezcla bien para distribuir uniformemente los condimentos.
            </p>
            <p>
              4. Extiende la mezcla de galletitas y condimentos en una bandeja
              para hornear en una capa uniforme.
            </p>
            <p>
              5. Hornea en el horno precalentado durante unos 8-10 minutos,
              revolviendo ocasionalmente, hasta que las migajas de galletitas se
              vuelvan doradas y crujientes. Presta atención para que no se
              quemen.
            </p>
            <p>
              6. Retira la bandeja del horno y deja que el pan rallado de
              galletitas se enfríe por completo antes de almacenarlo en un
              recipiente hermético.
            </p>
            <p>
              ¡Listo! Ahora tienes tu propio pan rallado con galletitas tipo
              crackers, que puedes usar para empanizar carnes, pescados o
              verduras. Este pan rallado casero le dará un toque crujiente y
              delicioso a tus platos.
            </p>
          </div>
        </div>
        <div
          id="upBtn"
          className={!isShowing ? R.hide : isSticky ? R.upBtn : R.stopBtn}
        >
          <a href="#recetas">
            <span>Volver arriba</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="5em"
              viewBox="0 0 512 512"
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.1 217.4c-4.5 4.2-7.1 10.1-7.1 16.3c0 12.3 10 22.3 22.3 22.3H208v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256h57.7c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.1-16.3L269.8 117.5c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5L135.1 217.4z" />
            </svg>
          </a>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    desktopHeader: file(relativePath: { eq: "crackers_desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
      }
    }
    mobileHeader: file(relativePath: { eq: "crackers_mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
      }
    }
    dip: file(relativePath: { eq: "dip.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
      }
    }
    cheesecake: file(relativePath: { eq: "cheesecake.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
      }
    }
    tortaCrackers: file(relativePath: { eq: "torta_crackers.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
      }
    }
    trufas: file(relativePath: { eq: "trufas.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
      }
    }
    milanesa: file(relativePath: { eq: "milanesa.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
      }
    }
    panRallado: file(relativePath: { eq: "pan_rallado.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: BLURRED)
      }
    }
  }
`;
