import { find } from "./Utils.mjs";
//#region src/XpInfo.ts
/**
* An item that has contributed to a player's mastery rank
* @module
*/
var XpInfo = class {
	/**
	* Unique name
	*/
	uniqueName;
	/**
	* XP earned
	*/
	xp;
	/**
	* The item corrosponding to the unique name.
	*/
	item;
	/**
	*
	* @param info The info for a given ranked item
	* @param locale langauge to return item in
	* @param withItem Whether or not to include items
	*/
	constructor(info, locale = "en", withItem = false) {
		this.uniqueName = info.ItemType;
		this.xp = info.XP;
		if (withItem) this.item = find(info.ItemType, locale);
	}
};
//#endregion
export { XpInfo as default };
