import React from 'react';
import testImage from '../../assets/images/11.jpg';

export const FullPost = props => {
	const { post } = props;

	return (
			<div className="post__wrapper">
				<div className="post__image">
					<img src={testImage} alt="testImage"/>
				</div>

				<div className="post__text">
					<h2 className="post__title"> { post.title } </h2>
					<p className="post__author">
						author:
						<span>{ post.userId === 1 ? 'ADMIN' : 'GUEST' }</span>
					</p>
					<div className="post__body" dangerouslySetInnerHTML={{__html: post.body}} />
				</div>
				<div className="clearfix" />
			</div>
	)
};
