import CourseItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

const TaskList = props => {
	return (
		<ul className={styles['goal-list']}>
			{props.items.map(item => (
				<CourseItem
					title={item.title}
					key={item.id}
					keyId={item.id}
					onDelete={props.onDeleteItem}
					list={props.items}
				/>
			))}
		</ul>
	);
};
export default TaskList;
