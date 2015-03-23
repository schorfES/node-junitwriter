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
	},

	'should set timestamp': function(test) {
		var
			writer = new Writer(),
			suites = writer.getTestsuites(),
			suite = suites.addTestsuite(),
			date = new Date()
		;

		date.setUTCFullYear(2014);
		date.setUTCMonth(0);
		date.setUTCDate(21);
		date.setUTCHours(16);
		date.setUTCMinutes(17);
		date.setUTCSeconds(18);
		date.setUTCMilliseconds(19);

		suite.setTimestamp(date);
		test.equal(
			suite.toString(),
			'<testsuite timestamp="2014-01-21T16:17:18"/>',
			'The timestamp format is not the expeected one'
		);

		test.done();
	},

	'should fail when set timestamp without a valid date instance': function(test) {
		var
			writer = new Writer(),
			suites = writer.getTestsuites(),
			suite = suites.addTestsuite()
		;

		test.throws(
			function() {suite.setTimestamp('2014-01-21T16:17:18');},
			'Timestamp must be an instance of Date',
			'The function didn\'t throw an error when passing a string'
		);

		test.throws(
			function() {suite.setTimestamp(20140121);},
			'Timestamp must be an instance of Date',
			'The function didn\'t throw an error when passing a number'
		);

		test.done();
	},

	'should set hostname': function(test) {
		var
			writer = new Writer(),
			suites = writer.getTestsuites(),
			suite = suites.addTestsuite()
		;

		suite.setHostname('foobar.baz');
		test.equal(
			suite.toString(),
			'<testsuite hostname="foobar.baz"/>',
			'The given hostname is not correct'
		);

		suite.setHostname('foo.baz.bar');
		test.equal(
			suite.toString(),
			'<testsuite hostname="foo.baz.bar"/>',
			'The given hostname was not overwritten'
		);

		test.done();
	},

	'should set package': function(test) {
		var
			writer = new Writer(),
			suites = writer.getTestsuites(),
			suite = suites.addTestsuite()
		;

		suite.setPackage('foo.bar.baz');
		test.equal(
			suite.toString(),
			'<testsuite package="foo.bar.baz"/>',
			'The given package is not correct'
		);

		suite.setPackage('baz.bar.foo');
		test.equal(
			suite.toString(),
			'<testsuite package="baz.bar.foo"/>',
			'The given package was not overwritten'
		);

		test.done();
	}
};
