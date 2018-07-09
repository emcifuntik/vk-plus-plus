

class Places {
	constructor() {
		this.execFunction = null;
	}

	add(options) {
		return this.execFunction('places.add', options);
	}

	checkin(options) {
		return this.execFunction('places.checkin', options);
	}

	getById(options) {
		return this.execFunction('places.getById', options);
	}

	getCheckins(options) {
		return this.execFunction('places.getCheckins', options);
	}

	getTypes(options) {
		return this.execFunction('places.getTypes', options);
	}

	search(options) {
		return this.execFunction('places.search', options);
	}
}

module.exports = Places;

