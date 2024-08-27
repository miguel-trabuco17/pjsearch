import styles from '../styles/components/MaskInput.module.css';
import MaskedInput from 'react-input-mask';
import { useState } from 'react';
import axios from 'axios';
import Load from './Load';

export default function MaskInput() {

	const [cnpj, setCnpj] = useState('');
	const [formatedCnpj, setFormatedCnpj] = useState('');
	const [buttonState, setButtonState] = useState(false);
	const [loadState, setLoadState] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [cnpjData, setCnpjData] = useState({});

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

	const formatResponseData = (data) => {
		Object.keys(data).forEach((key) => {

			const value = data[key];

			if (value === null || value === '') {
				data[key] = "n/a";
			}

			if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
				const [year, month, day] = value.split('-');
				data[key] = `${day}/${month}/${year}`;
			}
		});

		return data
	}

	const handleSubmit = () => {
		setLoadState(true);
		setErrorMessage('');
		axios.get(`https://minhareceita.org/${formatedCnpj}`).then( response => {
			setLoadState(false);
			const formatedData = formatResponseData(response.data);
			setCnpjData(formatedData);
		}).catch(error => {
			console.log(error);
			setLoadState(false);
			setErrorMessage(error.response.data.message);
		});
	};

	if (loadState) return <Load />;

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
				<button className={styles.submitButton} disabled={!buttonState} onClick={handleSubmit}>Pesquisar</button>
			</div>
			<button className={styles.mobileSubmitButton} disabled={!buttonState} onClick={handleSubmit}>Pesquisar</button>
			<p className={styles.errorMessage}>{errorMessage}</p>
		</div>
	);
}
