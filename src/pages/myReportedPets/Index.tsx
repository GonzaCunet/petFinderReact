import css from "./index.module.css";
import { useNavigate } from "react-router";
import { CardEl } from "../../Ui/cardEl/CardEl";
import { usePets } from "../../atoms/State";
import { useEffect } from "react";

export function ReportedPets() {
  const { myPets, showMyPetsCreated } = usePets();
  const navigate = useNavigate();

  useEffect(() => {
    showMyPetsCreated(); // Llama
    //  a la función para cargar las mascotas creadas
  }, []);

  const handleEditPet = () => {
    console.log("hola");
    // setPetEdit(id, photoURL);
    navigate("/editpets");
  };

  return (
    <>
      <div className={css.mainmismascotas}>
        <h1 className={css.titlemismascotas}>Mis mascotas reportadas</h1>

        {myPets.length === 0 ? (
          <h1>No tenes mascotas reportadas</h1>
        ) : (
          myPets.map((pet: any) => (
            <CardEl
              key={pet.id}
              pet={pet}
              photoURL={pet.photoURL}
              name={pet.name}
              lastLocation={pet.lastLocation}
              buttonColor={"#00BFFF"}
              children={"Editar"}
              handleClick={() => handleEditPet()}
            />
          ))
        )}
      </div>
    </>
  );
}
