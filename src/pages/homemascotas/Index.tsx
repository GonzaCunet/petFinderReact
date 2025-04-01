import classes from "./index.module.css";
import { usePetsNears } from "../../atoms/state";

const state = [];

export function HomeMascotas() {
  const petsNear = usePetsNears();
  console.log(petsNear.pets);
  return (
    <div className={classes.mainmascotas}>
      <h1 className={classes.titlemascotas}>Mascotas perdidas cerca</h1>
      {state.length === 0 ? <h2>no hay mascotas cerca</h2> : }
    </div>
  );
}
