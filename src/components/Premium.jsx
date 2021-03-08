import React from "react";
import mobilePay from "../images/undraw_mobile_pay_9abj.png";
import GreetingColumn from "./GreetingColumn";

const Premium = () => {
	return (
		<>
			<GreetingColumn
				image={mobilePay}
				title="OBSCURY PREMIUM"
				subtitle="Achetez plus facilement et rapidement les œuvres de vos artistes"
			/>
		</>
	);
};

export default Premium;
