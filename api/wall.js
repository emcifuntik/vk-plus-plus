

class Wall {
	constructor() {
		this.execFunction = null;
	}

	closeComments(options) {
		return this.execFunction('wall.closeComments', options);
	}

	createComment(options) {
		return this.execFunction('wall.createComment', options);
	}

	delete(options) {
		return this.execFunction('wall.delete', options);
	}

	deleteComment(options) {
		return this.execFunction('wall.deleteComment', options);
	}

	edit(options) {
		return this.execFunction('wall.edit', options);
	}

	editAdsStealth(options) {
		return this.execFunction('wall.editAdsStealth', options);
	}

	editComment(options) {
		return this.execFunction('wall.editComment', options);
	}

	get(options) {
		return this.execFunction('wall.get', options);
	}

	getById(options) {
		return this.execFunction('wall.getById', options);
	}

	getComments(options) {
		return this.execFunction('wall.getComments', options);
	}

	getReposts(options) {
		return this.execFunction('wall.getReposts', options);
	}

	openComments(options) {
		return this.execFunction('wall.openComments', options);
	}

	pin(options) {
		return this.execFunction('wall.pin', options);
	}

	post(options) {
		return this.execFunction('wall.post', options);
	}

	postAdsStealth(options) {
		return this.execFunction('wall.postAdsStealth', options);
	}

	reportComment(options) {
		return this.execFunction('wall.reportComment', options);
	}

	reportPost(options) {
		return this.execFunction('wall.reportPost', options);
	}

	repost(options) {
		return this.execFunction('wall.repost', options);
	}

	restore(options) {
		return this.execFunction('wall.restore', options);
	}

	restoreComment(options) {
		return this.execFunction('wall.restoreComment', options);
	}

	search(options) {
		return this.execFunction('wall.search', options);
	}

	unpin(options) {
		return this.execFunction('wall.unpin', options);
	}
}

module.exports = Wall;

