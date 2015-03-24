var
	merge = require('merge'),

	Testbase = require('./Testbase'),
	Testsuite = require('./Testsuite')
;

function Testsuites() {
	this._suites = [];
	this._showIds = false;
	Testbase.call(this, null, 'testsuites');
}

merge(Testsuites.prototype, Testbase.prototype, {

	addTestsuite: function() {
		var suite = new Testsuite({
			parent: this,
			id: this._suites.length,
			showId: this._showIds
		});
		this._suites.push(suite);

		return suite;
	},

	showIds: function() {
		this._showIds = true;
		this._suites.forEach(function(suite) {
			suite.showId();
		});
	},

	hideIds: function() {
		this._showIds = false;
		this._suites.forEach(function(suite) {
			suite.hideId();
		});
	}

});

module.exports = Testsuites;
