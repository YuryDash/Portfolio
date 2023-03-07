import React from 'react';
import s from './App.module.scss';
import {Header} from "./Header/Header";
import {Main} from "./Features/Main/Main";
import {Skills} from "./Features/Skills/Skills";
import {MyProjects} from "./Features/MyProjects/MyProjects";
import {RemoteWork} from "./Features/RemoteWork/RemoteWork";
import {PATH} from "./common/constants/constants";
import {Route, Routes} from 'react-router-dom';
import {Footer} from "./Features/Footer/Footer";


function App() {
    return (
        <div className={s.App}>

            <div className={s.container}>
                <Header/>
                <Routes>
                    <Route path={PATH.MAIN} element={<Main/>}/>
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
