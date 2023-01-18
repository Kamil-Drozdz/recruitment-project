import React from 'react';
import '../styles/Header.css';
import Dropdown from './Dropdown';
import { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';

function Header() {
	const [isOpen, setOpen] = useState(true);

	return (
		<>
			<Hamburger toggled={isOpen} toggle={setOpen} duration={0.6} label='Menu' />
			{isOpen && (
				<header>
					<div className='logo'>Keune</div>
					<nav className='menu-container'>
						<a href='/'>Nowości</a>
						<Dropdown />
						<a href='/o-firmie'>O firmie</a>
						<a href='/salony'>Salony</a>
						<a href='/dystrybutorzy'>Dystrybutorzy</a>
						<a href='/kontakt'>Kontakt</a>
					</nav>
				</header>
			)}
		</>
	);
}

export default Header;
