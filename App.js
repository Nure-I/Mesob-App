import React from "react";
import RecipeDetailScreen from "./Screens/Restaurant/RecipeDetailScreen";
import WelcomeScreen from "./Screens/Restaurant/WelcomeScreen";
import DATA from "./config/Restaurant/DATA";
import HomeScreen from "./Screens/Restaurant/HomeScreen";
const App = () => {
	// return <RecipeDetailScreen recipe={DATA[0].recipes[1]} />;
	// return <WelcomeScreen />;
	return <HomeScreen />;
};

export default App;
