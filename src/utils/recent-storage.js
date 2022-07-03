
/**
 * This class is used to store the 4 recent contact IDs.
 */
export default class RecentStorage {
	constructor(storageKey) {
		this.storageKey = storageKey;
		this.storage = window.localStorage;
	}

	get() {
		return this.storage.getItem(this.storageKey);
	}
	
	getInArray(){
		const recentContacts = this.get();
		const recentContactsArray = recentContacts ? recentContacts.split(",") : [];
		return recentContactsArray;
	}

	set(value) {
		this.storage.setItem(this.storageKey, value);
	}

	clear() {
		this.storage.removeItem(this.storageKey);
	}

	addLast(contactId) {
		const recentContacts = this.get();
		const recentContactsArray = recentContacts ? recentContacts.split(",") : [];
		const recentContactsArrayWithLast = [contactId, ...recentContactsArray];
		const recentContactsArrayWithLastUnique = [...new Set(recentContactsArrayWithLast)];
		const recentContactsArrayWithLastUniqueTrimmed = recentContactsArrayWithLastUnique.slice(0, 4);
		this.set(recentContactsArrayWithLastUniqueTrimmed.join(","));
	}
}