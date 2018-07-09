

class Messages {
	constructor() {
		this.execFunction = null;
	}

	addChatUser(options) {
		return this.execFunction('messages.addChatUser', options);
	}

	allowMessagesFromGroup(options) {
		return this.execFunction('messages.allowMessagesFromGroup', options);
	}

	createChat(options) {
		return this.execFunction('messages.createChat', options);
	}

	delete(options) {
		return this.execFunction('messages.delete', options);
	}

	deleteChatPhoto(options) {
		return this.execFunction('messages.deleteChatPhoto', options);
	}

	deleteConversation(options) {
		return this.execFunction('messages.deleteConversation', options);
	}

	denyMessagesFromGroup(options) {
		return this.execFunction('messages.denyMessagesFromGroup', options);
	}

	edit(options) {
		return this.execFunction('messages.edit', options);
	}

	editChat(options) {
		return this.execFunction('messages.editChat', options);
	}

	getByConversationMessageId(options) {
		return this.execFunction('messages.getByConversationMessageId', options);
	}

	getById(options) {
		return this.execFunction('messages.getById', options);
	}

	getChat(options) {
		return this.execFunction('messages.getChat', options);
	}

	getChatPreview(options) {
		return this.execFunction('messages.getChatPreview', options);
	}

	getConversationMembers(options) {
		return this.execFunction('messages.getConversationMembers', options);
	}

	getConversations(options) {
		return this.execFunction('messages.getConversations', options);
	}

	getConversationsById(options) {
		return this.execFunction('messages.getConversationsById', options);
	}

	getHistory(options) {
		return this.execFunction('messages.getHistory', options);
	}

	getHistoryAttachments(options) {
		return this.execFunction('messages.getHistoryAttachments', options);
	}

	getInviteLink(options) {
		return this.execFunction('messages.getInviteLink', options);
	}

	getLastActivity(options) {
		return this.execFunction('messages.getLastActivity', options);
	}

	getLongPollHistory(options) {
		return this.execFunction('messages.getLongPollHistory', options);
	}

	getLongPollServer(options) {
		return this.execFunction('messages.getLongPollServer', options);
	}

	isMessagesFromGroupAllowed(options) {
		return this.execFunction('messages.isMessagesFromGroupAllowed', options);
	}

	joinChatByInviteLink(options) {
		return this.execFunction('messages.joinChatByInviteLink', options);
	}

	markAsAnsweredConversation(options) {
		return this.execFunction('messages.markAsAnsweredConversation', options);
	}

	markAsImportant(options) {
		return this.execFunction('messages.markAsImportant', options);
	}

	markAsImportantConversation(options) {
		return this.execFunction('messages.markAsImportantConversation', options);
	}

	markAsRead(options) {
		return this.execFunction('messages.markAsRead', options);
	}

	pin(options) {
		return this.execFunction('messages.pin', options);
	}

	removeChatUser(options) {
		return this.execFunction('messages.removeChatUser', options);
	}

	restore(options) {
		return this.execFunction('messages.restore', options);
	}

	search(options) {
		return this.execFunction('messages.search', options);
	}

	searchConversations(options) {
		return this.execFunction('messages.searchConversations', options);
	}

	send(options) {
		return this.execFunction('messages.send', options);
	}

	setActivity(options) {
		return this.execFunction('messages.setActivity', options);
	}

	setChatPhoto(options) {
		return this.execFunction('messages.setChatPhoto', options);
	}

	unpin(options) {
		return this.execFunction('messages.unpin', options);
	}
}

module.exports = Messages;

