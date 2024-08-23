import React, { useState } from "react";

export const TrafficLights= () => {
    // Code JS
    const [color,setColor] = useState('glow')
    const [background,setBackgrond] = useState ('secondary')



    return (
        <>
			<div className="base"></div>
				<div className="text-center container">
					<div className="traffic-lights">
						<div onClick={() => setColor('red')} className={'light-red' + (color === 'red' ? ' glow' : '')}></div>
						<div onClick={() => setColor('yellow')} className={'light-yellow' + (color === 'yellow' ? ' glow' : '')}></div>
						<div onClick={() => setColor('green')} className={'light-green' + (color === 'green' ? ' glow' : '')}></div>
				</div>
			</div> 
		</>
        
    )
}
