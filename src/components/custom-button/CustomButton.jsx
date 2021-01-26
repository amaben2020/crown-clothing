import React from "react";
import "./custom-button.styles.css";
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
	return (
		<button
			className={`${
				isGoogleSignIn ? "google-sign-in" : "custom-button"
			} "custom-button"`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default CustomButton;
//Reusable button that renders google color if the button prop isGoogleSignIn is true
