

class Widgets {
	constructor() {
		this.execFunction = null;
	}

	getComments(options) {
		return this.execFunction('widgets.getComments', options);
	}

	getPages(options) {
		return this.execFunction('widgets.getPages', options);
	}
}

module.exports = Widgets;

