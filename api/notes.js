

class Notes {
	constructor() {
		this.execFunction = null;
	}

	add(options) {
		return this.execFunction('notes.add', options);
	}

	createComment(options) {
		return this.execFunction('notes.createComment', options);
	}

	delete(options) {
		return this.execFunction('notes.delete', options);
	}

	deleteComment(options) {
		return this.execFunction('notes.deleteComment', options);
	}

	edit(options) {
		return this.execFunction('notes.edit', options);
	}

	editComment(options) {
		return this.execFunction('notes.editComment', options);
	}

	get(options) {
		return this.execFunction('notes.get', options);
	}

	getById(options) {
		return this.execFunction('notes.getById', options);
	}

	getComments(options) {
		return this.execFunction('notes.getComments', options);
	}

	restoreComment(options) {
		return this.execFunction('notes.restoreComment', options);
	}
}

module.exports = Notes;

