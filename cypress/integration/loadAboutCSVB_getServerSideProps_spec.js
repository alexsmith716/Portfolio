beforeEach(() => {
	cy.task('clearNock')
});

it('app fetches jsonplaceholder.typicode.com/posts?_limit=1', () => {
	cy.visit('http://localhost:3000/aboutcsvb');
	cy.get('[data-cy=posts]').children().should('not.be.empty');
});

it('confirms loadAboutCSVB getServerSideProps returns mock', () => {
	const posts = [{
		body: 'quia et suscipit\n' +
			'suscipit recusandae consequuntur expedita et cum\n' +
			'reprehenderit molestiae ut ut quas totam\n' +
			'nostrum rerum est autem sunt rem eveniet architecto'
	}];

	const pb = JSON.stringify(posts[0].body);
	const pbp = JSON.parse(pb);
	const containsPost = pbp.replace(/\n/g, ' ');

	cy.task('nock', {
		hostname: 'https://jsonplaceholder.typicode.com',
		method: 'get',
		path: '/posts?_limit=1',
		statusCode: 200,
		body: posts
	})

	cy.visit('http://localhost:3000/aboutcsvb');

	// nock.scope:jsonplaceholder.typicode.com query matching succeeded +0ms
	// nock.scope:jsonplaceholder.typicode.com matching https://jsonplaceholder.typicode.com:443/posts to GET https://jsonplaceholder.typicode.com:443/posts: true +0ms
	cy.contains('[data-cy=posts]', containsPost);
});
