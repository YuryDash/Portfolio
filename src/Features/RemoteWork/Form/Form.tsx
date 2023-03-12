import s from "./Form.module.scss"
export const Form = () => {
    return (
        <div className={s.form}>
            <div className={s.form__wrapper}>
                <h2>Contacts</h2>
                <div className={s.form__inputs}>
                    <div className={s.input__one}>
                        <input placeholder={'YOUR NAME'} type="text"/>
                    </div>
                    <div className={s.input__two}>
                        <input placeholder={'E-MAIL'} type="email"/>
                    </div>
                    <textarea name="" id="" placeholder={'YOUR MESSAGE'}></textarea>
                </div>
                <button className={s.form__button}>
                    Send
                </button>
            </div>
        </div>
    )
}