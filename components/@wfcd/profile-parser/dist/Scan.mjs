//#region src/Scan.ts
/**
* Represents an enemy scanned to the codex
* @module
*/
var Scan = class {
	/**
	* Enemy unique name
	* @type {String}
	*/
	uniqueName;
	/**
	* Number of scans done
	* @type {number}
	*/
	scans;
	/**
	* @param {Object} scan The scanned Warframe object
	*/
	constructor(scan) {
		this.uniqueName = scan.type;
		this.scans = scan.scans;
	}
};
//#endregion
export { Scan as default };
