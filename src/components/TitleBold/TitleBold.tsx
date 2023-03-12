import {FC} from "react";
import s from "./TitleBold.module.scss"

type PropsType = {
    text: string
    colorText: string
}
export const TitleBold: FC<PropsType> = ({
                                             text,
                                             colorText,
                                         }) => {

        return (
            <h1 className={s.styles}>{s.text} {text}
                <span className={s.yellow}>{colorText}</span>
            </h1>
        )
}