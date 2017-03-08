const assert = require( 'assert' );
const theAnswer = require( '../dist/the-answer.js' );

describe( 'the-answer', () => {
	it( 'equals 42', () => {
		assert.equal( theAnswer, 42 );
	});
});