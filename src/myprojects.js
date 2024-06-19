import todo from './img/projects/todo.jpg';
import posts from './img/projects/posts.jpg';
import portfolio from './img/projects/portfolio.jpg';
import marvel from './img/projects/marvel.jpg';
import todomin from './img/projects/todo-min.jpg';
import postsmin from './img/projects/posts-min.jpg';
import portfoliomin from './img/projects/portfolio-min.jpg';
import marvelmin from './img/projects/marvel-min.jpg';

const projects = [
	{
		title: 'Todo',
		skills: 'React, jsonServer, JavaScript',
		img: todomin,
		imgBig: todo,
		gitHubLink: 'https://github.com/Unpluggged/todo',
	},
	{
		title: 'Informational portal',
		img: postsmin,
		imgBig: posts,
		skills: 'React, TypeScript, React-router',
		gitHubLink: 'https://github.com/Unpluggged/posts',
	},
	{
		title: 'Portfolio',
		img: portfoliomin,
		imgBig: portfolio,
		skills: 'React, React-router, JavaScript',
		// gitHubLink: 'https://github.com',
	},
	{
		title: 'Marvel',
		img: marvelmin,
		imgBig: marvel,
		skills: 'React, JavaSctipt, Sass',
		gitHubLink: 'https://github.com/Unpluggged/marvel',
	},
];

export {projects}