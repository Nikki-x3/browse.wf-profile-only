//#region src/Pvp.ts
/**
* Player's conclave stats
* @module
*/
var Pvp = class {
	/**
	* PVP match unique name
	*/
	uniqueName;
	/**
	* Deaths for this match
	*/
	warframeDeaths;
	/**
	* Warframe kills
	*/
	warframeKills;
	/**
	* Weapon killes
	*/
	weaponKills;
	/**
	*
	* @param {Object} pvp PVP data to parse
	*/
	constructor(pvp) {
		this.uniqueName = pvp.type;
		this.warframeDeaths = pvp.suitDeaths;
		this.warframeKills = pvp.suitKills;
		this.weaponKills = pvp.weaponKills;
	}
};
//#endregion
export { Pvp as default };
