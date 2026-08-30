import { mapToHex } from "./Utils.mjs";
import Skin from "./Skin.mjs";
import { colors } from "@wfcd/items/utilities";
//#region src/OperatorLoadOuts.ts
/**
* Player's operator loadout
* @module
*/
var OperatorLoadOuts = class {
	/**
	* Skins that have been applied to the player's operator.
	*/
	skins;
	/**
	* Operator amp ID
	*/
	operatorAmp;
	/**
	* Applied upgrade IDs
	*/
	upgrades;
	abilityOverride;
	/**
	* Operator primary colors
	*/
	primaryColor;
	/**
	* Operator sigil colors
	*/
	sigilColor;
	/**
	* Operator attachment colors
	*/
	attachmentsColor;
	/**
	* Operator syandana colors
	*/
	syandanaColor;
	/**
	* Operator eye colors
	*/
	eyeColor;
	/**
	* Operator facial colors
	*/
	facial;
	/**
	* Operator cloth colors
	*/
	cloth;
	/**
	*
	* @param {Object} loadout The operator loadout
	*/
	constructor(loadout, locale = "en") {
		this.skins = loadout.Skins.filter(Boolean).map((s) => new Skin({ ItemType: s }, locale));
		this.operatorAmp = loadout.OperatorAmp?.$oid;
		/**
		* Applied upgrade IDs
		* @type {Array<String>}
		*/
		this.upgrades = loadout.Upgrades;
		this.abilityOverride = loadout.AbilityOverride;
		if (loadout.pricol) this.primaryColor = colors.mapColors(mapToHex(loadout.pricol));
		if (loadout.sigcol) this.sigilColor = colors.mapColors(mapToHex(loadout.sigcol));
		if (loadout.attcol) this.attachmentsColor = colors.mapColors(mapToHex(loadout.attcol));
		if (loadout.syancol) this.syandanaColor = colors.mapColors(mapToHex(loadout.syancol));
		if (loadout.eyecol) this.eyeColor = colors.mapColors(mapToHex(loadout.eyecol));
		if (loadout.facial) this.facial = colors.mapColors(mapToHex(loadout.facial));
		if (loadout.cloth) this.cloth = colors.mapColors(mapToHex(loadout.cloth));
	}
};
//#endregion
export { OperatorLoadOuts as default };
