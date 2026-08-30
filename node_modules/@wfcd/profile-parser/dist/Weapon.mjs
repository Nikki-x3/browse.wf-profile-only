//#region src/Weapon.ts
/**
* Represents a player's used weapon stats
* @module
*/
var Weapon = class {
	uniqueName;
	xp;
	equipTime;
	headShots;
	hits;
	assists;
	kills;
	fired;
	/**
	*
	* @param weapon The weapon stats being parsed
	*/
	constructor(weapon) {
		/**
		* Weapon unique name
		* @type {String}
		*/
		this.uniqueName = weapon.type;
		/**
		* Earned XP with weapon
		* @type {number}
		*/
		this.xp = weapon.xp;
		/**
		* Time using this weapon
		* @type {number}
		*/
		this.equipTime = weapon.equipTime;
		/**
		* Headshots using this weapon
		* @type {number}
		*/
		this.headShots = weapon.headShots;
		/**
		* Hits using weapon
		* @type {number}
		*/
		this.hits = weapon.hits;
		/**
		* Assists using weapon
		* @type {number}
		*/
		this.assists = weapon.assists;
		/**
		* Kills with weapon
		* @type {number}
		*/
		this.kills = weapon.kills;
		/**
		* Shots fired
		* @type {number}
		*/
		this.fired = weapon.fired;
	}
};
//#endregion
export { Weapon as default };
