//#region src/Ability.ts
/**
* Represents a players used ability
* @module
*/
var Ability = class {
	uniqueName;
	used;
	/**
	* @param ability The ability
	*/
	constructor(ability) {
		/**
		* The ability unique name
		*/
		this.uniqueName = ability.type;
		/**
		* How many time the ability was used in the player's lifetime
		*/
		this.used = ability.used;
	}
};
//#endregion
export { Ability as default };
