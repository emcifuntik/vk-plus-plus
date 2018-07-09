

class Execute {
	constructor() {
		this.execFunction = null;
	}

	execute(options) {
		return this.execFunction('execute', options);
	}
}

module.exports = Execute;

