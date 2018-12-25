import Home from '../containers/Home/Home';
import About from '../containers/About/About';
import NotFound from '../containers/NotFound/NotFound';
import Contact from '../containers/Contact/Contact';
import Post from '../containers/Post/Post';

export const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/contact',
		component: Contact
	},
	{
		path: '/post/:id',
		component: Post
	},
	{
		// path: '*',
		// restricted: false,
		// exact: true,
		component: NotFound
	}
];