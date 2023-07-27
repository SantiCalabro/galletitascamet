import React from "react";
import * as F from "../styles/FactoryProcess.module.css";
import truck from "../images/camion.svg";
import stick from "../images/palo_amasar.svg";
import wheat from "../images/Trigo.svg";
export default function FactoryProcess() {
  const items = [
    {
      title: "Nuestros ingredientes",
      paragraph:
        "Elegimos ingredientes de la más alta calidad para brindarte el sabor que vos y tu familia se merecen.",
      img: wheat,
    },
    {
      title: "El proceso de elaboración",
      paragraph:
        "Cada etapa es llevada a cabo con precisión y cuidado, desde la mezcla de los ingredientes hasta el horneado perfecto",
      img: stick,
    },
    {
      title: "Distribución",
      paragraph:
        "Nos aseguramos de que lleguen a tu mesa en perfectas condiciones, manteniendo su frescura y sabor.",
      img: truck,
    },
  ];
  return (
    <div className={F.container}>
      <div>
        <h1 className={F.title}>• Calidad asegurada •</h1>
      </div>
      <div className={F.itemContainer}>
        {items.map((el, i) => (
          <div
            className={
              el.title === "El proceso de elaboración" ? F.itemReverse : F.item
            }
            key={i}
          >
            <img src={el.img} alt="" />
            <div className={F.text}>
              <span>{el.title}</span>
              <p>{el.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
