import React from "react";
import * as P from "../styles/ProductsPreview.module.css";
import { Link } from "gatsby";

export default function ProductsPreview() {
  const items = [
    {
      variety: "Marineras",
      salt: "Con y sin sal",
    },
    {
      variety: "Integrales",
      salt: "Con y sin sal",
    },
    {
      variety: "Semolín",
      salt: "Con sal",
    },
    {
      variety: "Glúten",
      salt: "Con y sin sal",
    },
    {
      variety: "Almuerzo",
      salt: "Con sal",
    },
  ];
  return (
    <div className={P.container}>
      <div>
        <h4 className={P.title}>• Nuestras variedades •</h4>
      </div>
      <div className={P.itemContainer}>
        {items.map((el, i) => (
          <div className={P.item} key={i}>
            <p>{el.variety}</p>
            <span>{el.salt}</span>
          </div>
        ))}
      </div>
      <div className={P.btnContainer}>
        <Link to="/productos">
          <button className={P.btn}>Ver todas</button>
        </Link>
      </div>
    </div>
  );
}
