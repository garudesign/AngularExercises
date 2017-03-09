var latins = require("./latins");
var regexp = new RegExp("(" + Object.keys(latins).join("|") + ")", "g");
var phpfn = require("phpfn");
var trim = phpfn("trim");

function replaceFunc(oldChar) {
	var result = latins[oldChar];
	return result;
}

module.exports = function(s) {
	s = s.replace(regexp, replaceFunc);
	s = s.replace(/[^A-Za-z0-9 ]/g, "");
	s = trim(s);
	s = s.replace(/ +/g, "-");
	return s.toLowerCase();
};