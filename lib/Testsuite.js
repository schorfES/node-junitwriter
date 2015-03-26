var
	merge = require('merge'),
	dateformat = require('dateformat'),

	Node = require('./Node'),
	Testbase = require('./Testbase'),
	Testcase = require('./Testcase'),
	Properties = require('./Properties'),
	Notification = require('./Notification'),

	TIMEFORMAT_ISO_8601 = 'UTC:yyyy-mm-dd\'T\'HH:MM:ss'
;

function Testsuite(name, parent, options) {
	if (typeof name !== 'string') {
		throw new Error('A testsuite requires a name');
	}

	if (!(parent instanceof Node)) {
		throw new Error('A testsuite requires a parent node');
	}

	options = options || {};

	this._id = options.id || 0;
	this._parent = parent;
	this._skipped = null;
	this._properties = null;
	this._testcases = [];
	this._errors = [];
	this._failures = [];

	Testbase.call(this, 'testsuite', this._parent);

	// Define name and initial amount of tests attribute...
	this.setName(name);
	this.node.attribute('tests', 0);

	if (options.showId) {
		this.showId();
	}
}

Testsuite.prototype = Object.create(Testbase.prototype);
merge(Testsuite.prototype, {

	addTestcase: function(name, classname) {
		var testcase = new Testcase(this, name, classname);
		this._testcases.push(testcase);

		this.incTests();

		return testcase;
	},

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

	setSkipped: function(skipped) {
		if (skipped) {
			if (this.isSkipped()) {
				return;
			}

			this._skipped = new Node('skipped', this);
		} else if (this._skipped) {
			this._skipped.destroy();
			this._skipped = null;
		}
	},

	isSkipped: function() {
		return !!this._skipped;
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
	},

	addError: function(message, type) {
		var error = new Notification('error', this, message, type);
		this._errors.push(error);
	},

	addFailure: function(message, type) {
		var failure = new Notification('failure', this, message, type);
		this._failures.push(failure);
	}

});

module.exports = Testsuite;
