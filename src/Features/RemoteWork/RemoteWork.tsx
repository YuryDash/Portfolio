
import s from "./RemoteWork.module.scss"
import React from "react";
import {Form} from "../Form/Form";

export const RemoteWork = () => {
    return (
        <div className={s.work}>
            <div className={s.work__wrapper}>
                <div>I am considering options for remote work</div>
                <button>recruit me</button>
            </div>
            <Form/>
        </div>
    )
}