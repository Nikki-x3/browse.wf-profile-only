import { mapToHex } from "./Utils.mjs";
import Skin from "./Skin.mjs";
import { colors } from "@wfcd/items/utilities";
//#region src/ItemConfig.ts
/**
* Item customizations such as colors and applied skins
* @module
*/
var ItemConfig = class {
	/**
	* Array of unique names for the skins applied to item
	*/
	skins;
	/**
	* Array of PVP unique name upgrades applied
	*/
	conclaveUpgrades;
	/**
	* Primary colors applied to item if they exist
	*/
	primaryColor;
	/**
	* Sigil colors applied to item if they exist
	*/
	sigilColor;
	/**
	* Attachment colors applied to item if they exist
	*/
	attachmentsColor;
	/**
	* Syandana colors applied to item if they exist
	*/
	syandanaColor;
	/**
	*
	* @param config The configuration
	*/
	constructor(config, locale = "en") {
		this.skins = config.Skins?.filter(Boolean).map((s) => new Skin({ ItemType: s }, locale));
		if (config.PvpUpgrades) this.conclaveUpgrades = config.PvpUpgrades;
		if (config.pricol) this.primaryColor = colors.mapColors(mapToHex(config.pricol));
		if (config.sigcol) this.sigilColor = colors.mapColors(mapToHex(config.sigcol));
		if (config.attcol) this.attachmentsColor = colors.mapColors(mapToHex(config.attcol));
		if (config.syancol) this.syandanaColor = colors.mapColors(mapToHex(config.syancol));
	}
};
//#endregion
export { ItemConfig as default };
