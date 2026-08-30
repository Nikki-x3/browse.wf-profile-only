import { translatePolarity } from "warframe-worldstate-data/utilities";
//#region src/Polarity.ts
/**
* A polarity in a LoadOutItem
* @module
*/
var Polarity = class {
	/**
	* Polarity name
	*/
	polarity;
	/**
	* Polarized slot
	*/
	slot;
	/**
	*
	* @param {Object} raw The polarity to parse
	*/
	constructor(raw) {
		this.polarity = translatePolarity(raw.Value);
		this.slot = raw.Slot;
	}
};
//#endregion
export { Polarity as default };
