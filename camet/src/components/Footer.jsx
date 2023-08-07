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
      <Link to="/">
        <img src={logoImageUrl} alt="Logo Camet" />
      </Link>
    </div>
  );
}
