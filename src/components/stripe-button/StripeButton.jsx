import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeButton = ({ price }) => {
	const publishableKey =
		"pk_test_51Hyeo2DMW3TinYJT67YPNXU8XO45BgmNlOfsVoSGTfXZKta9N34yuKzufBKWjt1XH0ONRuAbpZGKgTf0L8jokJL1000Wxki41K";
	const onToken = (token) => {
		console.log(token);
		alert("Payment successful");
	};
	const priceForStripe = price * 100;

	return (
		<StripeCheckout
			label="Pay Now"
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $ ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
