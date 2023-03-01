import s from "./Main.module.scss"


export const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.main__content}>

                <div className={s.main__content_item}>
                    <p>
                        Hello my name is Yury , and I front-end developer.
                        <p>I have always been interested in computers and programs with precise calculation. My choice
                            was
                            the JavaScript programming language because it combines flexibility and precision.
                        </p>
                    </p>
                </div>
                <div className={ `${ s.main__content_item } + ${s.main__content_photo}` }>
                    <img src='https://www.meme-arsenal.com/memes/a9f034df5285bed728c5fe025c01e1d3.jpg' alt="Just MyAva"/>
                </div>

            </div>
        </div>
    )
}