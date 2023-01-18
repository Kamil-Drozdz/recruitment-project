import React from 'react';
import '../styles/Header.css';
import Dropdown from './Dropdown';

function Header() {
	return (
		<header className='header-container '>
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
	);
}

export default Header;
