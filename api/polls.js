

class Polls {
	constructor() {
		this.execFunction = null;
	}

	addVote(options) {
		return this.execFunction('polls.addVote', options);
	}

	create(options) {
		return this.execFunction('polls.create', options);
	}

	deleteVote(options) {
		return this.execFunction('polls.deleteVote', options);
	}

	edit(options) {
		return this.execFunction('polls.edit', options);
	}

	getById(options) {
		return this.execFunction('polls.getById', options);
	}

	getVoters(options) {
		return this.execFunction('polls.getVoters', options);
	}
}

module.exports = Polls;

