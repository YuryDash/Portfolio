


import React from "react";
import s from "./Nav.module.scss"
import {NavLink} from "react-router-dom";
import {PATH} from "../../common/constants/constants";

type NavPropsType = {
    closeMenu?:()=> void
    className: string
}
export const Nav: React.FC<NavPropsType> = ({
                            closeMenu
                              }) => {
    return (
        <div className={s.nav}>

            <div className={s.nav__links}>
               <NavLink onClick={closeMenu} to={'/'} className={s.nav__link}>Main</NavLink>
                <NavLink onClick={closeMenu} to={PATH.SKILLS} className={s.nav__link}>Skills</NavLink>
                <NavLink onClick={closeMenu} to={PATH.PROJECTS} className={s.nav__link}>Projects</NavLink>
                <NavLink onClick={closeMenu} to={PATH.CONTACTS} className={s.nav__link}>Contacts</NavLink>
            </div>

        </div>
    )
}