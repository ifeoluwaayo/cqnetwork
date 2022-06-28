import React from "react";

const PrimaryButton = ({ children, onClick, ...props }) => {
	return (
		<button onClick={onClick} {...props}>
			{children}
		</button>
	);
};

export default PrimaryButton;
