import React from 'react';
import './ErrorBoundaryComponent.scss';
import icon from './assets/death-star.png';

const ErrorBoundaryComponent = () => {
	return (
		<div className="error-indicator">
			<img src={icon} alt="error icon" />
			<span className="boom">BOOM!</span>
			<span>something has gone terribly wrong</span>
			<span>(but we already sent droids to fix it)</span>
		</div>
	);
};

export default ErrorBoundaryComponent;
