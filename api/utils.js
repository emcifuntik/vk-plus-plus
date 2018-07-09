

class Utils {
	constructor() {
		this.execFunction = null;
	}

	checkLink(options) {
		return this.execFunction('utils.checkLink', options);
	}

	deleteFromLastShortened(options) {
		return this.execFunction('utils.deleteFromLastShortened', options);
	}

	getLastShortenedLinks(options) {
		return this.execFunction('utils.getLastShortenedLinks', options);
	}

	getLinkStats(options) {
		return this.execFunction('utils.getLinkStats', options);
	}

	getServerTime(options) {
		return this.execFunction('utils.getServerTime', options);
	}

	getShortLink(options) {
		return this.execFunction('utils.getShortLink', options);
	}

	resolveScreenName(options) {
		return this.execFunction('utils.resolveScreenName', options);
	}
}

module.exports = Utils;

