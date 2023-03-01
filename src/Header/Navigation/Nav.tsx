


import React from "react";
import s from "./Nav.module.scss"

export const Nav = () => {
    return (
        <div className={s.nav}>

            <div className={s.nav__links}>
                <a href="" className={s.nav__link}>Главная</a>
                <a href="" className={s.nav__link}>Скиллы</a>
                <a href="" className={s.nav__link}>Проекты</a>
                <a href="" className={s.nav__link}>Контакты</a>
            </div>

        </div>
    )
}