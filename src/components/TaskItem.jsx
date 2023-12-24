import React from 'react';
import { HiX } from 'react-icons/hi';

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
	return (
		<li className='items border-t border-gray-200'>
			<div className='items-text'>
				<input
					type='checkbox'
					checked={task.checked}
					onChange={() => toggleCheck(task.taskName)}
				/>
				<p className={task.checked ? 'isChecked ' : ''}>{task.taskName}</p>
			</div>
			<HiX className=' delete-icon' onClick={() => deleteTask(task.taskName)} />
		</li>
	);
};

export default TaskItem;
