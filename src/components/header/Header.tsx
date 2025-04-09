import mapslogo from "../../assets/mapslogo.svg";
import menu from "../../assets/menu.svg";
import cruz from "../../assets/close.svg";
import css from "./header.module.css";
import { useState } from "react";
import { useAuthState } from "../../atoms/authState";

export function Header() {
  const { token, email } = useAuthState();
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
        <a className={css.burgertext} href="/login">
          {" "}
          Mis datos
        </a>
        <a className={css.burgertext} href="/login">
          {" "}
          Mis mascotas reportadas
        </a>
        <a className={css.burgertext} href="/login">
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
        {token == null ? null : (
          <div>
            <h2 className={css.burgertext}>{email}</h2>
            <a
              className={css.cerrarSesion}
              onClick={() => {
                localStorage.removeItem("token");
              }}
              href="/"
            >
              CERRAR SESIÓN
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
