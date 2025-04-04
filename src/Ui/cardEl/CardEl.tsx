import css from "./cardEl.module.css";
import { ButtonEl } from "../../Ui/button/button";

export const CardEl = (props: any) => {
  const { photoURL } = props;
  return (
    <div className={css.root}>
      <div className={css.imgcontainer}>
        <img className={css.img} src={photoURL}></img>
      </div>
      <div className={css.textandbuttoncontainer}>
        <div className={css.textcont}>
          <h1 className={css.cardtitle}>{props.name}</h1>
          <h2 className={css.cardtext}>{props.lastLocation}</h2>
        </div>
        <div className={css.buttoncont}>
          <ButtonEl buttonColor="#EB6372" width="120px" height="40px">
            Enviar información
          </ButtonEl>
        </div>
      </div>
    </div>
    //     <div class="img-container"><img className={css.img}src="${photoURL}"></img></div>
    //   <div class="textandbuttoncontainer">
    //     <div class="textcont">
    //       <h1></h1>
    //       <h2></h2>
    //     </div>
    //     <div class="buttoncont">
    //       <button class="button" buttonColor="#EB6372">${buttonText}</button>
    //     </div>
    // </div>)
  );
};
