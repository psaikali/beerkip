import React, { Component } from "react";
import { Root } from "native-base";
import { Provider } from "react-redux";
import {
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer,
} from "react-navigation";

import configureStore from "./src/store/configureStore";
import { addBeer } from "./src/store/actions/beers";
import dummyData from "./src/utils/dummyData";

import TopBar from "./src/components/TopBar/TopBar";
import Loading from "./src/screens/Loading/Loading";
import Login from "./src/screens/Login/Login";
import BeersList from "./src/screens/BeersList/BeersList";
import BeerAdd from "./src/screens/BeerAdd/BeerAdd";
import Profile from "./src/screens/Profile/Profile";

/**
 * Our LoginStack which contains only the Login screen
 */
const LoginStack = createStackNavigator({
	Login: {
		screen: Login,
		navigationOptions: {
			header: null,
		},
	},
});

/**
 * Our main AppStack with every app screens, accessible once user is logged in
 */
const AppStack = createStackNavigator({
	BeersList: {
		screen: BeersList,
		navigationOptions: ({ navigation }) => ({
			header: (
				<TopBar
					navigation={navigation}
					title="My beers"
					leftActionIcon="searchBeers"
					rightActionIcon="seeProfile"
				/>
			),
		}),
	},
	BeerAdd: {
		screen: BeerAdd,
		navigationOptions: ({ navigation }) => ({
			header: (
				<TopBar
					navigation={navigation}
					title="Add a new beer"
					leftActionIcon="goBack"
				/>
			),
		}),
	},
	Profile: {
		screen: Profile,
		navigationOptions: ({ navigation }) => ({
			header: (
				<TopBar
					navigation={navigation}
					title="User profile"
					leftActionIcon="goBack"
					rightActionIcon="logout"
				/>
			),
		}),
	},
});

/**
 * Our AppContainer that will load a quick Loading screen in charge of choosing if we display the Login or App stack
 */
const AppContainer = createAppContainer(
	createSwitchNavigator(
		{
			Loading: Loading,
			Login: LoginStack,
			App: AppStack,
		},
		{
			initialRouteName: "Loading",
		}
	)
);

/**
 * Get our Redux store object
 */
const store = configureStore();

/**
 * Temporary add fake beers
 */
dummyData.beers.map(beer => store.dispatch(addBeer(beer)));

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Root>
					<AppContainer />
				</Root>
			</Provider>
		);
	}
}

export default App;
