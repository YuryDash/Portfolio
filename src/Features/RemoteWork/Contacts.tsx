import s from "./Contscts.module.scss"
import React from "react";
import {TitleBold} from "../../components/TitleBold/TitleBold";
import {BsWhatsapp} from "react-icons/all";
import {FaWhatsapp} from "@react-icons/all-files/fa/FaWhatsapp";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FiMail} from "@react-icons/all-files/fi/FiMail";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";

export const Contacts = () => {
    return (
        <div className={s.form}>

            <div className={s.form__titles}>
                <TitleBold text={'get in'} colorText={' touch'}/>
                <h2>I’M ALWAYS OPEN TO DISCUSSING PRODUCT FRONT-END WORK OR PARTNERSHIPS.</h2>
            </div>

            <div className={s.form__wrapper}>
                <div className={s.form__contacts}>

                    <div className={s.contact__items}>
                        <h3>Phone</h3>
                        <div className={s.contact__item}>
                            <FaWhatsapp color={'white'}/>
                            <a href={'tel: +375-29-299-99-11'} className={s.contact__text}>+375-29-299-99-11</a>
                        </div>
                    </div>

                    <div className={s.contact__items}>
                        <h3>Instagram</h3>
                        <div className={s.contact__item}>
                            <FaInstagram color={'white'}/>
                            <a target={'_blank'} href={'https://www.instagram.com/'}
                               className={s.contact__text}>YuryDash-front</a>
                        </div>
                    </div>
                    <div className={s.contact__items}>
                        <h3>E-MAIL</h3>
                        <div className={s.contact__item}>
                            <FiMail color={'white'}/>
                            <a target={'_blank'} href={'https://www.google.com/intl/ru/gmail/about/'}
                               className={s.contact__text}>Escanor_seven-sins@gmail.com</a>
                        </div>
                    </div>

                    <div className={s.contact__items}>
                        <h3>Telegram</h3>
                        <div className={s.contact__item}>
                            <FaTelegramPlane color={'white'}/>
                            <a href={'#'} className={s.contact__text}>+48-99-929-19-21</a>
                        </div>
                    </div>


                </div>
                <div className={s.form__launch}>
                    <h2>If you have any suggestion, project or even you want to say Hello.. please fill out the form
                        below and I will reply you shortly.</h2>
                    <div className={s.input__one}>
                        <input placeholder={'YOUR NAME'} type="text"/>
                    </div>

                    <div className={s.input__two}>
                        <input placeholder={'E-MAIL'} type="email"/>
                    </div>

                    <textarea name="" id="" placeholder={'YOUR MESSAGE'}></textarea>

                    <button className={s.form__button}>
                        Send
                    </button>
                </div>
            </div>

        </div>
    )
}