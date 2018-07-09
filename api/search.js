

class Search {
	constructor() {
		this.execFunction = null;
	}

	getHints(options) {
		return this.execFunction('search.getHints', options);
	}
}

module.exports = Search;

