import Profile from "./Profile.mjs";
import Stats from "./Stats.mjs";
import { parseDate } from "warframe-worldstate-data/utilities";
//#region src/ProfileParser.ts
/**
* Parser entry point
* @module
*/
var ProfileParser = class {
	/**
	* Player's profile
	*/
	profile;
	/**
	* N/A
	*/
	techProjects;
	/**
	* N/A
	*/
	xpComponents;
	/**
	* N/A
	*/
	xpCacheExpiryDate;
	/**
	* N/A
	*/
	ceremonyResetDate;
	/**
	* Player stats
	*/
	stats;
	/**
	*
	* @param {Object} data The data returned by getProfile endpoint
	* @param {string} locale The locale to return where possible
	* @param {boolean} [withItem=false] Whether or not to include items
	*/
	constructor(data, locale = "en", withItem = false) {
		this.profile = new Profile(data.Results[0], locale, withItem);
		this.techProjects = data.TechProjects ?? [];
		this.xpComponents = data.XpComponents ?? [];
		this.xpCacheExpiryDate = parseDate(data.XpCacheExpiryDate);
		this.ceremonyResetDate = parseDate(data.CeremonyResetDate);
		this.stats = new Stats(data.Stats);
	}
};
//#endregion
export { ProfileParser as default };
