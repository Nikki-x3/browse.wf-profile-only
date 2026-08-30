//#region src/Enemy.ts
/**
* An enemy killed/executed by player
*/
var Enemy = class {
	/**
	* Enemy's unique name
	*/
	uniqueName;
	/**
	* How many times the player has killed this enemy type
	*/
	kills;
	/**
	* The amount of kills that were headshots
	*/
	headshots;
	/**
	* The amount of kills that were finishers
	*/
	executions;
	/**
	* The amount of kills that were assits
	*/
	assists;
	/**
	* How many times this enemy type has killed the player
	*/
	deaths;
	/**
	* @param enemy The enemy
	*/
	constructor(enemy) {
		this.uniqueName = enemy.type;
		this.kills = enemy.kills;
		this.headshots = enemy.headshots;
		this.executions = enemy.executions;
		this.assists = enemy.assists;
		this.deaths = enemy.deaths;
	}
};
//#endregion
export { Enemy as default };
