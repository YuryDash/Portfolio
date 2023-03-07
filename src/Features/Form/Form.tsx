import s from "./Form.module.scss"
export const Form = () => {
    return (
        <div className={s.form}>
            <div className={s.form__wrapper}>
                <h2>Contacts</h2>
                <div className={s.form__inputs}>
                    <div><input placeholder={'hello'} type="text"/></div>
                    <div className={s.input__two}><input placeholder={'lol'} type="text"/></div>
                    <textarea name="" id="" ></textarea>
                </div>
                <button className={s.form__button}>
                    Send
                </button>

            </div>
        </div>
    )
}