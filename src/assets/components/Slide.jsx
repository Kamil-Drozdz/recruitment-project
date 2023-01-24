import React from 'react';
import '../styles/Slide.css';
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';

function Slide() {
	const images = [image2, image1, , image3, image5, image4];
	const descriptions = [
		'Keune Blend',
		'Keune Design',
		'Keune Care',
		'Keune Sopure',
		'Keune Koloryzacja',
		'Keune Marki',
	];
	const links = ['keune-blend', 'keune-design', 'keune-care', 'keune-sopure', 'keune-koloryzacja', 'keune-marki'];

	return (
		<div className='slide-grid-container'>
			{images.map((image, index) => (
				<div key={index} className={` ${index % 2 === 1 ? 'two-cells' : ''}`}>
					<img src={image} loading='eager' alt='Slide' className='slide-grid-image'></img>
					<p className='slide-grid-text-descriptions'> {descriptions[index]}</p>
					<a href={links[index]} className='slide-grid-text'>
						odkryj serie!
					</a>
				</div>
			))}
		</div>
	);
}

export default Slide;
