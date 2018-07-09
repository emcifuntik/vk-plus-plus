

class Leads {
	constructor() {
		this.execFunction = null;
	}

	checkUser(options) {
		return this.execFunction('leads.checkUser', options);
	}

	complete(options) {
		return this.execFunction('leads.complete', options);
	}

	getStats(options) {
		return this.execFunction('leads.getStats', options);
	}

	getUsers(options) {
		return this.execFunction('leads.getUsers', options);
	}

	metricHit(options) {
		return this.execFunction('leads.metricHit', options);
	}

	start(options) {
		return this.execFunction('leads.start', options);
	}
}

module.exports = Leads;

