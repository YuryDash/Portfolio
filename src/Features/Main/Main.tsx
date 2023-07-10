import s from "./Main.module.scss";
import { TitleBold } from "../../components/TitleBold/TitleBold";
import { Particle } from "./Particle/Particle";

export const Main = () => {
  return (
    <div className={s.main} id={"main"}>
      <Particle />
      <TitleBold text={"ABOUT"} colorText={"ME"} />
      <div className={s.main__content}>
        <div className={s.main__content_item}>
          <p>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
        </div>
        <div className={`${s.main__content_item} + ${s.main__content_photo}`}>
          <img
            className={s.main__content_img}
            src="https://citaty.info/files/styles/poster/public/characters/633.jpg?itok=qAGPclX6"
            alt="Just MyAva"
          />
        </div>
      </div>
    </div>
  );
};
