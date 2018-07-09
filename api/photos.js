

class Photos {
	constructor() {
		this.execFunction = null;
	}

	confirmTag(options) {
		return this.execFunction('photos.confirmTag', options);
	}

	copy(options) {
		return this.execFunction('photos.copy', options);
	}

	createAlbum(options) {
		return this.execFunction('photos.createAlbum', options);
	}

	createComment(options) {
		return this.execFunction('photos.createComment', options);
	}

	delete(options) {
		return this.execFunction('photos.delete', options);
	}

	deleteAlbum(options) {
		return this.execFunction('photos.deleteAlbum', options);
	}

	deleteComment(options) {
		return this.execFunction('photos.deleteComment', options);
	}

	edit(options) {
		return this.execFunction('photos.edit', options);
	}

	editAlbum(options) {
		return this.execFunction('photos.editAlbum', options);
	}

	editComment(options) {
		return this.execFunction('photos.editComment', options);
	}

	get(options) {
		return this.execFunction('photos.get', options);
	}

	getAlbums(options) {
		return this.execFunction('photos.getAlbums', options);
	}

	getAlbumsCount(options) {
		return this.execFunction('photos.getAlbumsCount', options);
	}

	getAll(options) {
		return this.execFunction('photos.getAll', options);
	}

	getAllComments(options) {
		return this.execFunction('photos.getAllComments', options);
	}

	getById(options) {
		return this.execFunction('photos.getById', options);
	}

	getChatUploadServer(options) {
		return this.execFunction('photos.getChatUploadServer', options);
	}

	getComments(options) {
		return this.execFunction('photos.getComments', options);
	}

	getMarketAlbumUploadServer(options) {
		return this.execFunction('photos.getMarketAlbumUploadServer', options);
	}

	getMarketUploadServer(options) {
		return this.execFunction('photos.getMarketUploadServer', options);
	}

	getMessagesUploadServer(options) {
		return this.execFunction('photos.getMessagesUploadServer', options);
	}

	getNewTags(options) {
		return this.execFunction('photos.getNewTags', options);
	}

	getOwnerCoverPhotoUploadServer(options) {
		return this.execFunction('photos.getOwnerCoverPhotoUploadServer', options);
	}

	getOwnerPhotoUploadServer(options) {
		return this.execFunction('photos.getOwnerPhotoUploadServer', options);
	}

	getTags(options) {
		return this.execFunction('photos.getTags', options);
	}

	getUploadServer(options) {
		return this.execFunction('photos.getUploadServer', options);
	}

	getUserPhotos(options) {
		return this.execFunction('photos.getUserPhotos', options);
	}

	getWallUploadServer(options) {
		return this.execFunction('photos.getWallUploadServer', options);
	}

	makeCover(options) {
		return this.execFunction('photos.makeCover', options);
	}

	move(options) {
		return this.execFunction('photos.move', options);
	}

	putTag(options) {
		return this.execFunction('photos.putTag', options);
	}

	removeTag(options) {
		return this.execFunction('photos.removeTag', options);
	}

	reorderAlbums(options) {
		return this.execFunction('photos.reorderAlbums', options);
	}

	reorderPhotos(options) {
		return this.execFunction('photos.reorderPhotos', options);
	}

	report(options) {
		return this.execFunction('photos.report', options);
	}

	reportComment(options) {
		return this.execFunction('photos.reportComment', options);
	}

	restore(options) {
		return this.execFunction('photos.restore', options);
	}

	restoreComment(options) {
		return this.execFunction('photos.restoreComment', options);
	}

	save(options) {
		return this.execFunction('photos.save', options);
	}

	saveMarketAlbumPhoto(options) {
		return this.execFunction('photos.saveMarketAlbumPhoto', options);
	}

	saveMarketPhoto(options) {
		return this.execFunction('photos.saveMarketPhoto', options);
	}

	saveMessagesPhoto(options) {
		return this.execFunction('photos.saveMessagesPhoto', options);
	}

	saveOwnerCoverPhoto(options) {
		return this.execFunction('photos.saveOwnerCoverPhoto', options);
	}

	saveOwnerPhoto(options) {
		return this.execFunction('photos.saveOwnerPhoto', options);
	}

	saveWallPhoto(options) {
		return this.execFunction('photos.saveWallPhoto', options);
	}

	search(options) {
		return this.execFunction('photos.search', options);
	}
}

module.exports = Photos;

