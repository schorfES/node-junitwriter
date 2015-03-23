var
	merge = require('merge'),
	dateformat = require('dateformat'),

	Base = require('./Base'),

	TIMEFORMAT_ISO_8601 = 'UTC:yyyy-mm-dd\'T\'HH:MM:ss'
;

function Testsuite(options) {
	if (!options) {
		throw new Error('Pass options into this testsuite');
	}

	if (!options.parent || !options.parent.node) {
		throw new Error('Pass a parent testsuites element into this testsuite');
	}

	this._id = options.id || 0;
	this._parent = options.parent;
	Base.call(this, this._parent.node, 'testsuite');

	if (options.showId) {
		this.showId();
	}
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
	},

	setTimestamp: function(timestamp) {
		if (!(timestamp instanceof Date)) {
			throw new Error('Timestamp must be an instance of Date');
		}

		this.node.att('timestamp', dateformat(timestamp, TIMEFORMAT_ISO_8601));
	},

	setHostname: function(hostname) {
		this.node.att('hostname', hostname);
	},

	setPackage: function(package) {
		this.node.att('package', package);
	},

	showId: function() {
		this.node.att('id', this._id);
	},

	hideId: function() {
		this.node.removeAttribute('id');
	}

});

module.exports = Testsuite;
