import React from 'react'
import { Link } from 'react-router-dom' 
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

// import { useSelector, useDispatch } from 'react-redux';

const schema = yup.object().shape({
    password: yup.string().required("Введите Пароль"),
    email: yup.string().email("собака").required("Введите E-mail"),

})



function Registration() {
    const { register, handleSubmit} = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    })
//     const Registered = useSelector(state => state.registered)
    const dispatch = useDispatch();

    const onSubmit = (data) => { 
        dispatch({ type: "pizza/registered", payload: true })
    }; 
 
    return (
        <div className="auth-form">
            <header className="payment-form__header">
                <Link to="/pizza-editor-login" className="payment-form__header-link"></Link>
                <p className="payment-form__title">Регистрация</p>
            </header>
            <section className="auth-form">
                <div className="container">
                    <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
                        <label className="auth-form__label">E-mail
                            <input
                                type="email"
                                className="auth-form__input"
                                ref={register}
                                name="email"
                            />
                        </label>
                        <label className="auth-form__label">Пароль
                            <input
                                type="password"
                                className="auth-form__input"
                                ref={register}
                                name="password"
                            />
                            {/* <input type="password" className="auth-form__input wrong" /> */}
                            <span className="auth-form__wrong wrong">Неправильный пароль</span>
                        </label>
                        <div className="auth-form__btn-inner active">
                            <Link to="/checkout" className="auth-form__btn  active">Зарегестрироваться</Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default  Registration 
