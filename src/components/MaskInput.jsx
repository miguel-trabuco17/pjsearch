import styles from '../styles/components/MaskInput.module.css';
import MaskedInput from 'react-input-mask';

export default function MaskInput() {
	return (
		<div>
			<div>
				<MaskedInput/>
				<button>Pesquisar</button>
			</div>
			<button>Pesquisarr</button>
		</div>
	);
}
