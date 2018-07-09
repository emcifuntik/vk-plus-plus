

class Notifications {
	constructor() {
		this.execFunction = null;
	}

	get(options) {
		return this.execFunction('notifications.get', options);
	}

	markAsViewed(options) {
		return this.execFunction('notifications.markAsViewed', options);
	}
}

module.exports = Notifications;

