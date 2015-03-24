var
	merge = require('merge'),
	dateformat = require('dateformat'),

	Testbase = require('./Testbase'),
	Properties = require('./Properties'),

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
	this._properties = null;
	Testbase.call(this, 'testsuite', this._parent);

	if (options.showId) {
		this.showId();
	}
}

Testsuite.prototype = Object.create(Testbase.prototype);
merge(Testsuite.prototype, {

	incDisabled: function() {
		// Overwrite this function to increase the parents amount...
		this._parent.incDisabled.apply(this._parent, arguments);
		return Testbase.prototype.incDisabled.apply(this, arguments);
	},

	incErrors: function() {
		// Overwrite this function to increase the parents amount...
		this._parent.incErrors.apply(this._parent, arguments);
		return Testbase.prototype.incErrors.apply(this, arguments);
	},

	incFailures: function() {
		// Overwrite this function to increase the parents amount...
		this._parent.incFailures.apply(this._parent, arguments);
		return Testbase.prototype.incFailures.apply(this, arguments);
	},

	incTests: function() {
		// Overwrite this function to increase the parents amount...
		this._parent.incTests.apply(this._parent, arguments);
		return Testbase.prototype.incTests.apply(this, arguments);
	},

	setTimestamp: function(timestamp) {
		if (!(timestamp instanceof Date)) {
			throw new Error('Timestamp must be an instance of Date');
		}

		this.node.attribute('timestamp', dateformat(timestamp, TIMEFORMAT_ISO_8601));
	},

	setHostname: function(hostname) {
		this.node.attribute('hostname', hostname);
	},

	setPackage: function(package) {
		this.node.attribute('package', package);
	},

	showId: function() {
		this.node.attribute('id', this._id);
	},

	hideId: function() {
		this.node.removeAttribute('id');
	},

	addProperty: function(name, value) {
		if (!this._properties) {
			this._properties = new Properties(this);
		}

		this._properties.add(name, value);
	},

	removeProperty: function(name) {
		if (!this._properties) {
			return;
		}

		this._properties.remove(name);

		if (this._properties.count() === 0) {
			this._properties.destroy();
			this._properties = null;
		}
	},

	updateProperty: function(name, value) {
		if (!this._properties) {
			return;
		}

		this._properties.update(name, value);
	}

});

module.exports = Testsuite;
