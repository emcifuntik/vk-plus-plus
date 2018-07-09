

class Docs {
	constructor() {
		this.execFunction = null;
	}

	add(options) {
		return this.execFunction('docs.add', options);
	}

	delete(options) {
		return this.execFunction('docs.delete', options);
	}

	edit(options) {
		return this.execFunction('docs.edit', options);
	}

	get(options) {
		return this.execFunction('docs.get', options);
	}

	getById(options) {
		return this.execFunction('docs.getById', options);
	}

	getMessagesUploadServer(options) {
		return this.execFunction('docs.getMessagesUploadServer', options);
	}

	getTypes(options) {
		return this.execFunction('docs.getTypes', options);
	}

	getUploadServer(options) {
		return this.execFunction('docs.getUploadServer', options);
	}

	getWallUploadServer(options) {
		return this.execFunction('docs.getWallUploadServer', options);
	}

	save(options) {
		return this.execFunction('docs.save', options);
	}

	search(options) {
		return this.execFunction('docs.search', options);
	}
}

module.exports = Docs;

