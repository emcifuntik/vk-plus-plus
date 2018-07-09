

class Pages {
	constructor() {
		this.execFunction = null;
	}

	clearCache(options) {
		return this.execFunction('pages.clearCache', options);
	}

	get(options) {
		return this.execFunction('pages.get', options);
	}

	getHistory(options) {
		return this.execFunction('pages.getHistory', options);
	}

	getTitles(options) {
		return this.execFunction('pages.getTitles', options);
	}

	getVersion(options) {
		return this.execFunction('pages.getVersion', options);
	}

	parseWiki(options) {
		return this.execFunction('pages.parseWiki', options);
	}

	save(options) {
		return this.execFunction('pages.save', options);
	}

	saveAccess(options) {
		return this.execFunction('pages.saveAccess', options);
	}
}

module.exports = Pages;

