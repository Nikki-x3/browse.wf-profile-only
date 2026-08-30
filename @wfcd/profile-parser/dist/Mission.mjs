import { node, nodeEnemy, nodeMissionType } from "warframe-worldstate-data/utilities";
//#region src/Mission.ts
/**
* A mission completed by the player
* @module
*/
var Mission = class {
	/**
	* Node name
	*/
	node;
	/**
	* Node unique name
	*/
	nodeKey;
	/**
	* Node mission type
	*/
	missionType;
	/**
	* Node faction
	*/
	faction;
	/**
	* Highest score earned in this mission
	*/
	highScore;
	/**
	* How many times the mission was completed
	*/
	completes;
	/**
	* Denotes a steel path node
	*/
	tier;
	/**
	*
	* @param mission The mission data
	* @param locale The locale to return in
	*/
	constructor(mission, locale = "en") {
		const uniqueName = mission.type || mission.Tag;
		this.node = node(uniqueName, locale);
		this.nodeKey = uniqueName;
		this.missionType = nodeMissionType(uniqueName, locale);
		this.faction = nodeEnemy(uniqueName, locale);
		if (mission.highScore) this.highScore = mission.highScore;
		if (mission.Completes) this.completes = mission.Completes;
		if (mission.Tier) this.tier = mission.Tier;
	}
};
//#endregion
export { Mission as default };
