import classes from "./index.module.css";
import { usePetsNears } from "../../atoms/petState";
import { CardEl } from "../../Ui/cardEl/CardEl";

export function HomeMascotas() {
  const { pets } = usePetsNears();
  return (
    <div className={classes.mainmascotas}>
      <h1 className={classes.titlemascotas}>Mascotas perdidas cerca</h1>
      {pets.length === 0 ? (
        <h2>no hay mascotas cerca</h2>
      ) : (
        pets.map((pet) => (
          <CardEl
            key={pet.id}
            pet={pet}
            photoURL={pet.photoURL}
            name={pet.name}
            lastLocation={pet.lastLocation}
          />
        ))
      )}
    </div>
  );
}
