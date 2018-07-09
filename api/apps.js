

class Apps {
	constructor() {
		this.execFunction = null;
	}

	deleteAppRequests(options) {
		return this.execFunction('apps.deleteAppRequests', options);
	}

	get(options) {
		return this.execFunction('apps.get', options);
	}

	getCatalog(options) {
		return this.execFunction('apps.getCatalog', options);
	}

	getFriendsList(options) {
		return this.execFunction('apps.getFriendsList', options);
	}

	getLeaderboard(options) {
		return this.execFunction('apps.getLeaderboard', options);
	}

	getScore(options) {
		return this.execFunction('apps.getScore', options);
	}

	sendRequest(options) {
		return this.execFunction('apps.sendRequest', options);
	}
}

module.exports = Apps;

