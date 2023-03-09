import React, {useCallback, useState} from 'react';
import s from './App.module.scss';
import {Header} from "./Header/Header";
import {Main} from "./Features/Main/Main";
import {Skills} from "./Features/Skills/Skills";
import {MyProjects} from "./Features/MyProjects/MyProjects";
import {RemoteWork} from "./Features/RemoteWork/RemoteWork";
import {PATH} from "./common/constants/constants";
import {Route, Routes} from 'react-router-dom';
import {Footer} from "./Features/Footer/Footer";
import {Sidebar} from "./Features/Sidebar/Sidebar";


function App() {

    const [toggleMenu, setToggleMenu] = useState(false)
    const closeMenu = useCallback(() => setToggleMenu(false), [])
    const openMenu = useCallback(() => setToggleMenu(true), [])

    return (
        <div className={s.App}>

            <div className={s.container}>
                <Header openMenu={openMenu}/>
                <Sidebar openMenu={openMenu} handleClose={closeMenu}/>

                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={PATH.SKILLS} element={<Skills/>}/>
                    <Route path={PATH.PROJECTS} element={<MyProjects/>}/>
                    <Route path={PATH.CONTACTS} element={<RemoteWork/>}/>
                </Routes>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
