

class Database {
	constructor() {
		this.execFunction = null;
	}

	getChairs(options) {
		return this.execFunction('database.getChairs', options);
	}

	getCities(options) {
		return this.execFunction('database.getCities', options);
	}

	getCitiesById(options) {
		return this.execFunction('database.getCitiesById', options);
	}

	getCountries(options) {
		return this.execFunction('database.getCountries', options);
	}

	getCountriesById(options) {
		return this.execFunction('database.getCountriesById', options);
	}

	getFaculties(options) {
		return this.execFunction('database.getFaculties', options);
	}

	getRegions(options) {
		return this.execFunction('database.getRegions', options);
	}

	getSchoolClasses(options) {
		return this.execFunction('database.getSchoolClasses', options);
	}

	getSchools(options) {
		return this.execFunction('database.getSchools', options);
	}

	getUniversities(options) {
		return this.execFunction('database.getUniversities', options);
	}
}

module.exports = Database;

