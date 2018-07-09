

class Friends {
	constructor() {
		this.execFunction = null;
	}

	add(options) {
		return this.execFunction('friends.add', options);
	}

	addList(options) {
		return this.execFunction('friends.addList', options);
	}

	areFriends(options) {
		return this.execFunction('friends.areFriends', options);
	}

	delete(options) {
		return this.execFunction('friends.delete', options);
	}

	deleteAllRequests(options) {
		return this.execFunction('friends.deleteAllRequests', options);
	}

	deleteList(options) {
		return this.execFunction('friends.deleteList', options);
	}

	edit(options) {
		return this.execFunction('friends.edit', options);
	}

	editList(options) {
		return this.execFunction('friends.editList', options);
	}

	get(options) {
		return this.execFunction('friends.get', options);
	}

	getAppUsers(options) {
		return this.execFunction('friends.getAppUsers', options);
	}

	getByPhones(options) {
		return this.execFunction('friends.getByPhones', options);
	}

	getLists(options) {
		return this.execFunction('friends.getLists', options);
	}

	getMutual(options) {
		return this.execFunction('friends.getMutual', options);
	}

	getOnline(options) {
		return this.execFunction('friends.getOnline', options);
	}

	getRecent(options) {
		return this.execFunction('friends.getRecent', options);
	}

	getRequests(options) {
		return this.execFunction('friends.getRequests', options);
	}

	getSuggestions(options) {
		return this.execFunction('friends.getSuggestions', options);
	}

	search(options) {
		return this.execFunction('friends.search', options);
	}
}

module.exports = Friends;

