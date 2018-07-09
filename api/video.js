

class Video {
	constructor() {
		this.execFunction = null;
	}

	add(options) {
		return this.execFunction('video.add', options);
	}

	addAlbum(options) {
		return this.execFunction('video.addAlbum', options);
	}

	addToAlbum(options) {
		return this.execFunction('video.addToAlbum', options);
	}

	createComment(options) {
		return this.execFunction('video.createComment', options);
	}

	delete(options) {
		return this.execFunction('video.delete', options);
	}

	deleteAlbum(options) {
		return this.execFunction('video.deleteAlbum', options);
	}

	deleteComment(options) {
		return this.execFunction('video.deleteComment', options);
	}

	edit(options) {
		return this.execFunction('video.edit', options);
	}

	editAlbum(options) {
		return this.execFunction('video.editAlbum', options);
	}

	editComment(options) {
		return this.execFunction('video.editComment', options);
	}

	get(options) {
		return this.execFunction('video.get', options);
	}

	getAlbumById(options) {
		return this.execFunction('video.getAlbumById', options);
	}

	getAlbums(options) {
		return this.execFunction('video.getAlbums', options);
	}

	getAlbumsByVideo(options) {
		return this.execFunction('video.getAlbumsByVideo', options);
	}

	getCatalog(options) {
		return this.execFunction('video.getCatalog', options);
	}

	getCatalogSection(options) {
		return this.execFunction('video.getCatalogSection', options);
	}

	getComments(options) {
		return this.execFunction('video.getComments', options);
	}

	hideCatalogSection(options) {
		return this.execFunction('video.hideCatalogSection', options);
	}

	removeFromAlbum(options) {
		return this.execFunction('video.removeFromAlbum', options);
	}

	reorderAlbums(options) {
		return this.execFunction('video.reorderAlbums', options);
	}

	reorderVideos(options) {
		return this.execFunction('video.reorderVideos', options);
	}

	report(options) {
		return this.execFunction('video.report', options);
	}

	reportComment(options) {
		return this.execFunction('video.reportComment', options);
	}

	restore(options) {
		return this.execFunction('video.restore', options);
	}

	restoreComment(options) {
		return this.execFunction('video.restoreComment', options);
	}

	save(options) {
		return this.execFunction('video.save', options);
	}

	search(options) {
		return this.execFunction('video.search', options);
	}
}

module.exports = Video;

