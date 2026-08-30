import { find } from "./Utils.mjs";
import ItemConfig from "./ItemConfig.mjs";
import Polarity from "./Polarity.mjs";
import { parseDate, toTitleCase } from "warframe-worldstate-data/utilities";
import { colors } from "@wfcd/items/utilities";
//#region src/LoadOutItem.ts
/**
* An an item in LoadOutInventory
* @module
*/
var LoadOutItem = class {
	/**
	* Item ID
	*/
	itemId;
	/**
	* Item unique name
	*/
	uniqueName;
	/**
	* Item in-game name
	*/
	name;
	/**
	* Complete item from @wfcd/items
	*/
	item;
	/**
	* The name of the Lich, Sister, or Technocyte
	*/
	nemesis;
	/**
	* Configuration for this weapon. Such as colors and skins applied by the player
	*/
	configs;
	/**
	* The upgrade that was applied to this weapon
	*/
	upgradeType;
	/**
	* Information on the upgradeType that was applied
	* TODO need model for for fingerprint
	*/
	upgradeFingerprint;
	features;
	upgradeVer;
	/**
	* XP earned with this weapon
	*/
	xp;
	/**
	* How many mod slots are currently polarized.
	*/
	polarized;
	/**
	* Which polarity types exist on the weapon
	*/
	polarity;
	/**
	* Focus lens applied
	*/
	focuseLens;
	customizationSlotPurchases;
	/**
	* Primary colors applied to item if they exist
	*/
	primaryColor;
	/**
	* Sigil colors applied to item if they exist
	*/
	sigilColor;
	/**
	* Whether prime details are enabled or not
	*/
	enablePrime;
	/**
	* Attachment colors applied to item if they exist
	*/
	attachmentsColor;
	/**
	* Syandana colors applied to item if they exist
	*/
	syandanaColor;
	/**
	* If set will show when the player's warframe was infested.
	*/
	infestationDate;
	/**
	*
	* @param {Object} loadOutItem The loadout item from LoadoutInventory
	* @param {string} [locale='en'] The locale to return item in
	*/
	constructor(loadOutItem, locale = "en") {
		this.itemId = loadOutItem.ItemId.$oid;
		this.uniqueName = loadOutItem.ItemType;
		const item = find(loadOutItem.ItemType, locale);
		if (item) {
			this.name = item.name;
			this.item = item;
		}
		if (loadOutItem.ItemName) {
			const [, nemesis] = loadOutItem.ItemName.split("|");
			if (nemesis !== void 0) this.nemesis = toTitleCase(nemesis);
			else this.name = loadOutItem.ItemName;
		}
		this.configs = loadOutItem.Configs.map((c) => new ItemConfig(c));
		if (loadOutItem.UpgradeType) this.upgradeType = loadOutItem.UpgradeType;
		this.upgradeFingerprint = loadOutItem.UpgradeFingerprint;
		this.features = loadOutItem.Features;
		this.upgradeVer = loadOutItem.UpgradeVer;
		this.xp = loadOutItem.XP;
		this.polarized = loadOutItem.Polarized;
		this.polarity = loadOutItem.Polarity?.map((p) => new Polarity(p));
		this.focuseLens = loadOutItem.FocusLens;
		this.customizationSlotPurchases = loadOutItem.CustomizationSlotPurchases ?? 0;
		if (loadOutItem.pricol) this.primaryColor = colors.mapColors(loadOutItem.pricol);
		if (loadOutItem.sigcol) this.sigilColor = colors.mapColors(loadOutItem.sigcol);
		this.enablePrime = loadOutItem.ugly ?? false;
		if (loadOutItem.attcol) this.attachmentsColor = colors.mapColors(loadOutItem.attcol);
		if (loadOutItem.syancol) this.syandanaColor = colors.mapColors(loadOutItem.syancol);
		if (loadOutItem.InfestationDate) this.infestationDate = parseDate(loadOutItem.InfestationDate);
	}
};
//#endregion
export { LoadOutItem as default };
