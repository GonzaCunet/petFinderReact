import css from "./index.module.css";
import homephoto from "../../assets/homephoto.svg";
import { ButtonEl } from "../../Ui/button/button";
import { useNavigate } from "react-router";
import { usePetsNears } from "../../atoms/petState";

export function Home() {
  const navigate = useNavigate();
  // const fetchPetsNear = usePetsNears((state) => state.fetchPetsNear);
  const petsNear = usePetsNears();
  const handleButtonLocalitation = () => {
    if (navigator.geolocation) {
      // Pedimos la ubicación actual
      navigator.geolocation.getCurrentPosition((position) => {
        // Si se obtiene la ubicación, la mostramos
        const latitude = position.coords.latitude; // Latitud
        const longitude = position.coords.longitude; // Longitud
        petsNear.fetchPetsNear(latitude, longitude).then(() => {
          navigate("/home-mascotas");
        });
      });
    }
  };
  const handleButtonLogIn = () => {
    navigate("/login");
  };
  return (
    <div className={css.mainhome}>
      <img className={css.imagen} src={homephoto} alt="" />
      <h1 className={css.title}>Pet Finder App</h1>
      <h2 className={css.text}>
        Encontra y reportá
        <br /> mascotas perdidas
        <br /> cerca de tu ubicación
      </h2>
      <ButtonEl handleClick={handleButtonLocalitation}>
        Dar mi ubicación actual
      </ButtonEl>
      <ButtonEl handleClick={handleButtonLogIn} buttonColor={"#00A884"}>
        Iniciar sesión
      </ButtonEl>
    </div>
  );
}
