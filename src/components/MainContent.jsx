import styles from '../styles/components/MainContent.module.css';
import MaskInput from './MaskInput.jsx';

export default function MainContent() {
	return (
		<div className={styles.mainContentBox}>
			<p className={styles.text}> ENCONTRE AS INFORMAÇÕES COMPLETAS DO SEU CNPJ EM UM ÚNICO LUGAR </p>
			<MaskInput />
		</div>
	);
}
