window.addEventListener('load', () => {
	document.body.classList.remove('loading');
});

let lastScroll = 0;
window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;
	const scrollDirection = currentScroll > lastScroll ? 'down' : 'up';

	
	lastScroll = currentScroll;
});
