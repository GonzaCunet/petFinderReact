import css from "./index.module.css";
import { usePets } from "../../atoms/State";
import { CardEl } from "../../Ui/cardEl/CardEl";
import { ButtonEl } from "../../Ui/button/button";
import closeIcon from "../../assets/close.svg";
import { useState } from "react";

export function HomeMascotas() {
  const { pets } = usePets();
  const [openFormId, setOpenFormId] = useState<string | null>(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const id = e.target.id.split("-")[1];
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    // sendMail(name, phone, message, id);
  };

  return (
    <div className={css.mainmascotas}>
      <h1 className={css.titlemascotas}>Mascotas perdidas cerca</h1>
      {pets.length === 0 ? (
        <h2>no hay mascotas cerca</h2>
      ) : (
        pets.map((pet) => (
          <div key={pet.id}>
            <CardEl
              key={pet.id}
              photoURL={pet.photoURL}
              name={pet.name}
              lastLocation={pet.lastLocation}
              buttonText={"Reportar"}
              buttonColor={"#EB6372"}
              handleClick={() => setOpenFormId(pet.id)}
            />
            <div
              id={`div${pet.id}`}
              className={
                openFormId === pet.id ? css.divreportpetopen : css.divreportpet
              }
            >
              <img
                id={`xicon${pet.id}`}
                className={css.xicon}
                src={closeIcon}
                alt="Cerrar"
                onClick={() => setOpenFormId(null)}
              />

              <form
                className={css.formreportpet}
                onSubmit={handleSubmit}
                id={`form-${pet.id}`}
              >
                <label className={css.reportpetlabel}>NOMBRE</label>
                <input className={css.reportpetinput} name="name" type="text" />
                <label className={css.reportpetlabel}>TELEFONO</label>
                <input
                  className={css.reportpetinput}
                  name="phone"
                  type="text"
                />
                <label className={css.reportpetlabel}>¿DÓNDE LO VISTE?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  cols={50}
                ></textarea>

                <ButtonEl
                  button-color="#00A884"
                  className={css.enviarreporte}
                  type="submit"
                >
                  Enviar información
                </ButtonEl>
              </form>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
