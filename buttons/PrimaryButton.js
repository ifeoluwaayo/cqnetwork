import React from "react";

const PrimaryButton = ({ children, ...props }) => {
	return <button {...props}>{children}</button>;
};

export default PrimaryButton;
