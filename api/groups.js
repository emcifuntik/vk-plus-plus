

class Groups {
	constructor() {
		this.execFunction = null;
	}

	addCallbackServer(options) {
		return this.execFunction('groups.addCallbackServer', options);
	}

	addLink(options) {
		return this.execFunction('groups.addLink', options);
	}

	approveRequest(options) {
		return this.execFunction('groups.approveRequest', options);
	}

	ban(options) {
		return this.execFunction('groups.ban', options);
	}

	create(options) {
		return this.execFunction('groups.create', options);
	}

	deleteCallbackServer(options) {
		return this.execFunction('groups.deleteCallbackServer', options);
	}

	deleteLink(options) {
		return this.execFunction('groups.deleteLink', options);
	}

	disableOnline(options) {
		return this.execFunction('groups.disableOnline', options);
	}

	edit(options) {
		return this.execFunction('groups.edit', options);
	}

	editCallbackServer(options) {
		return this.execFunction('groups.editCallbackServer', options);
	}

	editLink(options) {
		return this.execFunction('groups.editLink', options);
	}

	editManager(options) {
		return this.execFunction('groups.editManager', options);
	}

	editPlace(options) {
		return this.execFunction('groups.editPlace', options);
	}

	enableOnline(options) {
		return this.execFunction('groups.enableOnline', options);
	}

	get(options) {
		return this.execFunction('groups.get', options);
	}

	getBanned(options) {
		return this.execFunction('groups.getBanned', options);
	}

	getById(options) {
		return this.execFunction('groups.getById', options);
	}

	getCallbackConfirmationCode(options) {
		return this.execFunction('groups.getCallbackConfirmationCode', options);
	}

	getCallbackServers(options) {
		return this.execFunction('groups.getCallbackServers', options);
	}

	getCallbackSettings(options) {
		return this.execFunction('groups.getCallbackSettings', options);
	}

	getCatalog(options) {
		return this.execFunction('groups.getCatalog', options);
	}

	getCatalogInfo(options) {
		return this.execFunction('groups.getCatalogInfo', options);
	}

	getInvitedUsers(options) {
		return this.execFunction('groups.getInvitedUsers', options);
	}

	getInvites(options) {
		return this.execFunction('groups.getInvites', options);
	}

	getLongPollServer(options) {
		return this.execFunction('groups.getLongPollServer', options);
	}

	getLongPollSettings(options) {
		return this.execFunction('groups.getLongPollSettings', options);
	}

	getMembers(options) {
		return this.execFunction('groups.getMembers', options);
	}

	getOnlineStatus(options) {
		return this.execFunction('groups.getOnlineStatus', options);
	}

	getRequests(options) {
		return this.execFunction('groups.getRequests', options);
	}

	getSettings(options) {
		return this.execFunction('groups.getSettings', options);
	}

	getTokenPermissions(options) {
		return this.execFunction('groups.getTokenPermissions', options);
	}

	invite(options) {
		return this.execFunction('groups.invite', options);
	}

	isMember(options) {
		return this.execFunction('groups.isMember', options);
	}

	join(options) {
		return this.execFunction('groups.join', options);
	}

	leave(options) {
		return this.execFunction('groups.leave', options);
	}

	removeUser(options) {
		return this.execFunction('groups.removeUser', options);
	}

	reorderLink(options) {
		return this.execFunction('groups.reorderLink', options);
	}

	search(options) {
		return this.execFunction('groups.search', options);
	}

	setCallbackSettings(options) {
		return this.execFunction('groups.setCallbackSettings', options);
	}

	setLongPollSettings(options) {
		return this.execFunction('groups.setLongPollSettings', options);
	}

	unban(options) {
		return this.execFunction('groups.unban', options);
	}
}

module.exports = Groups;

