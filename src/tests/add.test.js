const add = (a,b) => a+b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers',() => {
	const res=add(3,4);

	expect(res).toBe(7);
})
test('should greet',() => {
	const greet=generateGreeting('Edge');
	expect(greet).toBe('Hello Edge!')
})