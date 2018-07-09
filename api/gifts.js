

class Gifts {
	constructor() {
		this.execFunction = null;
	}

	get(options) {
		return this.execFunction('gifts.get', options);
	}
}

module.exports = Gifts;

