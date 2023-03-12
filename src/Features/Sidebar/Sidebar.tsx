import {FC, memo} from 'react';
import s from './Sidebar.module.scss'
import {LinksAll} from "../../components/LinksAll/LinksAll";
import {IoCloseSharp} from "@react-icons/all-files/io5/IoCloseSharp";

type SidebarProps = {
    toggleMenu: boolean
    closeMenu: () => void
}
export const Sidebar: FC<SidebarProps> = memo(({
                                                   toggleMenu,
                                                   closeMenu
}) => {
    const sidebarClass = s.sidebar + (toggleMenu ? ' ' + s.open : '')
    return (
        <>
            {toggleMenu && <div className={s.background} onClick={closeMenu}/>}

            <aside className={sidebarClass}>
                <IoCloseSharp onClick={closeMenu} className={s.closeIcon}/>
                <nav className={s.nav}>
                    <LinksAll classes={s.active} />
                </nav>
            </aside>
        </>
    )
})