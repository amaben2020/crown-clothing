import React from "react";
import "./custom-button.styles.css";
const CustomButton = ({
	children,
	isGoogleSignIn,
	signin,
	inverted,
	...otherProps
}) => {
	return (
		<button
			className={`${inverted ? "inverted" : null}  ${
				signin ? "signin" : null
			}  ${
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
