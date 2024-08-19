import styles from '../styles/components/Nav.module.css';
import githubIcon from '../assets/github_icon.svg';

export default function Navbar() {
	return(
		<nav className={styles.navBox}>
			<h1 className={styles.logo}>PJSearch</h1>
			<a className={styles.githubLink}><img className={styles.githubIcon} src={githubIcon} alt="GitHub Icon"/></a>
		</nav>
	);
}
