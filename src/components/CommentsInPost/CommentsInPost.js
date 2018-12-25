import React from 'react';
import {Comment} from '..';

export const CommentsInPost = props => {
	const { comments } = props;



	if (comments.length>0 )
		return <div className="commentsInPost">
			{ comments.map( comment => {
				const { id, name, email, body} = comment;
				return <Comment key={id} userName={name} userEmail={email} message={body}/>
			})}
		</div>;

	return <div className="commentsInPost">
		<p>This post does not have comments</p>
	</div>
};
