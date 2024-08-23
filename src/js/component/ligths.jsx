import React, { useState } from "react";

export const TrafficLights = () => {
	// Code JS
	const [color, setColor] = useState('glow');
	const [background, setBackgrond] = useState('');

	return (
		<>
			<div className="base">
			</div>
			<div className="text-center container">
				<div className="traffic-lights">
					<div onClick={() => setColor('red')} 
					className={(background === ' purple' ? ' purple ' : 'light-red') + (color === 'red' ? ' glow' : '') + (background === ' purple' ? 'light-red' : '')}></div>
					<div onClick={() => setColor('yellow')} 
					className={(background === ' purple' ? ' purple ' : 'light-yellow') + (color === 'yellow' ? ' glow' : '')}></div>
					<div onClick={() => setColor('green')} 
					className={(background === ' purple' ? ' purple ' : 'light-green') + (color === 'green' ? ' glow' : '')}></div>
				</div>
			</div>
			<div className="container text-center">
				<button onClick={() => setBackgrond(' purple')} type="button" className="btn btn-primary m-1">Change Color</button>
				<button onClick={() => setBackgrond('primary')} type="button" className="btn btn-info m-1">Reset</button>
			</div>

		</>
	)
}
