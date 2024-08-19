import styles from './styles/App.module.css';
import Navbar from './components/Navbar.jsx';
import MainContent from './components/MainContent.jsx';

export default function App() {
	return (
		<div className={styles.screen}>
			<Navbar />
			<MainContent />
		</div>
	);
}
