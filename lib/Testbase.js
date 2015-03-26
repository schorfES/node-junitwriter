var
	merge = require('merge'),

	Node = require('./Node'),
	Text = require('./Text')
;

function Testbase(nodeName, parent) {
	Node.call(this, nodeName, parent);
}

Testbase.prototype = Object.create(Node.prototype);
merge(Testbase.prototype, {

	incAttr: function(attr, amount) {
		var
			name = '_attr_' + attr,
			count = (this[name] || 0) + (amount || 1)
		;

		this[name] = count;
		this.node.attribute(attr, count);
		return this;
	},

	incDisabled: function(amount) {
		return this.incAttr('disabled', amount);
	},

	incErrors: function(amount) {
		return this.incAttr('errors', amount);
	},

	incFailures: function(amount) {
		return this.incAttr('failures', amount);
	},

	incTests: function(amount) {
		return this.incAttr('tests', amount);
	},

	setTime: function(seconds) {
		this.node.attribute('time', seconds);
	},

	setName: function(name) {
		this.node.attribute('name', name);
	},

	setSystemOut: function(out) {
		if (!this._systemOut) {
			this._systemOut = new Text('system-out', this, out);
		} else {
			this._systemOut.setText(out);
		}
	},

	setSystemError: function(err) {
		if (!this._systemError) {
			this._systemError = new Text('system-err', this, err);
		} else {
			this._systemError.setText(err);
		}
	},

	toString: function() {
		return this.node.toString();
	}

});

module.exports = Testbase;
