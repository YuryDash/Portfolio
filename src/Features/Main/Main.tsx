import s from "./Main.module.scss"
import {TitleBold} from "../../components/TitleBold/TitleBold";
import {Particle} from "./Particle/Particle";


export const Main = () => {
    return (
        <div className={s.main} id={'main'}>
            <Particle/>
            <TitleBold text={'ABOUT'} colorText={'ME'}/>
            <div className={s.main__content}>

                <div className={s.main__content_item}>
                    <p>
                            I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
                    </p>
                </div>
                <div className={ `${ s.main__content_item } + ${s.main__content_photo}` }>
                    <img src='https://www.meme-arsenal.com/memes/a9f034df5285bed728c5fe025c01e1d3.jpg' alt="Just MyAva"/>
                </div>

            </div>
            <div>

            </div>
        </div>
    )
}