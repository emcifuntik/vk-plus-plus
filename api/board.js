

class Board {
	constructor() {
		this.execFunction = null;
	}

	addTopic(options) {
		return this.execFunction('board.addTopic', options);
	}

	closeTopic(options) {
		return this.execFunction('board.closeTopic', options);
	}

	createComment(options) {
		return this.execFunction('board.createComment', options);
	}

	deleteComment(options) {
		return this.execFunction('board.deleteComment', options);
	}

	deleteTopic(options) {
		return this.execFunction('board.deleteTopic', options);
	}

	editComment(options) {
		return this.execFunction('board.editComment', options);
	}

	editTopic(options) {
		return this.execFunction('board.editTopic', options);
	}

	fixTopic(options) {
		return this.execFunction('board.fixTopic', options);
	}

	getComments(options) {
		return this.execFunction('board.getComments', options);
	}

	getTopics(options) {
		return this.execFunction('board.getTopics', options);
	}

	openTopic(options) {
		return this.execFunction('board.openTopic', options);
	}

	restoreComment(options) {
		return this.execFunction('board.restoreComment', options);
	}

	unfixTopic(options) {
		return this.execFunction('board.unfixTopic', options);
	}
}

module.exports = Board;

