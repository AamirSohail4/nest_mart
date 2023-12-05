import { useState, useEffect } from 'react';
import './slider2.css';

import slid2 from '../../assets/images/sample-slider.jpg';
import slid1 from '../../assets/images/sample-slider-2.jpg';

export const Slider2 = () => {
	const sliderimages = [slid1, slid2];
	const [animatedImage, setAnimatedImage] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setAnimatedImage((prevIndex) => {
				const nextIndex = prevIndex + 1;
				return nextIndex < sliderimages.length ? nextIndex : 0;
			});
		}, 4000);

		return () => {
			clearInterval(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className='slider-image-wrap'>
				<img src={sliderimages[animatedImage]} alt='image' />
			</div>
		</>
	);
};
