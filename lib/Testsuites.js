var
	merge = require('merge'),
	Base = require('./Base'),
	Testsuite = require('./Testsuite')
;

function Testsuites() {
	Base.call(this, null, 'testsuites');
}

merge(Testsuites.prototype, Base.prototype, {

	addTestsuite: function() {
		return new Testsuite(this);
	}

});

module.exports = Testsuites;
