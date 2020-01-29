import React from 'react';

const Card = ({id, name, email}) => {
	console.log(id);
	return(
		<div className="tc bg-washed-red dib br3 ma2 grow bw shadow-5">
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>

	);
}

export default Card;