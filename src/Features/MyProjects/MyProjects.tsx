import s from "./MyProjects.module.scss"
import React from "react";
import {TitleBold} from "../../components/TitleBold/TitleBold";
import {Fade} from "react-awesome-reveal";
import {LINKS} from "../../common/constants/constants";


export const MyProjects = () => {

    return (
        <div className={s.projects} id={'MyProject'}>
                <h2 className={s.projects__title}>
                    <Fade cascade damping={0.4}> <TitleBold text={'My '} colorText={'works'}/> </Fade>
                </h2>
                <div className={s.projects__examples}>
                    <div className={s.example}>
                        <div className={s.example__img}>
                            <button className={s.example__button}>Show</button>
                        </div>
                        <div className={s.example__description}>
                            <Fade cascade damping={0.8}> <div className={s.example__title}>Social Network</div> </Fade>
                            <div className={s.example__text}>This is a social network site where users can leave comments,
                                share photos and post links to news or other interesting content on the Internet,
                                chat and watch
                                short videos. You can even order food on Seven if that's what you want to do. Shared content can be made public,
                                or it can be shared only among a select group of friends, or with one person.
                                </div>
                        </div>
                    </div>

                    <div className={s.example}>
                        <div className={`${s.example__img} + ${s.example__imgTwo}`}>
                            <button className={`${s.example__button} + ${s.example__button_two}`}>
                                <a href={LINKS.LINKED_IN} rel='noreferrer' target={'_blank'} >Show</a>
                            </button>
                        </div>
                        <div className={s.example__description}>
                            <Fade cascade={true} damping={0.8}> <div className={s.example__title}>TodoList</div> </Fade>
                            <div className={s.example__text}>What is a Todo List?
                                Todo List is a list of things you need to do or what you want to do.
                                advertisement
                                Traditionally, they are written on a piece of paper and organized in order of priority.
                                When performing a task, it is usually crossed off the list.
                                But such a list can be kept not only on a piece of paper, but also in electronic form,
                                for example, a browser.</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}