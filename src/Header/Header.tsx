import React from "react";
import s from "./Header.module.scss"
import {Nav} from "./Navigation/Nav";
import {GiHamburgerMenu} from "@react-icons/all-files/gi/GiHamburgerMenu";

type HeaderPropsType = {
    openMenu: () => void
}
export const Header: React.FC<HeaderPropsType> = ({
                                                      openMenu
                                                  }) => {
    return (
        <header className={s.wrapper}>
            <div className={s.navMobile}>
                <GiHamburgerMenu onClick={openMenu} className={s.burger}/>
            </div>
            <div className={s.lol}>
                <Nav/>
            </div>
        </header>
    )
}