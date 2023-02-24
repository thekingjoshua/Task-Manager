import styles from './TaskItem.module.css';

const TaskItem = props => {
	function deleteItem() {
		props.onDelete(props.keyId);
	}
	return (
		<div>
			<li className={styles['goal-item']}>
				{props.title}
				<button className={styles.delete} onClick={deleteItem}>
					&#10003;
				</button>
			</li>
		</div>
	);
};

export default TaskItem;
