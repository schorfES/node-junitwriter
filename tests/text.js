var
	Node = require(process.cwd() + '/lib/Node'),
	Text = require(process.cwd() + '/lib/Text')
;

exports['The Text'] = {
	'should create a xml node': function(test) {
		var
			node = new Node('root'),
			text
		;

		text = new Text('text', null, 'foo bar baz');
		test.equals(
			text.toString(),
			'<text>foo bar baz</text>',
			'The text was not the expected one'
		);

		text = new Text('text', node, 'foo bar baz');
		test.equals(
			node.toString(),
			'<root><text>foo bar baz</text></root>',
			'The text was not the expected one nested in the root node'
		);
		test.done();
	},

	'should append the text': function(test) {
		var text = new Text('text', null, 'foo bar');

		text.appendText(' baz');
		test.equals(
			text.toString(),
			'<text>foo bar baz</text>',
			'The text was not the expected one'
		);
		test.done();
	},

	'should update the text': function(test) {
		var text = new Text('text', null, 'foo bar');

		text.setText('baz');
		test.equals(
			text.toString(),
			'<text>baz</text>',
			'The text was not the expected one'
		);
		test.done();
	}
};
