

class Likes {
	constructor() {
		this.execFunction = null;
	}

	add(options) {
		return this.execFunction('likes.add', options);
	}

	delete(options) {
		return this.execFunction('likes.delete', options);
	}

	getList(options) {
		return this.execFunction('likes.getList', options);
	}

	isLiked(options) {
		return this.execFunction('likes.isLiked', options);
	}
}

module.exports = Likes;

