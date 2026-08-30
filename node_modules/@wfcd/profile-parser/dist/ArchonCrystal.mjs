import { archonShardColor, archonShardUpgradeType } from "warframe-worldstate-data/utilities";
//#region src/ArchonCrystal.ts
/**
* Represents an Archon shard
* @module
*/
var ArchonCrystal = class {
	color;
	modifier;
	/**
	*
	* @param crystal The archon crystal object
	* @param locale The locale to get translations in
	*/
	constructor(crystal, locale = "en") {
		/**
		* Archon shard color
		*/
		this.color = archonShardColor(crystal.Color, locale);
		/**
		* Archon shard modifier
		*/
		this.modifier = archonShardUpgradeType(crystal.Color, crystal.UpgradeType, locale);
	}
};
//#endregion
export { ArchonCrystal as default };
