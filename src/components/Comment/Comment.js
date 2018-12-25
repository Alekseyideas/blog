import React from 'react';

export const Comment = props => {

	const { userImg, userName, userEmail, message } = props;

	return <div className="comment">
		<div className="comment__user-img" style={ userImg ? { backgroundImage: `url(${userImg})` } : null }/>
		<div className="comment__info">
			<span className="comment__user-name" >{userName}</span>
			<span className="comment__user-email" >{userEmail}</span>
			<p className="comment__text" > { message } </p>
		</div>
	</div>
};