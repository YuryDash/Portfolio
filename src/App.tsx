import React from 'react';
import s from './App.module.scss';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyProjects} from "./MyProjects/MyProjects";

function App() {
    return (
        <div className={s.App}>

            <div className={s.container}>
                <Header/>
                <Main/>
                <Skills/>
                <MyProjects/>
            </div>
        </div>
    );
}

export default App;
