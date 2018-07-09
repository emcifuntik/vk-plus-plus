

class Stats {
	constructor() {
		this.execFunction = null;
	}

	get(options) {
		return this.execFunction('stats.get', options);
	}

	getPostReach(options) {
		return this.execFunction('stats.getPostReach', options);
	}

	trackVisitor(options) {
		return this.execFunction('stats.trackVisitor', options);
	}
}

module.exports = Stats;

