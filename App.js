import React, { Component } from "react";
import { Root } from "native-base";
import {
	createStackNavigator,
	createSwitchNavigator,
	createAppContainer,
} from "react-navigation";

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

class App extends Component {
	render() {
		return (
			<Root>
				<AppContainer />
			</Root>
		);
	}
}

export default App;
