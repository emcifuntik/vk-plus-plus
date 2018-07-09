

class Auth {
	constructor() {
		this.execFunction = null;
	}

	checkPhone(options) {
		return this.execFunction('auth.checkPhone', options);
	}

	confirm(options) {
		return this.execFunction('auth.confirm', options);
	}

	restore(options) {
		return this.execFunction('auth.restore', options);
	}
}

module.exports = Auth;

