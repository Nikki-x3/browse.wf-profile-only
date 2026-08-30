import Skin from "./Skin.mjs";
import LoadOutItem from "./LoadOutItem.mjs";
import XpInfo from "./XpInfo.mjs";
//#region src/LoadOutInventory.ts
/**
* Player loudout
* @module
*/
var LoadOutInventory = class {
	/**
	* Skins applied to weapons
	*/
	weaponSkins;
	/**
	* An array of the player's currently equiped Warframe (or powersuits)
	*/
	suits;
	/**
	* An array of the player's currently equiped secondary weapon
	*/
	secondary;
	/**
	* An array of the player's currently equiped primary weapon
	*/
	primary;
	/**
	* An array of the player's currently equiped melee weapon
	*/
	melee;
	/**
	* Items that have counted towards the players mastery rank
	*/
	xpInfo;
	/**
	*
	* @param item The loadout data
	* @param locale The locale to return loudout items in. Default is en
	* @param withItem Whether or not to include items
	*/
	constructor(item, locale = "en", withItem = false) {
		this.weaponSkins = item.WeaponSkins.map((s) => new Skin(s, locale));
		this.suits = item.Suits.map((s) => new LoadOutItem(s, locale));
		this.secondary = item.Pistols?.map((p) => new LoadOutItem(p, locale));
		this.primary = item.LongGuns?.map((lg) => new LoadOutItem(lg, locale));
		this.melee = item.Melee?.map((m) => new LoadOutItem(m, locale));
		this.xpInfo = item.XPInfo.map((xp) => new XpInfo(xp, locale, withItem));
	}
};
//#endregion
export { LoadOutInventory as default };
