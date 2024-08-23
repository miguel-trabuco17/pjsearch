import styles from '../styles/components/MaskInput.module.css';
import MaskedInput from 'react-input-mask';
import { useState } from 'react';

export default function MaskInput() {

	const [cnpj, setCnpj] = useState('');
	const [formatedCnpj, setFormatedCnpj] = useState('');
	const [buttonState, setButtonState] = useState(false);

	const handleInputChange = (event) => {
		const inputValue = event.target.value;
		setCnpj(inputValue);
		const formatedInputValue = inputValue.replace(/\D/g, '');
		setFormatedCnpj(formatedInputValue);
		if (formatedInputValue.length == 14) {
			setButtonState(true);
		} else {
			setButtonState(false);
		}
	};

	return (
		<div className={styles.submitArea}>
			<div className={styles.inputBox}>
				<MaskedInput
					className={styles.input}
					placeholder='00.000.000/0000-00'
					mask='99.999.999/9999-99'
					value={cnpj}
					onChange={handleInputChange}
				/>
				<button className={styles.submitButton} disabled={!buttonState}>Pesquisar</button>
			</div>
			<button className={styles.mobileSubmitButton}>Pesquisar</button>
		</div>
	);
}
