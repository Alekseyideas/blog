import React from 'react';
import Slider from 'react-slick';
import testImage from '../../assets/images/11.jpg';
import { PostPreview } from '..';

const PostSlider = props => {

	const { posts } = props;

	const settings = {
		dots: false,
		infinite: true,
		speed: 700,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				}

			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false
				}

			}
		]
	};

	const slides = posts.map( post => {

		const { id, title } = post;
		return <PostPreview id={id}
												key={id}
												image={ testImage }
												title={title} />;
	});


	return (
			<Slider {...settings} className="postSlider">
				{slides}
			</Slider>
	)
};

export { PostSlider };