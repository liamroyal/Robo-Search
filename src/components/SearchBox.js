import React from 'react';

const SearchBox = ({onSearch}) => {
	return (
		<div className="pa3">
			<input 
				className="shadow-1	tc pa3 ba b--red bg-washed-red"	
				type="search" 
				placeholder="Search for a Robot"
				onChange={onSearch}
			/>
		</div>
	);
}

export default SearchBox