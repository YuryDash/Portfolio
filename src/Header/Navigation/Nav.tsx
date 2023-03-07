


import React from "react";
import s from "./Nav.module.scss"
import {NavLink} from "react-router-dom";
import {PATH} from "../../common/constants/constants";

export const Nav = () => {
    return (
        <div className={s.nav}>

            <div className={s.nav__links}>
               <NavLink to={PATH.MAIN} className={s.nav__link}>Main</NavLink>
                <NavLink to={PATH.SKILLS} className={s.nav__link}>Skills</NavLink>
                <NavLink to={PATH.PROJECTS} className={s.nav__link}>Projects</NavLink>
                <NavLink to={PATH.CONTACTS} className={s.nav__link}>Contacts</NavLink>
            </div>

        </div>
    )
}