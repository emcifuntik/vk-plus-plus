

class Newsfeed {
	constructor() {
		this.execFunction = null;
	}

	addBan(options) {
		return this.execFunction('newsfeed.addBan', options);
	}

	deleteBan(options) {
		return this.execFunction('newsfeed.deleteBan', options);
	}

	deleteList(options) {
		return this.execFunction('newsfeed.deleteList', options);
	}

	get(options) {
		return this.execFunction('newsfeed.get', options);
	}

	getBanned(options) {
		return this.execFunction('newsfeed.getBanned', options);
	}

	getComments(options) {
		return this.execFunction('newsfeed.getComments', options);
	}

	getLists(options) {
		return this.execFunction('newsfeed.getLists', options);
	}

	getMentions(options) {
		return this.execFunction('newsfeed.getMentions', options);
	}

	getRecommended(options) {
		return this.execFunction('newsfeed.getRecommended', options);
	}

	getSuggestedSources(options) {
		return this.execFunction('newsfeed.getSuggestedSources', options);
	}

	ignoreItem(options) {
		return this.execFunction('newsfeed.ignoreItem', options);
	}

	saveList(options) {
		return this.execFunction('newsfeed.saveList', options);
	}

	search(options) {
		return this.execFunction('newsfeed.search', options);
	}

	unignoreItem(options) {
		return this.execFunction('newsfeed.unignoreItem', options);
	}

	unsubscribe(options) {
		return this.execFunction('newsfeed.unsubscribe', options);
	}
}

module.exports = Newsfeed;

