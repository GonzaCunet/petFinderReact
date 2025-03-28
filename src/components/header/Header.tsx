import mapslogo from "../../assets/mapslogo.svg";
import menu from "../../assets/menu.svg";
import cruz from "../../assets/close.svg";
import css from "./header.module.css";
import { useState } from "react";

export function Header() {
  const statetoken = "";
  const statedatamail = "";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleBurgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={css.headerEl}>
      <img className={css.logoimagen} src={mapslogo} />
      <img
        className={css.burgermenuimg}
        src={menu}
        onClick={handleBurgerMenu}
      />
      <div className={isMenuOpen ? css.burgerdivopen : css.burgerdivclose}>
        <img
          className={css.burgerclose}
          src={cruz}
          onClick={handleBurgerMenu}
        />
        <a className={css.burgertext} href="/signup">
          {" "}
          Mis datos
        </a>
        <a className={css.burgertext} href="/signup">
          {" "}
          Mis mascotas reportadas
        </a>
        <a className={css.burgertext} href="/signup">
          {" "}
          Reportar mascota
        </a>
        {/* <a className={css.burgertext} href="misdatos">
          {" "}
          Mis datos
        </a>
        <a className={css.burgertext} href="mismascotas">
          {" "}
          Mis mascotas reportadas
        </a>
        <a className={css.burgertext} href="/reportpets">
          {" "}
          Reportar mascota
        </a> */}
        /* no se tiene que mostrar si no estas con token logueado */
        {statedatamail == ""
          ? ``
          : `<h2 class="burger-text">${statedatamail}</h2>
                        <a class="cerrar-sesion">CERRAR SESIÓN</a> `}
      </div>
    </header>
  );
}
