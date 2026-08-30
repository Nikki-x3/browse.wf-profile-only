import { syndicate } from "warframe-worldstate-data/utilities";
//#region src/Syndicate.ts
/**
* Represents a syndicate
* @module
*/
var Syndicate = class {
	/**
	* Name of the syndicate
	*/
	name;
	/**
	* Current standing the player has with the syndicate
	*/
	standing;
	/**
	* The player's current syndicate title
	*/
	title;
	/**
	* @param affiliation The syndicate data
	* @param locale  locale code
	*/
	constructor(affiliation, locale = "en") {
		this.name = syndicate(affiliation.Tag, locale);
		this.standing = affiliation.Standing;
		this.title = affiliation.Title;
	}
};
//#endregion
export { Syndicate as default };
