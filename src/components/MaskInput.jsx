import styles from '../styles/components/MaskInput.module.css';
import MaskedInput from 'react-input-mask';

export default function MaskInput() {
	return (
		<div className={styles.submitArea}>
			<div className={styles.inputBox}>
				<MaskedInput
					className={styles.input}
					placeholder='00.000.000/0000-00'
					mask='99.999.999/9999-99'
				/>
				<button className={styles.submitButton}>Pesquisar</button>
			</div>
			<button className={styles.mobileSubmitButton}>Pesquisar</button>
		</div>
	);
}
