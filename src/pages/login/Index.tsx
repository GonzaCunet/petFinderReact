import css from "./index.module.css";
import { ButtonEl } from "../../Ui/button/button";
import puertaimg from "../../assets/puertaimg.svg";
import { useAuthState } from "../../atoms/authState";

export function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("Email") as string;
    const pass = formData.get("pass") as string;
    console.log(email, pass);

    //   try {
    //     const res = await useAuthState(email, password);

    //     // Verificamos si el login fue exitoso (por ejemplo, si hay un token)
    //     if (res && res.token) {
    //       state.data.token = res.token;
    //       state.data.mail = email;
    //       Router.go("/"); // Redirige solo si el login es válido
    //     } else {
    //       // Muestra un mensaje de error si el login falla
    //       Swal.fire({
    //         icon: "error",
    //         title: "DATOS INCORRECTOS",
    //         text: "Asegurate de completar correctamente tus datos",
    //       });
    //     }
    //   } catch (error) {
    //     console.error("Error al iniciar sesión:", error);
    //   }
    // };
  };
  return (
    <>
      <div className={css.mainingresar}>
        <img className={css.imagen} src={puertaimg}></img>
        <div className={css.textcontainer}>
          <h1 className={css.iniciartittle}>Iniciar Sesión</h1>
          <h3>ingresá los datos para iniciar sesión</h3>
        </div>
        <form className={css.formulario} onSubmit={handleSubmit}>
          <label className={css.labeltext}>EMAIL</label>
          <input className={css.inputingresar} type="text" name="Email" />
          <label className={css.labeltext}>CONTRASEÑA</label>
          <input className={css.inputingresar} type="password" name="pass" />
          <a className={css.textlink} href="">
            olvidé mi contraseña
          </a>

          <ButtonEl>Acceder</ButtonEl>
        </form>
        <p className={css.textform}>
          Aún no tenes cuenta?{" "}
          <a href="/signup" className={css.textlink} id="registro">
            Registrate.
          </a>
        </p>
      </div>
    </>
  );
}
