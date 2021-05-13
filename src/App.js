import './App.css';
import Header from "./Header";
import Home from "./Home";
import Orders from "./Orders";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
 const promise = loadStripe(
 'sk_test_51INf8ILZ8xpRgpfiHvuVTDAnhtUNtJYrDrSgQHbhRtOXVv4LMDTMSRVQ7nEzsso3k72G9BOlw5slTENA1EwWmZaw00xaNv8lvM'
 );


function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
		<div className="App">
			<Switch>
				<Route path="/orders">
					<Header />
					 <Orders />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/payment">
					<Elements stripe={promise}>
						<Payment />
					</Elements>
				</Route>
				<Route path="/checkout">
					<Header />
					<Checkout />
				</Route>
				<Route path="/">
					<Header />
					<Home />
				</Route>
			</Switch>
		</div>
	</Router>
);
}

export default App;