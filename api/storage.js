

class Storage {
	constructor() {
		this.execFunction = null;
	}

	get(options) {
		return this.execFunction('storage.get', options);
	}

	getKeys(options) {
		return this.execFunction('storage.getKeys', options);
	}

	set(options) {
		return this.execFunction('storage.set', options);
	}
}

module.exports = Storage;

