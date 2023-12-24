import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import Stats from './components/Stats';
import BG from '../src/assets/bg.jpg';

function App() {
	// Loading the todo list from local storage
	const initialToDoList = JSON.parse(localStorage.getItem('todoList')) || [];
	const [toDoList, setToDoList] = useState(initialToDoList);

	useEffect(() => {
		// Saving todo list to local storage
		localStorage.setItem('todoList', JSON.stringify(toDoList));
	}, [toDoList]);

	const addTask = (taskName) => {
		const newTask = { taskName, checked: false };
		setToDoList([...toDoList, newTask]);
	};

	function deleteTask(deleteTaskName) {
		setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
	}

	function toggleCheck(taskName) {
		setToDoList((prevToDoList) =>
			prevToDoList.map((task) =>
				task.taskName === taskName ? { ...task, checked: !task.checked } : task
			)
		);
	}

	console.log(toDoList);
	return (
		<div className='relative'>
			<div className=' flex justify-center'>
				<img
					src={BG}
					alt=''
					className='object-cover h-56 w-full absolute top-0 left-0 right-0 -z-10'
				/>

				<div className='flex justify-center  flex-col z-50 md:max-w-[750px] max-w-[550px] px-10'>
					<h1 className='text-4xl text-white mt-8 mb-8 text-left w-screen px-10'>
						TODO
					</h1>

					<TaskInput addTask={addTask} />

					<div className='bg-white rounded mt-4 w-full'>
						<ul className='list-items w-100'>
							{toDoList.map((task, key) => (
								<TaskItem
									task={task}
									key={key}
									deleteTask={deleteTask}
									toggleCheck={toggleCheck}
								/>
							))}
						</ul>
						{toDoList.length === 0 ? (
							<p className='notify'> You are done! </p>
						) : null}
					</div>
					<hr className=' text-white bg-white mt-4' />
					<span className=' text-white font-bold'> Hello aamish</span>
				</div>
			</div>
			{/* <Stats toDoList={toDoList} /> */}
		</div>
	);
}

export default App;
