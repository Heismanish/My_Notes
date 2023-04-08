import React from "react";
import "./Card.css";

// Creating a wrapper class
const Card = (props) => {
	// to make this component capable of using classes we create this format.
	const classes = "card " + props.className;

	// this is an example of children_props:
	// In order to have content inside a wrapper component
	// we need to explicitly define that there will be content
	// passed inside the component.
	return <div className={classes}>{props.children}</div>;
};
export default Card;
