var
	merge = require('merge'),
	Node = require('./Node')
;

function Testcase(parent, name, classname) {
	if (typeof name !== 'string') {
		throw new Error('Pass a name to the testcase');
	}

	if (typeof classname !== 'string') {
		throw new Error('Pass a classname to the testcase');
	}

	Node.call(this, 'testcase', parent);
	this.setName(name);
	this.setClassname(classname);
}

Testcase.prototype = Object.create(Node.prototype);
merge(Testcase.prototype, {

	setName: function(name) {
		this.node.attribute('name', name);
	},

	setClassname: function(classname) {
		this.node.attribute('classname', classname);
	},

	setAssertions: function(assertions) {
		if (typeof assertions !== 'number') {
			throw new Error('Assertions must be type of number');
		}

		this.node.attribute('assertions', assertions);
	},

	setTime: function(seconds) {
		if (typeof seconds !== 'number') {
			throw new Error('Time must be type of number (in seconds)');
		}

		this.node.attribute('time', seconds);
	}

});

module.exports = Testcase;
