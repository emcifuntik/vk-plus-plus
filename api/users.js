

class Users {
	constructor() {
		this.execFunction = null;
	}

	get(options) {
		return this.execFunction('users.get', options);
	}

	getFollowers(options) {
		return this.execFunction('users.getFollowers', options);
	}

	getNearby(options) {
		return this.execFunction('users.getNearby', options);
	}

	getSubscriptions(options) {
		return this.execFunction('users.getSubscriptions', options);
	}

	isAppUser(options) {
		return this.execFunction('users.isAppUser', options);
	}

	report(options) {
		return this.execFunction('users.report', options);
	}

	search(options) {
		return this.execFunction('users.search', options);
	}
}

module.exports = Users;

