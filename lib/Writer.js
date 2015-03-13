var
	fs = require('fs'),
	merge = require('merge'),
	builder = require('xmlbuilder'),

	Testsuites = require('./Testsuites')
;

// Format documentation @ http://llg.cubic.org/docs/junit/

function Writer() {
	this._root = new Testsuites();
}

merge(Writer.prototype, {

	getTestsuites: function() {
		return this._root;
	},

	addTestsuite: function() {
		return this._root.addTestsuite();
	},

	toString: function() {
		return '<?xml version="1.0" encoding="UTF-8"?>\n' + this._root.toString();
	},

	save: function(path, callback) {
		var self = this;

		fs.writeFile(path, this.toString(), function(error) {
			if (typeof callback === 'function') {
				callback(error, self);
			}
		});
	}

});

module.exports = Writer;
