import React from 'react'
import './App.css';
import './reset.css'
import { Link, Route, Switch } from "react-router-dom";
import Checkout from './Checkout/Checkout';
import Registration from './Login/Registration';
import Login from './Login/Login';
import OrderList from './OrderList/OrderList';
import PaymentForm from './PaymentForm/PaymentForm';
import PizzaEditorForm from './PizzaEditor/PizzaEditorForm'
import './PizzaEditorStyle.css'
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query"; 


function App() {

  const dispatch = useDispatch();
  const { isLoading, isError,  error } = useQuery(
    "someId", () => fetch(`https://dzs9l.sse.codesandbox.io/ingredients`).then((res) => res.json())
  );
  dispatch({ type: "pizza/servAnswer", isLoading: isLoading, isError: isError, error: error })

  const Registered = useSelector(state => state.registered)
  const auth = () => {
    if (Registered) {
      return "/order-list"
    } else {
      return "/login"
    }
  }
 
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">PizzaEditor</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to={auth}>OrderList</Link></li>
          <li><Link to="/payment-form">PaymentForm</Link></li>
        </ul>
      </nav>


      <Switch>
        <Route path="/" exact>
          <PizzaEditorForm />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/order-list">
          <OrderList />
        </Route>
        <Route path="/payment-form">
          <PaymentForm />
        </Route>
      </Switch>

    </>
  )
}

export default App 
