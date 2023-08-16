import React from "react";
import Layout from "../layouts/index";
import * as C from "../styles/Contacto.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import WhatsappButtonLarge from "../components/WhatsappButtonLarge";
import { useState } from "react";

export default function Contacto({ data }) {
  const [input, setInput] = useState({
    user_name: "",
    email: "",
    message: "",
    topic: "",
  });
  const [error, setError] = useState({});
  const [disable, setDisable] = useState(true);
  const [popMsg, setPopMsg] = useState(false);
  const initialState = {
    user_name: "",
    email: "",
    message: "",
    topic: "",
  };

  const errorSetting = e => {
    setError(
      handleValidate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleChange = e => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleValidate = input => {
    const errors = {};
    const regexEmail = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
    if (!input.user_name) {
      errors.user_name = "*Colocá tu nombre";
    }
    if (!input.email) {
      errors.email = "*Colocá tu correo electrónico";
    } else if (!regexEmail.test(input.email)) {
      errors.email = "*Colocá un email válido";
    }

    if (!input.message) {
      errors.message = "*Colocá tu mensaje";
    }
    if (!input.topic || input.topic === "Elegí un asunto") {
      errors.topic = "*Colocá un asunto";
    }
    if (
      !error.user_name &&
      !error.email &&
      !error.message &&
      input.user_name &&
      input.email &&
      input.message.length > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    return errors;
  };
  const clearState = () => {
    setInput(initialState);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPopMsg(true);
    clearState();
  };

  const desktopBanner = getImage(data.headerBanner);
  const mobileBanner = getImage(data.mobileHeaderBanner);
  return (
    <Layout>
      <div className={popMsg ? C.popupContainer : C.hidden}>
        <div className={C.popup}>
          <h3>Mensaje enviado</h3>
          <p>Te responderemos a la brevedad</p>
          <button onClick={() => setPopMsg(false)}>
            Continuar en el sitio
          </button>
        </div>
      </div>
      <div className={C.headerContainer}>
        <GatsbyImage
          image={desktopBanner}
          alt={"Banner con imágenes de galletas Camet"}
        />
      </div>
      <div className={C.headerContainerResponsive}>
        <GatsbyImage
          image={mobileBanner}
          alt={"Banner con imágenes de galletas Camet"}
        />
      </div>
      <div className={C.container}>
        <div className={C.titleContainer}>
          <h3>Ponete en contacto</h3>
        </div>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={C.formContainer}>
            <div className={C.socialMediaContainer}>
              <div className={C.headingText}>
                <h3>Galletitas Camet</h3>
                <p>Mar del Plata, Provincia de Buenos Aires</p>
                <p>
                  Ruta Provincial 2, km 392, Estación Camet, Provincia de Buenos
                  Aires, Argentina.
                </p>
              </div>
              <div className={C.whatsappBtn}>
                <WhatsappButtonLarge
                  phoneNumber="+542213085752"
                  message={"Hola, quiero más información"}
                />
              </div>
              <div className={C.socialMedia}>
                <h5>Seguinos en nuestras redes</h5>
                <div className={C.icons}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={C.fields}>
              <div className={C.subtitle}>
                <h5>Envianos tu consulta</h5>
              </div>
              <div className={C.inputsContainer}>
                <div className={C.field}>
                  <div className={C.fieldLabel}>
                    <span>Nombre</span>
                    {error.user_name && (
                      <label htmlFor="">{error.user_name}</label>
                    )}
                  </div>
                  <input
                    type="text"
                    name="user_name"
                    value={input.user_name || ""}
                    onChange={e => {
                      handleChange(e);
                      errorSetting(e);
                    }}
                    onBlur={e => {
                      errorSetting(e);
                    }}
                  />
                </div>
                <div className={C.field}>
                  <div className={C.fieldLabel}>
                    <span>Correo electrónico</span>
                    {error.email && <label htmlFor="">{error.email}</label>}
                  </div>
                  <input
                    name="email"
                    value={input.email || ""}
                    type="text"
                    onChange={e => {
                      handleChange(e);
                      errorSetting(e);
                    }}
                    onBlur={e => {
                      errorSetting(e);
                    }}
                  />
                </div>

                <div className={C.field}>
                  <div className={C.fieldLabel}>
                    <span>Asunto</span>
                    {error.topic && <label htmlFor="">{error.topic}</label>}
                  </div>
                  <select
                    name="topic"
                    value={input.topic}
                    id="topic"
                    onBlur={e => {
                      handleChange(e);
                      errorSetting(e);
                    }}
                    onChange={e => {
                      handleChange(e);
                      errorSetting(e);
                    }}
                  >
                    <option defaultValue={"DEFAULT"}>Elegí un asunto</option>
                    <option>Soy consumidor</option>
                    <option>Soy proveedor</option>
                    <option>Tengo un comercio mayorista</option>
                    <option>Tengo una tienda minorista</option>
                    <option>Otros</option>
                  </select>
                </div>

                <div className={C.field}>
                  <div className={C.fieldLabel}>
                    <span>Mensaje</span>
                    {error.message && <label htmlFor="">{error.message}</label>}
                  </div>
                  <textarea
                    name="message"
                    value={input.message || ""}
                    id=""
                    cols="30"
                    rows="10"
                    onChange={e => {
                      handleChange(e);
                      errorSetting(e);
                    }}
                    onBlur={e => {
                      errorSetting(e);
                    }}
                  />
                </div>
                <button
                  onClick={e => disable && e.preventDefault()}
                  className={disable && C.disableBtn}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    headerBanner: file(relativePath: { eq: "Contactanos_Desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    mobileHeaderBanner: file(relativePath: { eq: "Contactanos_Mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
