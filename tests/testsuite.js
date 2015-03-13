var
	Writer = require(process.cwd() + '/lib/Writer'),
	Testsuite = require(process.cwd() + '/lib/Testsuite')
;

exports['The Testsuite'] = {
	'should increase disabled amount': function(test) {
		var
			writer = new Writer(),
			suites = writer.getTestsuites(),
			suite = suites.addTestsuite()
		;

		suite.incDisabled();
		test.equal(
			suite.toString(),
			'<testsuite disabled="1"/>',
			'The initial disabled amount is not correct'
		);

		suite.incDisabled(2);
		test.equal(
			suite.toString(),
			'<testsuite disabled="3"/>',
			'The increased disabled amount is not correct'
		);

		test.done();
	},

	'should increase errors amount': function(test) {
		var
			writer = new Writer(),
			suites = writer.getTestsuites(),
			suite = suites.addTestsuite()
		;

		suite.incErrors();
		test.equal(
			suite.toString(),
			'<testsuite errors="1"/>',
			'The initial errors amount is not correct'
		);

		suite.incErrors(2);
		test.equal(
			suite.toString(),
			'<testsuite errors="3"/>',
			'The increased errors amount is not correct'
		);

		test.done();
	},

	'should increase failures amount': function(test) {
		var
			writer = new Writer(),
			suites = writer.getTestsuites(),
			suite = suites.addTestsuite()
		;

		suite.incFailures();
		test.equal(
			suite.toString(),
			'<testsuite failures="1"/>',
			'The initial failures amount is not correct'
		);

		suite.incFailures(2);
		test.equal(
			suite.toString(),
			'<testsuite failures="3"/>',
			'The increased failures amount is not correct'
		);

		test.done();
	},

	'should increase tests amount': function(test) {
		var
			writer = new Writer(),
			suites = writer.getTestsuites(),
			suite = suites.addTestsuite()
		;

		suite.incTests();
		test.equal(
			suite.toString(),
			'<testsuite tests="1"/>',
			'The initial tests amount is not correct'
		);

		suite.incTests(2);
		test.equal(
			suite.toString(),
			'<testsuite tests="3"/>',
			'The increased tests amount is not correct'
		);

		test.done();
	},

	'should set execution time in seconds of testsuite': function(test) {
		var
			writer = new Writer(),
			suites = writer.getTestsuites(),
			suite = suites.addTestsuite()
		;

		suite.setTime(5);
		test.equal(
			suite.toString(),
			'<testsuite time="5"/>',
			'The given time is not correct'
		);

		suite.setTime(200);
		test.equal(
			suite.toString(),
			'<testsuite time="200"/>',
			'The given time was not overwritten'
		);

		test.done();
	},

	'should set name': function(test) {
		var
			writer = new Writer(),
			suites = writer.getTestsuites(),
			suite = suites.addTestsuite()
		;

		suite.setName('foo');
		test.equal(
			suite.toString(),
			'<testsuite name="foo"/>',
			'The given name is not correct'
		);

		suite.setName('foobarbaz');
		test.equal(
			suite.toString(),
			'<testsuite name="foobarbaz"/>',
			'The given name was not overwritten'
		);

		test.done();
	}
};
