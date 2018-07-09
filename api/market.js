

class Market {
	constructor() {
		this.execFunction = null;
	}

	add(options) {
		return this.execFunction('market.add', options);
	}

	addAlbum(options) {
		return this.execFunction('market.addAlbum', options);
	}

	addToAlbum(options) {
		return this.execFunction('market.addToAlbum', options);
	}

	createComment(options) {
		return this.execFunction('market.createComment', options);
	}

	delete(options) {
		return this.execFunction('market.delete', options);
	}

	deleteAlbum(options) {
		return this.execFunction('market.deleteAlbum', options);
	}

	deleteComment(options) {
		return this.execFunction('market.deleteComment', options);
	}

	edit(options) {
		return this.execFunction('market.edit', options);
	}

	editAlbum(options) {
		return this.execFunction('market.editAlbum', options);
	}

	editComment(options) {
		return this.execFunction('market.editComment', options);
	}

	get(options) {
		return this.execFunction('market.get', options);
	}

	getAlbumById(options) {
		return this.execFunction('market.getAlbumById', options);
	}

	getAlbums(options) {
		return this.execFunction('market.getAlbums', options);
	}

	getById(options) {
		return this.execFunction('market.getById', options);
	}

	getCategories(options) {
		return this.execFunction('market.getCategories', options);
	}

	getComments(options) {
		return this.execFunction('market.getComments', options);
	}

	removeFromAlbum(options) {
		return this.execFunction('market.removeFromAlbum', options);
	}

	reorderAlbums(options) {
		return this.execFunction('market.reorderAlbums', options);
	}

	reorderItems(options) {
		return this.execFunction('market.reorderItems', options);
	}

	report(options) {
		return this.execFunction('market.report', options);
	}

	reportComment(options) {
		return this.execFunction('market.reportComment', options);
	}

	restore(options) {
		return this.execFunction('market.restore', options);
	}

	restoreComment(options) {
		return this.execFunction('market.restoreComment', options);
	}

	search(options) {
		return this.execFunction('market.search', options);
	}
}

module.exports = Market;

