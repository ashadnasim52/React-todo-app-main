import React from 'react';

const Stats = ({ toDoList }) => {
	let countList = toDoList.length;
	return (
		<div className='fixed bottom-0 left-0 right-0'>
			<p className=' notify'>
				{countList === 0
					? 'You got everythig! Ready to go ✈️'
					: `You have ${countList} items on your list.`}
			</p>
		</div>
	);
};

export default Stats;
