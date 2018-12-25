import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionType from '../../store/actionTypes';
import {Loader, PostPreview, PostSlider, TitleSection} from '../../components';
import {PostsWrapper} from '../../wrappers';
import testImage from '../../assets/images/89722.adapt.1900.1.jpg';
import ReactPaginate from 'react-paginate';

class Home extends Component {

	state = {
		sliderPostCount: 10,
		showPerPage: window.innerWidth > 1023 ? 9 : 6,
		currentPage: 1,
		pageLoaded: false,
	};

	componentDidMount() {

		const { getPosts, postsLoaded } = this.props;

		if(!postsLoaded) {

			getPosts();
		}
	}

	handlePageClick = (data) => {

		window.scrollTo({
			top: 500,
			behavior: "smooth"
		});

		this.setState({ currentPage: data.selected + 1 });
	};

	render(){

		const { postsLoaded, posts } = this.props;

		const { sliderPostCount, showPerPage, currentPage } = this.state;

		let sliderPosts = [];

		let allPosts = [];

		if ( postsLoaded ) {

			allPosts = [...posts];

			sliderPosts = posts.slice(0 , sliderPostCount);

			allPosts.splice( 0, sliderPostCount);

			const pagesCount = Math.ceil(allPosts.length / showPerPage);

			const start_offset = ( currentPage - 1) * showPerPage;

			let start_count = 0;

			const allPostTemplate = allPosts.map( ( post , i ) => {

				if ( start_offset <= i &&  start_count < showPerPage) {

					start_count++;

					return (
							<div className="col-xs-12 col-sm-6 col-md-4" key={post.id}>
								<PostPreview
										id={post.id}
										image={testImage}
										title={post.title} />
							</div>
					)
				}

				return null;
			});

			return (
					<section className="home">
						<div className="container">

							<TitleSection title="Latest POSTS"/>

							<PostSlider posts={ sliderPosts }/>

							<TitleSection title="All POSTS"/>

							<PostsWrapper>
								{ allPostTemplate }
							</PostsWrapper>

							<ReactPaginate previousLabel={''}
														 nextLabel={''}
														 breakLabel={"..."}
														 breakClassName={"break-me"}
														 pageCount={ pagesCount }
														 marginPagesDisplayed={1}
														 pageRangeDisplayed={2}
														 onPageChange={this.handlePageClick}
														 containerClassName={"pagination"}
														 subContainerClassName={"pages pagination"}
														 activeClassName={"active"} />

						</div>
					</section>
			)
		}

		return <Loader/>;
	};
}

const mapStateToProps = state => {
	return {
		posts: state.getPosts.posts,
		postsLoaded: state.getPosts.loaded,
		postsPending: state.getPosts.pending
	}
};

const mapDispatchToProps = dispatch => {
	return {
		getPosts: () => dispatch({ type: actionType.GET_POSTS_PENDING })
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);