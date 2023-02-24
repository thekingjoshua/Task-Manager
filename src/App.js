import { useState } from 'react';
// import CourseInput from './components/CourseInput/CourseInput';
import TaskInput from './components/TaskInput/TaskInput';
// import CourseList from './components/TaskList/TaskList';
import TaskList from './components/TaskList/TaskList';
import Card from './components/UI/Card';
const courseList = [
	{ title: 'Pray', id: 'id1' },
	{ title: 'Code', id: 'id2' },
	{ title: 'Eat', id: 'id3' },
	{ title: 'Sleep', id: 'id4' },
];
function App() {
	const [currList, updList] = useState(courseList);

	const deleteItemHandler = listId => {
		updList(prevList => {
			const updatedGoals = prevList.filter(list => list.id !== listId);
			return updatedGoals;
		});
	};

	const submitData = logValue => {
		updList(prevList => {
			let data = [logValue, ...prevList];
			return data;
		});
	};
	let listItem = (
		<p
			style={{
				textAlign: 'center',
				fontWeight: 900,
				marginTop: '10rem',
				fontSize: '1.2rem',
			}}
		>
			No task found.
		</p>
	);
	if (currList.length > 0) {
		listItem = <TaskList items={currList} onDeleteItem={deleteItemHandler} />;
	}
	return (
		<div>
			<Card>
				<TaskInput onSubmit={submitData} />
			</Card>
			<div style={{ textAlign: 'center' }}>
				Built with &hearts; by{' '}
				<a
					style={{ textDecoration: 'none', color: '#8b005d' }}
					href="https://kingjoshua.netlify.app"
				>
					KingJoshua
				</a>
			</div>
			{listItem}
		</div>
	);
}
export default App;
