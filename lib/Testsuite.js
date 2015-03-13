var
	merge = require('merge'),
	Base = require('./Base'),
	Testsuites = require('./Testsuites')
;

function Testsuite(parent) {
	this._parent = parent;
	Base.call(this, parent.node, 'testsuite');
}

merge(Testsuite.prototype, Base.prototype, {

	incDisabled: function() {
		// Overwrite this function to increase the parents amount...
		this._parent.incDisabled.apply(this._parent, arguments);
		return Base.prototype.incDisabled.apply(this, arguments);
	},

	incErrors: function() {
		// Overwrite this function to increase the parents amount...
		this._parent.incErrors.apply(this._parent, arguments);
		return Base.prototype.incErrors.apply(this, arguments);
	},

	incFailures: function() {
		// Overwrite this function to increase the parents amount...
		this._parent.incFailures.apply(this._parent, arguments);
		return Base.prototype.incFailures.apply(this, arguments);
	},

	incTests: function() {
		// Overwrite this function to increase the parents amount...
		this._parent.incTests.apply(this._parent, arguments);
		return Base.prototype.incTests.apply(this, arguments);
	}

});

module.exports = Testsuite;
