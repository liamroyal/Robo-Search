import React from 'react';

const ScrollView = (props) => {
	return (
		<div style={{ background: 'linear-gradient(#833ab4, #ff6666)', overflow: 'scroll', height: '680px'}}>
			{props.children}
		</div>
	);
}

export default ScrollView