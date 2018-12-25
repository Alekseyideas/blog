import {navMenu} from '../../config';
import {NavLink} from 'react-router-dom';
import React from 'react';

const Menu = () => {

	const removeActiveClasses = () => {
		const menuBtn = document.querySelector('.header__mobile-menu');
		const nav = document.querySelector('.header__nav');
		menuBtn.classList.remove('active');
		nav.classList.remove('active');
	};

	return Object.keys(navMenu).map( (key,i) => {
		return 	<NavLink key={i}
										 exact
										 to={ navMenu[key].link }
										 onClick={removeActiveClasses}> { navMenu[key].title } </NavLink>
	});
};

export { Menu };