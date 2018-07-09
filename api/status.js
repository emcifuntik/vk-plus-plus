

class Status {
	constructor() {
		this.execFunction = null;
	}

	get(options) {
		return this.execFunction('status.get', options);
	}

	set(options) {
		return this.execFunction('status.set', options);
	}
}

module.exports = Status;

