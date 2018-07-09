

class Fave {
	constructor() {
		this.execFunction = null;
	}

	addGroup(options) {
		return this.execFunction('fave.addGroup', options);
	}

	addLink(options) {
		return this.execFunction('fave.addLink', options);
	}

	addUser(options) {
		return this.execFunction('fave.addUser', options);
	}

	getLinks(options) {
		return this.execFunction('fave.getLinks', options);
	}

	getMarketItems(options) {
		return this.execFunction('fave.getMarketItems', options);
	}

	getPhotos(options) {
		return this.execFunction('fave.getPhotos', options);
	}

	getPosts(options) {
		return this.execFunction('fave.getPosts', options);
	}

	getUsers(options) {
		return this.execFunction('fave.getUsers', options);
	}

	getVideos(options) {
		return this.execFunction('fave.getVideos', options);
	}

	removeGroup(options) {
		return this.execFunction('fave.removeGroup', options);
	}

	removeLink(options) {
		return this.execFunction('fave.removeLink', options);
	}

	removeUser(options) {
		return this.execFunction('fave.removeUser', options);
	}
}

module.exports = Fave;

