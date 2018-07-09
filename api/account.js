

class Account {
	constructor() {
		this.execFunction = null;
	}

	ban(options) {
		return this.execFunction('account.ban', options);
	}

	changePassword(options) {
		return this.execFunction('account.changePassword', options);
	}

	getActiveOffers(options) {
		return this.execFunction('account.getActiveOffers', options);
	}

	getAppPermissions(options) {
		return this.execFunction('account.getAppPermissions', options);
	}

	getBanned(options) {
		return this.execFunction('account.getBanned', options);
	}

	getCounters(options) {
		return this.execFunction('account.getCounters', options);
	}

	getInfo(options) {
		return this.execFunction('account.getInfo', options);
	}

	getProfileInfo(options) {
		return this.execFunction('account.getProfileInfo', options);
	}

	getPushSettings(options) {
		return this.execFunction('account.getPushSettings', options);
	}

	registerDevice(options) {
		return this.execFunction('account.registerDevice', options);
	}

	saveProfileInfo(options) {
		return this.execFunction('account.saveProfileInfo', options);
	}

	setInfo(options) {
		return this.execFunction('account.setInfo', options);
	}

	setNameInMenu(options) {
		return this.execFunction('account.setNameInMenu', options);
	}

	setOffline(options) {
		return this.execFunction('account.setOffline', options);
	}

	setOnline(options) {
		return this.execFunction('account.setOnline', options);
	}

	setPushSettings(options) {
		return this.execFunction('account.setPushSettings', options);
	}

	setSilenceMode(options) {
		return this.execFunction('account.setSilenceMode', options);
	}

	unban(options) {
		return this.execFunction('account.unban', options);
	}

	unregisterDevice(options) {
		return this.execFunction('account.unregisterDevice', options);
	}
}

module.exports = Account;

