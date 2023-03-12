import React from "react";
import s from "./Nav.module.scss"
import {LinksAll} from "../../components/LinksAll/LinksAll";

type NavPropsType = {
    closeMenu?: () => void
    className?: string
}
export const Nav: React.FC<NavPropsType> = ({
                                                closeMenu,
                                                className
                                            }) => {
    return (
        <nav className={className}>
            <LinksAll closeMenu={closeMenu} classes={s.focused}/>
        </nav>
    )
}