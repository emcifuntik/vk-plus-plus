

class stories {
	constructor() {
		this.execFunction = null;
	}

	banOwner(options) {
		return this.execFunction('stories.banOwner', options);
	}

	delete(options) {
		return this.execFunction('stories.delete', options);
	}

	get(options) {
		return this.execFunction('stories.get', options);
	}

	getBanned(options) {
		return this.execFunction('stories.getBanned', options);
	}

	getById(options) {
		return this.execFunction('stories.getById', options);
	}

	getPhotoUploadServer(options) {
		return this.execFunction('stories.getPhotoUploadServer', options);
	}

	getReplies(options) {
		return this.execFunction('stories.getReplies', options);
	}

	getStats(options) {
		return this.execFunction('stories.getStats', options);
	}

	getVideoUploadServer(options) {
		return this.execFunction('stories.getVideoUploadServer', options);
	}

	getViewers(options) {
		return this.execFunction('stories.getViewers', options);
	}

	hideAllReplies(options) {
		return this.execFunction('stories.hideAllReplies', options);
	}

	hideReply(options) {
		return this.execFunction('stories.hideReply', options);
	}

	unbanOwner(options) {
		return this.execFunction('stories.unbanOwner', options);
	}
}

module.exports = stories;

