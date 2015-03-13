var
	merge = require('merge'),
	builder = require('xmlbuilder')
;

function Base(parent, nodeName) {
	var node;

	if (!parent) {
		node = builder.create(nodeName);
		node.dec('1.0', 'UTF-8', true);
	} else {
		node = parent.ele(nodeName);
	}

	this.node = node;
}

merge(Base.prototype, {

	incAttr: function(attr, amount) {
		var
			name = '_attr_' + attr,
			count = (this[name] || 0) + (amount || 1)
		;

		this[name] = count;
		this.node.att(attr, count);
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
		this.node.att('time', seconds);
	},

	setName: function(name) {
		this.node.att('name', name);
	},

	toString: function() {
		return this.node.toString();
	}

});

module.exports = Base;
