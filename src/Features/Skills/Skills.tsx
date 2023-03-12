import s from "./Skills.module.scss"
import {v1} from "uuid";
import React from "react";
import {Fade} from "react-awesome-reveal";
// import ReactTypingEffect from 'react-typing-effect';
import {ABOUT} from "../../common/constants/constants";
import {TitleBold} from "../../components/TitleBold/TitleBold";
import ReactTypingEffect from 'react-typing-effect';
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {SiTypescript} from "@react-icons/all-files/si/SiTypescript";
import {SiRedux} from "@react-icons/all-files/si/SiRedux";
import {FaReact} from "@react-icons/all-files/fa/FaReact";
import {AiFillHtml5} from "@react-icons/all-files/ai/AiFillHtml5";
import {SiStorybook} from "@react-icons/all-files/si/SiStorybook";


export const Skills = () => {
    const data = [
        {
            id: v1(),
            img: <FaReact/>,
            title: 'React',
            text: 'React developed Facebook 11 years ago, which is now called' +
                ' Meta. But now React is an open source project in which every' +
                ' developer can propose changes. And he is popular not only' +
                ' with the Zuckerberg team: a little'
        }, {
            id: v1(),
            img: <SiRedux/>,
            title: 'Redux React-Redux',
            text: 'Redux is a universal development tool and can be used ' +
                'in conjunction with various libraries and frameworks.'
        }, {
            id: v1(),
            img: <SiTypescript/>,
            title: 'JavaScript/TypeScript',
            text: 'JavaScript (JS) is the only programming language for ' +
                ' descriptions of the behavior of elements on a page in the browser: it makes ' +
                ' interfaces interactive'
        }, {
            id: v1(),
            img: <AiFillGithub/>,
            title: 'Git',
            text: 'TypeScript is an extended JavaScript that provides optional' +
                ' static typing, classes, and interfaces. One important ' +
                'advantage is that code editors provide a richer environment ' +
                'for detecting type-related errors when typing code.'
        }, {
            id: v1(),
            img:<AiFillHtml5/>,
            title: 'HTML&CSS-SASS',
            text: 'HTML, a hypertext markup language. Allows you to set the' +
                ' structure of the site display and create interactive' +
                ' elements: forms, drop-down lists, buttons. CSS, cascading style sheets. ' +
                'They are used to set the shape, fonts and colors of different elements.'
        }, {
            id: v1(),
            img:<SiStorybook/>,
            title: 'StoryBook',
            text: 'Storybook allows you to browse the component library,' +
                ' see the various component states, and interactively' +
                ' develop and test components.'
        }
    ]


    const mappedItems = data.map(el => {

        return (
            <div className={s.skills__achieve} key={el.id}>
                <div className={s.item__img}>{el.img}</div>
                <div className={s.item__title}>{el.title}</div>
                <div className={s.item__text}>{el.text}</div>
            </div>
        )
    })
    return (
        <div className={s.skills} id={'skills'}>

            <div className={s.wrapper__title}><TitleBold text={"Knowledge moving"} colorText={" FORWARD"}/></div>

            <div className={s.skills__title}>
                <Fade cascade damping={0.1}>
                    <ReactTypingEffect className={s.skills__typingEffects} text={ABOUT.POSITION}/>
                </Fade>
            </div>
            <div className={s.skills__achieve_wrap}>{mappedItems}</div>
        </div>
    )
}