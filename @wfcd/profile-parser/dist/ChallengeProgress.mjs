//#region src/ChallengeProgress.ts
/**
* Player completed or in progress challenges
* @module
*/
var ChallengeProgress = class {
	name;
	progress;
	/**
	*
	* @param challenge The challenge object to parse
	*/
	constructor(challenge) {
		/**
		* Name of the challenge
		*/
		this.name = challenge.Name;
		/**
		* Progress towards completing this challenge
		*/
		this.progress = challenge.Progress;
	}
};
//#endregion
export { ChallengeProgress as default };
