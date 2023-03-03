import React from "react";
import s from "./Header.module.scss"
import {Nav} from "./Navigation/Nav";

export const Header = () => {
    return (
        <header className={s.wrapper}>
            <Nav/>
        </header>
    )
}