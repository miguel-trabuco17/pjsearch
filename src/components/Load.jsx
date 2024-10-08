import styles from '../styles/components/Load.module.css';

export default function MyComponent() {
	return (
		<div className={styles.screen}>
			<svg className={styles.svg} viewBox="25 25 50 50">
				<circle className={styles.circle} r="20" cy="50" cx="50"></circle>
			</svg>
		</div>
	);
}
