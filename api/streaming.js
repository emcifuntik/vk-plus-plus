

class streaming {
	constructor() {
		this.execFunction = null;
	}

	getServerUrl(options) {
		return this.execFunction('streaming.getServerUrl', options);
	}

	getSettings(options) {
		return this.execFunction('streaming.getSettings', options);
	}

	getStats(options) {
		return this.execFunction('streaming.getStats', options);
	}

	setSettings(options) {
		return this.execFunction('streaming.setSettings', options);
	}
}

module.exports = streaming;

