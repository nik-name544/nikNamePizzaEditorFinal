import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { toppingsName } from './store/ToppingsName'
import { useDispatch, useSelector } from "react-redux";
import { finalTotal } from './store/PizzaStoreRedux';
import * as Style from './PizzaEditorStyle'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 


// https://dzs9l.sse.codesandbox.io/ мой серв: пофиксить названия сменить добавить данные 


const PizzaEditorForm = () => {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            size: 'small',
            sauce: 'tomatoSauce',
            dough: 'thin',
            cheese: [],
            vegetables: [],
            meat: [],
        }
    }) 
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const dispatch = useDispatch();
    let PizzaServData = useSelector(state => state.pizzaServData[0])
    const PizzaName = useSelector(state => state.toppings)
    const ServAnswer = useSelector(state => state.servAnswer)
    const values = watch()
    const price = finalTotal(values, PizzaServData); 
    const onSubmit = (data) => {
        finalTotal(values, PizzaServData)
        dispatch({ type: "pizza/finalTotal", payload: price })
        toppingsName({ values, PizzaServData, PizzaName, dispatch })
    }
    const imgsrc = (imgName, width) => {
        return <img src={`https://dzs9l.sse.codesandbox.io/${imgName}.png`} alt="topping" width={width} height="64" />
    }
    const names = [values.sauce, values.size, values.dough, ...values.cheese, ...values.vegetables, ...values.meat,]
    const img = [values.dough, ...values.cheese, ...values.meat, ...values.vegetables,]
    let valueName = names.map((item, i) => {
        return (
            <p key={i} className="pizza-list__ing">
                {item}
            </p>
        )
    })
    let imgName = img.map((item, i) => { 
        let styles = {
            position: "absolute",
            zIndex: i,
            left: "50%",
            top: "50%",
            width: i < 1 ? 265 : 215,
            transform: " translate(-50%, -50%)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }
        return (
            <img src={`https://dzs9l.sse.codesandbox.io/${item}.png`} alt="topping1" style={styles} key={i} />
        )
    })
    if (ServAnswer.isError) {
        return <>Error: {JSON.stringify(ServAnswer.error)}</>;
    }

    if (ServAnswer.isLoading) {
        return <div className="logo"></div>
    }

    return (
        <>
            <div>
                <div className="header">
                    <div className="header__logo"></div>
                    <div className="header__profile"></div>
                </div>
                <div style={{
                    display: "flex",
                    height: 380,
                    width: 360,
                    margin: "0 auto",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                    <div style={{
                        width: 360,
                        height: 274,
                        display: "flex",
                        position: "relative",
                    }}>
                        {imgName}
                    </div>
                    <p className="pizza__name">Best pizza</p>
                    <div style={{
                        width: 360,
                        height: "fit-content",
                        display: "flex",
                        flexWrap: "wrap",
                        marginBottom: 20,
                        marginLeft: 10,
                    }}>
                        {valueName}
                    </div>
                </div>
            </div>
            <Style.MainApp onSubmit={handleSubmit(onSubmit)} >
                <Style.SizeDoughInner >
                    <Style.SizeDough>
                        <Style.ToppingTitle>Выберите тесто:</Style.ToppingTitle>
                        <Style.SizeDoughWrapper>
                            <Style.RadioLabel>
                                <Style.RadioBox
                                    ref={register}
                                    type="radio"
                                    value="thin"
                                    name="dough"
                                />
                                <Style.SizeDoughText id="dough-thin__text">
                                    {PizzaServData.dough.thin.slug}
                                </Style.SizeDoughText>
                            </Style.RadioLabel>
                            <Style.RadioLabel>
                                <Style.RadioBox
                                    ref={register}
                                    type="radio"
                                    value="fluffy"
                                    name="dough"
                                />
                                <Style.SizeDoughText id="dough-fluffy__text">
                                    {PizzaServData.dough.fluffy.slug}
                                </Style.SizeDoughText>
                            </Style.RadioLabel>
                        </Style.SizeDoughWrapper>
                    </Style.SizeDough>
                    <Style.SizeDough>
                        <Style.ToppingTitle>Выберите размер:</Style.ToppingTitle>
                        <Style.SizeDoughWrapper>
                            <Style.RadioLabel>
                                <Style.RadioBox
                                    ref={register}
                                    type="radio"
                                    value="small"
                                    name="size"
                                />
                                <Style.SizeDoughText id="size-small__text">
                                    {PizzaServData.size.small.slug}
                                </Style.SizeDoughText>
                            </Style.RadioLabel>
                            <Style.RadioLabel>
                                <Style.RadioBox
                                    ref={register}
                                    type="radio"
                                    value="big"
                                    name="size"
                                />
                                <Style.SizeDoughText id="size-big__text">
                                    {PizzaServData.size.big.slug}
                                </Style.SizeDoughText>
                            </Style.RadioLabel>

                        </Style.SizeDoughWrapper>
                    </Style.SizeDough>
                </Style.SizeDoughInner>

                <fieldset className="sauce">
                    <Style.ToppingTitle>Выберите соус:</Style.ToppingTitle>
                    <Style.SauceInner>
                        <Style.RadioLabel>
                            <Style.RadioBox
                                ref={register}
                                type="radio"
                                value="tomatoSauce"
                                name="sauce"
                            />
                            <Style.RadioText id="tomato-sauce__text">
                                {PizzaServData.sauce.tomatoSauce.slug}
                            </Style.RadioText>
                        </Style.RadioLabel>
                        <Style.RadioLabel>
                            <Style.RadioBox
                                ref={register}
                                type="radio"
                                value="whiteSauce"
                                name="sauce"
                            />
                            <Style.RadioText id="white-sauce__text">
                                {PizzaServData.sauce.whiteSauce.slug}
                            </Style.RadioText>
                        </Style.RadioLabel>
                        <Style.RadioLabel>
                            <Style.RadioBox
                                ref={register}
                                type="radio"
                                value="spicySauce"
                                name="sauce"
                            />
                            <Style.RadioText id="spicy-sauce__text">
                                {PizzaServData.sauce.spicySauce.slug}
                            </Style.RadioText>
                        </Style.RadioLabel>
                    </Style.SauceInner>
                </fieldset>

                <fieldset className="cheese">
                    <Style.ToppingTitle>Добавте сыр:</Style.ToppingTitle>
                    <Style.CheckboxGroup>
                        <Style.CheckboxInner>
                            <Style.CheckboxTitle >
                                {imgsrc("mozarella-thumb", 64)}
                                {PizzaServData.cheese.mozarella.slug}
                            </Style.CheckboxTitle>
                            <Style.CheckboxWrapper>
                                <Style.CheckboxText>{PizzaServData.cheese.mozarella.price} ₽</Style.CheckboxText>
                                <input
                                    ref={register}
                                    type="checkbox"
                                    value="mozarella"
                                    name="cheese"
                                />
                            </Style.CheckboxWrapper>
                        </Style.CheckboxInner>
                        <Style.CheckboxInner>
                            <Style.CheckboxTitle >
                                {imgsrc("cheddar-thumb", 64)}
                                {PizzaServData.cheese.cheddar.slug}
                            </Style.CheckboxTitle>
                            <Style.CheckboxWrapper>
                                <Style.CheckboxText>{PizzaServData.cheese.cheddar.price} ₽</Style.CheckboxText>
                                <input
                                    ref={register}
                                    type="checkbox"
                                    value="cheddar"
                                    name="cheese"
                                />
                            </Style.CheckboxWrapper>
                        </Style.CheckboxInner>
                        <Style.CheckboxInner>
                            <Style.CheckboxTitle >
                                {imgsrc("dorBlue-thumb", 64)}
                                {PizzaServData.cheese.dorBlue.slug}
                            </Style.CheckboxTitle>
                            <Style.CheckboxWrapper>
                                <Style.CheckboxText>{PizzaServData.cheese.dorBlue.price} ₽</Style.CheckboxText>
                                <input
                                    ref={register}
                                    type="checkbox"
                                    value="dorBlue"
                                    name="cheese"
                                />
                            </Style.CheckboxWrapper>
                        </Style.CheckboxInner>
                    </Style.CheckboxGroup>
                </fieldset>

                <fieldset className="vegetables">
                    <Style.ToppingTitle>Добавте овощи:</Style.ToppingTitle>
                    <div style={{ maxWidth: "360px", margin: "25px auto 0" }}>
                        <Slider {...settings}>
                            {/* <Style.CheckboxGroup> */}
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle >
                                    {imgsrc("tomato-thumb", 64)}
                                    {PizzaServData.vegetables.tomato.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.vegetables.tomato.price} ₽</Style.CheckboxText>

                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="tomato"
                                        name="vegetables"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle >
                                    {imgsrc("mushrooms-thumb", 64)}
                                    {PizzaServData.vegetables.mushrooms.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.vegetables.mushrooms.price} ₽</Style.CheckboxText>
                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="mushrooms"
                                        name="vegetables"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle >
                                    {imgsrc("olives-thumb", 64)}
                                    {PizzaServData.vegetables.olives.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.vegetables.olives.price} ₽</Style.CheckboxText>
                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="olives"
                                        name="vegetables"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle >
                                    {imgsrc("pineapple-thumb", 64)}
                                    {PizzaServData.vegetables.pineapple.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.vegetables.pineapple.price} ₽</Style.CheckboxText>
                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="pineapple"
                                        name="vegetables"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle >
                                    {imgsrc("pepper-thumb", 64)}
                                    {PizzaServData.vegetables.pepper.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.vegetables.pepper.price} ₽</Style.CheckboxText>
                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="pepper"
                                        name="vegetables"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle >
                                    {imgsrc("broccoli-thumb", 64)}
                                    {PizzaServData.vegetables.broccoli.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.vegetables.broccoli.price} ₽</Style.CheckboxText>
                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="broccoli"
                                        name="vegetables"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle >
                                    {imgsrc("onion-thumb", 64)}
                                    {PizzaServData.vegetables.onion.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.vegetables.onion.price} ₽</Style.CheckboxText>
                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="onion"
                                        name="vegetables"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            {/* </Style.CheckboxGroup> */}
                        </Slider>
                    </div>
                </fieldset>
                <fieldset className="meat">
                    <Style.ToppingTitle>Добавте мясо:</Style.ToppingTitle>
                    <div style={{ maxWidth: "360px", margin: "25px auto 0" }}>
                        <Slider {...settings}>
                            {/* <Style.CheckboxGroup> */}
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle >
                                    {imgsrc("bacon-thumb", 64)}
                                    {PizzaServData.meat.bacon.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.meat.bacon.price} ₽</Style.CheckboxText>
                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="bacon"
                                        name="meat"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle >
                                    {imgsrc("pepperoni-thumb", 64)}
                                    {PizzaServData.meat.pepperoni.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.meat.pepperoni.price} ₽</Style.CheckboxText>
                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="pepperoni"
                                        name="meat"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle  >
                                    {imgsrc("ham-thumb", 64)}
                                    {PizzaServData.meat.ham.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.meat.ham.price} ₽</Style.CheckboxText>
                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="ham"
                                        name="meat"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle >
                                    {imgsrc("chicken-thumb", 64)}
                                    {PizzaServData.meat.chicken.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.meat.chicken.price} ₽</Style.CheckboxText>
                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="chicken"
                                        name="meat"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            <Style.CheckboxInner>
                                <Style.CheckboxTitle >
                                    {imgsrc("salami-thumb", 64)}
                                    {PizzaServData.meat.salami.slug}
                                </Style.CheckboxTitle>
                                <Style.CheckboxWrapper>
                                    <Style.CheckboxText>{PizzaServData.meat.salami.price} ₽</Style.CheckboxText>
                                    <input
                                        ref={register}
                                        type="checkbox"
                                        value="salami"
                                        name="meat"
                                    />
                                </Style.CheckboxWrapper>
                            </Style.CheckboxInner>
                            {/* </Style.CheckboxGroup> */}
                        </Slider>
                    </div>
                </fieldset>
                <Link to="/payment-form" onClick={onSubmit} className="submit__btn-wrapper">
                    <button className="submit__btn-inner active">
                        <span className="submit__btn active">Заказать за {price}</span>
                    </button>
                </Link>
            </Style.MainApp>
        </>
    )


}

export default PizzaEditorForm 