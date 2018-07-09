

class Orders {
	constructor() {
		this.execFunction = null;
	}

	cancelSubscription(options) {
		return this.execFunction('orders.cancelSubscription', options);
	}

	changeState(options) {
		return this.execFunction('orders.changeState', options);
	}

	get(options) {
		return this.execFunction('orders.get', options);
	}

	getAmount(options) {
		return this.execFunction('orders.getAmount', options);
	}

	getById(options) {
		return this.execFunction('orders.getById', options);
	}

	getUserSubscriptionById(options) {
		return this.execFunction('orders.getUserSubscriptionById', options);
	}

	getUserSubscriptions(options) {
		return this.execFunction('orders.getUserSubscriptions', options);
	}

	updateSubscription(options) {
		return this.execFunction('orders.updateSubscription', options);
	}
}

module.exports = Orders;

