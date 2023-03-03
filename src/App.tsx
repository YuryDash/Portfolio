import React from 'react';
import s from './App.module.scss';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {MyProjects} from "./MyProjects/MyProjects";
import {RemoteWork} from "./RemoteWork/RemoteWork";
import {Form} from "./Form/Form";

function App() {
    return (
        <div className={s.App}>

            <div className={s.container}>
                <Header/>
                <Main/>
                <Skills/>
                <MyProjects/>
                <RemoteWork/>
                <Form/>
            </div>
        </div>
    );
}

export default App;
