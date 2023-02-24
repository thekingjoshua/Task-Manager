import styles from './Button.module.css';
const Button = props => {
	return (
		<button className={styles.button} onClick={props.log}>
			{props.text}
		</button>
	);
};

export default Button;
