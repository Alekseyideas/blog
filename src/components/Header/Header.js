import React from 'react';
import { Link } from 'react-router-dom';
import LogoSrc from '../../assets/images/logo.svg';
import { Menu } from '../Menu/Menu';

const Header = () => {

	const removeActiveClasses = (e) => {
		const menuBtn = document.querySelector('.header__mobile-menu');
		const nav = document.querySelector('.header__nav');
		menuBtn.classList.remove('active');
		nav.classList.remove('active');
	};

	const mobileMenuHandler = () => {
		const menuBtn = document.querySelector('.header__mobile-menu');
		const nav = document.querySelector('.header__nav');

		if(menuBtn.classList.contains('active')) {
			removeActiveClasses();
		}
		else {
			menuBtn.classList.add('active');
			nav.classList.add('active');
		}
	};

	return (
			<header className="header">
				<div className="container">
					<div className="header__wrapper">

						<Link to={'/'} className="header__logo" onClick={removeActiveClasses}>
							<img src={LogoSrc} alt="main logo"/>
						</Link>

						<button className="header__mobile-menu" onClick={ mobileMenuHandler }>
							<span />
							<span />
							<span />
						</button>

						<nav className="header__nav">
							<Menu/>
						</nav>

					</div>
				</div>
			</header>
	);
};

export { Header };