import styles from './TaskInput.module.css';
import { useState } from 'react';
import Button from '../UI/Button';

const TaskInput = props => {
	let countId = 5;
	let errorTag;
	const [currCount, increCount] = useState(countId);
	const [input, setInput] = useState('');
	const [isValid, setValid] = useState(true);
	// changing the textContent of the error message
	const changeErrorText = (tag, text) => {
		tag.textContent = text;
	};
	const inputHandler = ({ target }) => {
		errorTag = target.nextElementSibling;

		// setting the valid or invalid state
		if (target.value.trim().length > 0) {
			errorTag.classList.add('hide');
			setValid(true);
		}
		setInput(target.value);
	};

	const formHandler = e => {
		e.preventDefault();
		errorTag = e.target.children[0].children[2];
		increCount(currCount + 1); // incrementing the count by 1

		const courseData = {
			title: input,
			id: `id${currCount}`,
		};
		// const test = input.slice(3);
		// if (test.includes(' ')) {
		// 	console.log('test includes space ');
		// 	setValid(true);
		// } else

		// if (input.includes(' ')) {
		// 	changeErrorText(errorTag, 'Input field contains whitespace.'); // changing the text content to give a different message
		// 	errorTag.classList.remove('hide');
		// 	setInput(''); // resetting the input field
		// 	setValid(false);
		// 	return;
		// }
		// checking if the input field is filled
		if (input.trim().length === 0) {
			errorTag.classList.remove('hide'); // displaying the error message
			changeErrorText(errorTag, `Input Field is Blank.`);
			setValid(false);
			setInput(''); // resetting the input field
			return;
		} else {
			// if input field is filled
			errorTag.classList.add('hide');
			setValid(true);
		}
		// checking if the input field contains a whitespace or an alphabet
		if (!input.match(/^[A-Za-z\s]*$/g)) {
			changeErrorText(errorTag, 'Input field contains special characters.'); // changing the text content to give a different message
			errorTag.classList.remove('hide');
			setInput(''); // resetting the input field
			setValid(false);
			return;
		}

		props.onSubmit(courseData); // adding the inputted task
		setInput(''); // setting the clearing the input value
	};
	return (
		<form onSubmit={formHandler}>
			<div className={`${styles['form-control']} ${!isValid ? styles.invalid : ''}`}>
				<label style={{ textAlign: 'center' }}>Task Manager</label>
				<input type="text" value={input} onChange={inputHandler}></input>
				<p className={`${!isValid ? styles.error : ''} ${!isValid ? '' : styles.hide}`}>
					Input field is empty.
				</p>
			</div>
			<Button text="Add Task" />
		</form>
	);
};

export default TaskInput;
