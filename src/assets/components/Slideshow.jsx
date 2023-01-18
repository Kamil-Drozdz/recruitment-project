import React, { useState, useEffect } from 'react';
import '../styles/Slideshow.css';
import { CSSTransition } from 'react-transition-group';
import image1 from '../../assets/images/image1slider.jpg';
import image2 from '../../assets/images/image2slider.jpg';
import Header from './Header';

function Slideshow() {
	const slides = [image1, image2];
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentColor, setCurrentColor] = useState('black');

	useEffect(() => {
		setCurrentColor(currentSlide === 0 ? 'black' : 'white');
	}, [currentSlide]);

	const handlePrevious = () => {
		setCurrentSlide((currentSlide + slides.length - 1) % slides.length);
	};

	const handleNext = () => {
		setCurrentSlide((currentSlide + 1) % slides.length);
	};

	return (
		<div className={`slideshow-container ${currentColor}`}>
			<Header />
			<CSSTransition key={currentSlide} timeout={{ enter: 500, exit: 300 }} classNames='fade'>
				<div>
					<img src={slides[currentSlide]} alt='Slide' className='slideshow-image' />
					<div className={`slide-text ${currentColor}`}>
						{currentSlide === 0 ? 'Bez kompromisu Keune design' : 'Takie jak lubisz Keune koloryzacja'}
					</div>
				</div>
			</CSSTransition>

			<div className={`slideshow-controls ${currentColor}`}>
				<button onClick={handlePrevious}>{'<'}</button>
				<button onClick={handleNext}>{'>'}</button>
			</div>
		</div>
	);
}

export default Slideshow;
