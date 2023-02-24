import styles from './Card.module.css';
const Card = props => {
	return <div id={styles['goal-form']}>{props.children}</div>;
};
export default Card;

//goal-form