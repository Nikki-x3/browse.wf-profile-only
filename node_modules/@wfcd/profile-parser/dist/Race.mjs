//#region src/Race.ts
/**
* Represents a k-drive race
* @module
*/
var Race = class Race {
	/**
	* Race name
	*/
	uniqueName;
	/**
	* Race High score
	*/
	highScore;
	/**
	*
	* @param type Race name
	* @param highScore high score
	*/
	constructor(type, highScore) {
		this.uniqueName = type;
		this.highScore = highScore;
	}
	/**
	* Created an array of Race objects from DE's Races array
	* @param races Array of races
	* @returns {Race[]} An array of races formatted in a more consumable way.
	*/
	static fromRaceObject(races) {
		return Object.entries(races ?? {}).map(([type, { highScore }]) => new Race(type, highScore));
	}
};
//#endregion
export { Race as default };
