var
	Node = require(process.cwd() + '/lib/Node')
;

exports['The Node'] = {
	'should create a xml node': function(test) {
		var node = new Node('foo');

		test.equals(node.toString(), '<foo/>', 'The node was not the expected one');
		test.done();
	},

	'should concat nodes': function(test) {
		var
			root = new Node('foo'),
			child = new Node('bar', root)
		;

		test.equals(root.toString(), '<foo><bar/></foo>', 'The node was not the expected one');
		test.equals(child.toString(), '<bar/>', 'The node was not the expected one');
		test.done();
	}
};
