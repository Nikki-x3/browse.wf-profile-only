import Ability from "./Ability.mjs";
import Enemy from "./Enemy.mjs";
import Mission from "./Mission.mjs";
import Pvp from "./Pvp.mjs";
import Race from "./Race.mjs";
import Scan from "./Scan.mjs";
import Weapon from "./Weapon.mjs";
//#region src/Stats.ts
/**
* A player's overall career stats
* @module
*/
var Stats = class {
	/**
	* Guild name
	*/
	guildName;
	/**
	* Missions completed
	*/
	missionsCompleted;
	/**
	* Missions quit
	*/
	missionsQuit;
	/**
	* Misions failed
	*/
	missionsFailed;
	/**
	* Missions interrupted
	*/
	missionsInterrupted;
	/**
	* Missions dumped
	*/
	missionsDumped;
	/**
	* Items picked up
	*/
	pickupCount;
	/**
	* Stats per weapon
	*/
	weapons;
	/**
	* Stats on enemy encounters.
	*/
	enemies;
	/**
	* Max score for Operation: Cryotic Front
	*/
	excavationEventScoreMax;
	/**
	* Max scoring for The Cicero crisis
	*/
	forestEventScoreMax;
	/**
	* Clan scoring for The Cicero crisis
	*/
	forestEventScoreSum;
	/**
	* Melee kills
	*/
	meleeKills;
	/**
	* Used abilities
	*/
	abilities;
	/**
	* Ciphers completed successfully
	*/
	ciphersSolved;
	/**
	* Ciphers failed
	*/
	ciphersFailed;
	/**
	* Gross income
	*/
	income;
	/**
	* Total play time since account creation
	*/
	timePlayedSec;
	/**
	* Average time to hack a panel
	*/
	cipherTime;
	/**
	* N/A
	*/
	rating;
	/**
	* Mastery rank
	*/
	rank;
	/**
	* Total deaths since account creation
	*/
	deaths;
	/**
	* Mastery rank
	*/
	playerLevel;
	/**
	* List of missions and high scores
	*/
	missions;
	/**
	* Team heals
	*/
	healCount;
	/**
	* Event Scores for Operation breeding grounds
	*/
	breedGrounds;
	/**
	* Event Scores for The Gradivus Dilemma
	*/
	gradivusDilemma;
	/**
	* List of scanned Warframe objects
	*/
	scans;
	/**
	* Team revives
	*/
	reviveCount;
	/**
	* Score for Operation: Eyes of Blight
	*/
	fomorianEventScore;
	/**
	* Conclave scores
	*/
	pvp;
	/**
	* Lunaro stats
	*/
	lunaro;
	/**
	* Dojo obstacle course goal
	*/
	dojoObstacleScore;
	/**
	* N/A
	*/
	pvpGamesPendingMask;
	/**
	* N/A
	*/
	dedicatedServerGamesCompleted;
	/**
	* Event score for the Pacifism Defect
	*/
	pacifismDefect;
	/**
	* Score for operation Ambulas reborn.
	*/
	ambulasReborn;
	/**
	* Score for Wyrmius mini game
	*/
	sentinelGameScore;
	/**
	* Event score for operation hostile merger
	*/
	amalgamEventScoreMax;
	/**
	* Operation Scarlet spear event score and badges
	*/
	scarletSpear;
	/**
	* Operation: Orphix Venom score
	*/
	orphixVenomScore;
	/**
	* Play's Highest score in Happy Zephyr
	*/
	happyZephyrScore;
	/**
	* K-Drive races
	*/
	kDriveRaces;
	/**
	* Operation Gate Crash event
	*/
	gateCrash;
	/**
	* Per mission score for Operation: False Profit
	*/
	falseProfitMissionScore;
	/**
	* Total even score for Operation: False Profit
	*/
	falseProfitEventScore;
	/**
	* Operation: Shadow Debt event score
	*/
	shadowDebtEventScore;
	/**
	* Operation: Rathuum event score
	*/
	rathuumEventScore;
	/**
	* Hollowed flame event max score
	*/
	hallowedFlameScoreMax;
	/**
	* Survival Weekend event score
	*/
	survivalWeekenedEventScore;
	/**
	* N/A
	*/
	infestedEventScore;
	/**
	*
	* @param stats Player stats
	*/
	constructor(stats) {
		this.guildName = stats.GuildName;
		this.missionsCompleted = stats.MissionsCompleted;
		this.missionsQuit = stats.MissionsQuit;
		this.missionsFailed = stats.MissionsFailed;
		this.missionsInterrupted = stats.MissionsInterrupted;
		this.missionsDumped = stats.MissionsDumped;
		this.pickupCount = stats.PickupCount;
		this.weapons = stats.Weapons.map((w) => new Weapon(w));
		this.enemies = stats.Enemies.map((e) => new Enemy(e));
		if (stats.ExcavationEventScoreMax) this.excavationEventScoreMax = stats.ExcavationEventScoreMax;
		if (stats.ForestEventScoreMax) this.forestEventScoreMax = stats.ForestEventScoreMax;
		if (stats.ForestEventScoreSum) this.forestEventScoreSum = stats.ForestEventScoreSum;
		this.meleeKills = stats.MeleeKills;
		this.abilities = stats.Abilities.map((a) => new Ability(a));
		this.ciphersSolved = stats.CiphersSolved;
		this.ciphersFailed = stats.CiphersFailed;
		this.income = stats.Income;
		this.timePlayedSec = stats.TimePlayedSec;
		this.cipherTime = stats.CipherTime;
		this.rating = stats.Rating;
		this.rank = stats.Rank;
		this.deaths = stats.Deaths;
		this.playerLevel = stats.PlayerLevel;
		this.missions = stats.Missions.map((m) => new Mission(m));
		this.healCount = stats.HealCount;
		if (stats.HiveEventScore || stats.HiveEventScoreSum) this.breedGrounds = {
			personalScore: stats.HiveEventScore,
			clanScore: stats.HiveEventScoreSum
		};
		if (stats.InvasionEventGrineerScore || stats.InvasionEventCorpusScore) this.gradivusDilemma = {
			grineer: stats.InvasionEventGrineerScore,
			corpus: stats.InvasionEventCorpusScore
		};
		this.scans = stats.Scans?.map((s) => new Scan(s)) ?? [];
		this.reviveCount = stats.ReviveCount;
		if (stats.FomorianEventScore) this.fomorianEventScore = stats.FomorianEventScore;
		this.pvp = stats.PVP?.map((pvp) => new Pvp(pvp)) ?? [];
		this.lunaro = {
			ties: stats.PVPSpeedballTies ?? 0,
			checks: stats.PVPSpeedballChecks ?? 0,
			goals: stats.PVPSpeedballGoals ?? 0,
			interceptions: stats.PVPSpeedballInterceptions ?? 0,
			steals: stats.PVPSpeedballSteals ?? 0,
			points: stats.PVPSpeedballPoints ?? 0,
			losses: stats.PVPSpeedballLosses ?? 0,
			assists: stats.PVPSpeedballAssists ?? 0,
			wins: stats.PVPSpeedballWins ?? 0,
			saves: stats.PVPSpeedballSaves ?? 0,
			passes: stats.PVPSpeedballPasses ?? 0
		};
		this.dojoObstacleScore = stats.DojoObstacleScore ?? 0;
		this.pvpGamesPendingMask = stats.PvpGamesPendingMask ?? 0;
		this.dedicatedServerGamesCompleted = stats.DedicatedServerGamesCompleted ?? 0;
		if (stats.ColonistRescueEventScoreMax) this.pacifismDefect = stats.ColonistRescueEventScoreMax;
		if (stats.AmbulasEventScoreMax) this.ambulasReborn = stats.AmbulasEventScoreMax;
		if (stats.SentinelGameScore) this.sentinelGameScore = stats.SentinelGameScore;
		if (stats.AmalgamEventScoreMax) this.amalgamEventScoreMax = stats.AmalgamEventScoreMax;
		if (stats.FlotillaEventScore) this.scarletSpear = {
			eventScore: stats.FlotillaEventScore,
			condrixTier1: stats.FlotillaGroundBadgesTier1,
			condrixTier2: stats.FlotillaGroundBadgesTier2,
			condrixTier3: stats.FlotillaGroundBadgesTier3,
			murexTier1: stats.FlotillaSpaceBadgesTier1,
			murexTier2: stats.FlotillaSpaceBadgesTier2,
			murexTier3: stats.FlotillaSpaceBadgesTier3
		};
		if (stats.MechSurvivalScoreMax) this.orphixVenomScore = stats.MechSurvivalScoreMax;
		this.happyZephyrScore = stats.ZephyrScore ?? 0;
		this.kDriveRaces = Race.fromRaceObject(stats.Races);
		if (stats.PortalEventScore) this.gateCrash = stats.PortalEventScore;
		if (stats.RiotMoaEventScore) this.falseProfitMissionScore = stats.RiotMoaEventScore;
		if (stats.RiotMoaEventScoreMax) this.falseProfitEventScore = stats.RiotMoaEventScoreMax;
		if (stats.ProjectSinisterEventScore) this.shadowDebtEventScore = stats.ProjectSinisterEventScore;
		if (stats.KelaEventBonusScoreMax) this.rathuumEventScore = stats.KelaEventBonusScoreMax;
		if (stats.Halloween19ScoreMax) this.hallowedFlameScoreMax = stats.Halloween19ScoreMax;
		if (stats.SurvivalEventScore) this.survivalWeekenedEventScore = stats.SurvivalEventScore;
		if (stats.InfestedEventScore) this.infestedEventScore = stats.InfestedEventScore;
	}
};
//#endregion
export { Stats as default };
