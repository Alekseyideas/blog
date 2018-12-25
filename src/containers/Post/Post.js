import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actionTypes';
import {CommentsInPost, FullPost, Loader, TitleSection} from '../../components';

class Post extends Component {

	componentDidMount() {
		const {match, getPost, getComments} = this.props;

		getPost(match.params.id);
		getComments(match.params.id);


	}

	render(){

		const { postPending, post, postError, commentsLoaded, comments, commentsError } = this.props;

		if( !postPending && !postError ) {

			return (
					<section className="post">
						<div className="container">
							<FullPost post={post}/>

							<TitleSection title={`This Post Has ${comments.length} Comment${comments.length!==1?'s':''}`}/>
							{ commentsLoaded && !commentsError ? <CommentsInPost comments={ comments }/> : <Loader/> }
							{ commentsError ? <p> Sorry! Comments has error! Please reload your page or try latter </p> : null }
						</div>
					</section>
			)
		}

		if( postError )
			return <div className="container">
				<p>Sorry! This post has Error! Please return on Home page and try again or reload your page</p>
			</div>;

		return (
				<Loader/>
		)
	};
}

const mapStateToProps = state => {
	return {
		post: state.getPost.post,
		postPending: state.getPost.pending,
		postError: state.getPost.error,
		comments: state.getComments.comments,
		commentsLoaded: state.getComments.loaded,
		commentsError: state.getComments.error,
	}
};

const mapDispatchToProps = dispatch => {
	return {
		getPost: (id) => dispatch({ type: actionType.GET_POST_PENDING, id }),
		getComments: (postId) => dispatch({ type: actionType.GET_COMMENTS_PENDING, postId }),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);