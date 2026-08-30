//#region src/Intrinsics.ts
/**
* Player's intrinsics ranks
* @module
*/
var Intrinsics = class {
	/**
	* Intrinsic points for railjack
	*/
	railjack;
	/**
	* Railjack engineering rank
	*/
	engineering;
	/**
	* Railjack gunnery rank
	*/
	gunnery;
	/**
	* Railjack piloting rank
	*/
	piloting;
	/**
	* Railjack tactical rank
	*/
	tactical;
	/**
	* Railjack command rank
	*/
	command;
	/**
	* Intrinsic points for railjack
	*/
	drifter;
	/**
	* Drifter riding rank
	*/
	riding;
	/**
	* Drifter combat rank
	*/
	combat;
	/**
	* Drifter opportunity rank
	*/
	opportunity;
	/**
	* Drifter endurance rank
	*/
	endurance;
	constructor(skills) {
		this.railjack = Math.floor((skills.LPP_SPACE ?? 0) / 1e3);
		this.engineering = skills.LPS_ENGINEERING ?? 0;
		this.gunnery = skills.LPS_GUNNERY ?? 0;
		this.piloting = skills.LPS_PILOTING ?? 0;
		this.tactical = skills.LPS_TACTICAL ?? 0;
		this.command = skills.LPS_COMMAND ?? 0;
		this.drifter = Math.floor((skills.LPP_DRIFTER ?? 0) / 1e3);
		this.riding = skills.LPS_DRIFT_RIDING ?? 0;
		this.combat = skills.LPS_DRIFT_COMBAT ?? 0;
		this.opportunity = skills.LPS_DRIFT_OPPORTUNITY ?? 0;
		this.endurance = skills.LPS_DRIFT_ENDURANCE ?? 0;
	}
};
//#endregion
export { Intrinsics as default };
