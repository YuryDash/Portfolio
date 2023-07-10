import React, { useCallback, useState } from "react";
import s from "./App.module.scss";
import { Header } from "./Header/Header";
import { Main } from "./Features/Main/Main";
import { Skills } from "./Features/Skills/Skills";
import { MyProjects } from "./Features/MyProjects/MyProjects";
import { Contacts } from "./Features/RemoteWork/Contacts";
import { PATH } from "./common/constants/constants";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./Features/Footer/Footer";
import { Sidebar } from "./Features/Sidebar/Sidebar";
import { ErrorPath } from "./components/Error/ErrorPath";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMenu = useCallback(() => setToggleMenu(false), []);
  const openMenu = useCallback(() => setToggleMenu(true), []);

  return (
    <div className={s.App}>
      <div className={s.container}>
        <Header openMenu={openMenu} />
        <Sidebar toggleMenu={toggleMenu} closeMenu={closeMenu} />
        <Routes>
          <Route path={PATH.MAIN} element={<Main />} />
          <Route path={PATH.SKILLS} element={<Skills />} />
          <Route path={PATH.PROJECTS} element={<MyProjects />} />
          <Route path={PATH.CONTACTS} element={<Contacts />} />
          <Route path={"/"} element={<Navigate to={PATH.MAIN} />} />
          <Route path={PATH.ERROR_PATH} element={<ErrorPath />} />
          <Route path={"*"} element={<Navigate to={PATH.ERROR_PATH} />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
