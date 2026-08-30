import { find } from "./Utils.mjs";
//#region src/Skin.ts
/**
* A skin class
* @module
*/
var Skin = class {
	uniqueName;
	item;
	/**
	*
	* @param skin The skin data  to parse
	* @param locale The locale to return skin item in
	*/
	constructor(skin, locale = "en") {
		/**
		* Unique name
		*/
		this.uniqueName = skin.ItemType;
		const item = find(skin.ItemType, locale);
		/**
		* The Warframe item that matches the unique name
		*/
		if (item) this.item = item;
	}
};
/**
* @deprecated Move to Skin, this is just here to not break anything for early users
* @param {Object} skin Skin object
* @returns {Skin} Skin object with possible item
*/
const WeaponSkin = (skin) => new Skin(skin);
//#endregion
export { WeaponSkin, Skin as default };
