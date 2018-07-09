

class appWidgets {
	constructor() {
		this.execFunction = null;
	}

	getAppImageUploadServer(options) {
		return this.execFunction('appWidgets.getAppImageUploadServer', options);
	}

	getAppImages(options) {
		return this.execFunction('appWidgets.getAppImages', options);
	}

	getGroupImageUploadServer(options) {
		return this.execFunction('appWidgets.getGroupImageUploadServer', options);
	}

	getGroupImages(options) {
		return this.execFunction('appWidgets.getGroupImages', options);
	}

	getImagesById(options) {
		return this.execFunction('appWidgets.getImagesById', options);
	}

	saveAppImage(options) {
		return this.execFunction('appWidgets.saveAppImage', options);
	}

	saveGroupImage(options) {
		return this.execFunction('appWidgets.saveGroupImage', options);
	}

	update(options) {
		return this.execFunction('appWidgets.update', options);
	}
}

module.exports = appWidgets;

