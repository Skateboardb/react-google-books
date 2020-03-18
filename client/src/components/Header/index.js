import React from 'react';
// import hero from '../../img/library.jpeg';
import './style.css';

// const headerStyle = {
// 	backgroundImage: `url(${hero})`,
// 	maxWidth: '100vw',
// 	height: 'calc(100vw * .25',
// 	backgroundSize: 'cover',
// 	position: 'relative'
// };

function Header() {
	return (
		<header>
			<div className="text-box">
				<h1> Google Books Search - React Style</h1>
				<p>Search for and Save Your Favorite Books!</p>
			</div>
		</header>
	);
}

export default Header;
