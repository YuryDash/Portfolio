import {NavLink} from "react-router-dom";
import {PATH} from "../../common/constants/constants";
import React from "react";
import s from "./LinksAll.module.scss"

type LinksAllPropsType = {
    closeMenu?: () => void
    classes: string
}

export const LinksAll: React.FC<LinksAllPropsType> = ({
    closeMenu,
    classes
                                                      }) => {
    return (
        <>
                <NavLink onClick={closeMenu} to={'/'} className={ ( {isActive} ) => (isActive ? classes : s.ordinary)}>Main</NavLink>
                <NavLink onClick={closeMenu} to={PATH.SKILLS} className={ ( {isActive} ) => isActive ? classes : s.ordinary}>Skills</NavLink>
                <NavLink onClick={closeMenu} to={PATH.PROJECTS} className={ ( {isActive} ) => isActive ? classes : s.ordinary}>Projects</NavLink>
                <NavLink onClick={closeMenu} to={PATH.CONTACTS} className={ ( {isActive} ) => isActive ? classes : s.ordinary}>Contacts</NavLink>
        </>
    )
}