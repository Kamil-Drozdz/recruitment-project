import React, { useState } from 'react';
import '../styles/Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown() {
	const options = ['Produkty', 'Makijaże', 'Inne'];
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(options[0]);

	const handleClick = () => {
		setOpen(!open);
	};

	const handleSelect = option => {
		setSelected(option);
		setOpen(false);
	};

	return (
		<div className='dropdown-container'>
			<div className='dropdown-selected' onClick={handleClick}>
				{selected} <FontAwesomeIcon icon={faArrowDown} />
			</div>
			{open && (
				<div className='dropdown-options'>
					{options.map((option, index) => (
						<a key={index} className='dropdown-option' onClick={() => handleSelect(option)}>
							{option}
						</a>
					))}
				</div>
			)}
		</div>
	);
}

export default Dropdown;
