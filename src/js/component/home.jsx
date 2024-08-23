import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLights } from "./ligths";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<TrafficLights/>
		</div>
	);
};

export default Home;
