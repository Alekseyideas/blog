import React from 'react';
import {Link} from 'react-router-dom';

const PostPreview = props => {

	const { id, title, image } = props;

	return (
			<Link to={`/post/${id}`}
						className={`post__item`}>
				<span
						style={{ backgroundImage: `url('${image}')`}}
						className="postPreview" >

					<span className="postPreview__wrapper">
						<span className="postPreview__title">
							{title}
						</span>
					</span>
				</span>
			</Link>
	);
};

export { PostPreview };