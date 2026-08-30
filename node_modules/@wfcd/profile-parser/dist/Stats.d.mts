import { n as RawAbility, t as Ability } from "./Ability-DcXcbtcE.mjs";
import { n as RawEnemy, t as Enemy } from "./Enemy-Das_tHF5.mjs";
import { n as RawMission, t as Mission } from "./Mission-Dh8poEBh.mjs";
import { n as RawPvp, t as Pvp } from "./Pvp-D0lygyP6.mjs";
import { n as RawRace, t as Race } from "./Race-PxkzCRsy.mjs";
import { n as Scan, t as RawScan } from "./Scan-Cj6jCTNg.mjs";
import { n as Weapon, t as RawWeapon } from "./Weapon-DUlgoPHD.mjs";
//#region src/Stats.d.ts
interface RawStats {
  GuildName: string;
  MissionsCompleted: number;
  MissionsQuit: number;
  MissionsFailed: number;
  MissionsInterrupted: number;
  MissionsDumped: number;
  PickupCount: number;
  Weapons: RawWeapon[];
  Enemies: RawEnemy[];
  ExcavationEventScoreMax?: number;
  ForestEventScoreMax?: number;
  ForestEventScoreSum?: number;
  MeleeKills: number;
  Abilities: RawAbility[];
  CiphersSolved: number;
  CiphersFailed: number;
  Income: number;
  TimePlayedSec: number;
  CipherTime: number;
  Rating: number;
  Rank: number;
  Deaths: number;
  PlayerLevel: number;
  Missions: RawMission[];
  HealCount: number;
  HiveEventScore?: number;
  HiveEventScoreSum?: number;
  InvasionEventGrineerScore?: number;
  InvasionEventCorpusScore?: number;
  Scans: RawScan[];
  ReviveCount: number;
  FomorianEventScore?: number;
  PVP?: RawPvp[];
  PVPSpeedballTies?: number;
  PVPSpeedballChecks?: number;
  PVPSpeedballGoals?: number;
  PVPSpeedballInterceptions?: number;
  PVPSpeedballSteals?: number;
  PVPSpeedballPoints?: number;
  PVPSpeedballLosses?: number;
  PVPSpeedballAssists?: number;
  PVPSpeedballWins?: number;
  PVPSpeedballSaves?: number;
  PVPSpeedballPasses?: number;
  DojoObstacleScore?: number;
  PvpGamesPendingMask?: number;
  DedicatedServerGamesCompleted?: number;
  ColonistRescueEventScoreMax?: number;
  AmbulasEventScoreMax?: number;
  SentinelGameScore?: number;
  AmalgamEventScoreMax?: number;
  FlotillaEventScore?: number;
  FlotillaGroundBadgesTier1?: number;
  FlotillaGroundBadgesTier2?: number;
  FlotillaGroundBadgesTier3?: number;
  FlotillaSpaceBadgesTier1?: number;
  FlotillaSpaceBadgesTier2?: number;
  FlotillaSpaceBadgesTier3?: number;
  MechSurvivalScoreMax: number;
  ZephyrScore?: number;
  Races: RawRace;
  PortalEventScore?: number;
  RiotMoaEventScore?: number;
  RiotMoaEventScoreMax?: number;
  ProjectSinisterEventScore?: number;
  KelaEventBonusScoreMax?: number;
  Halloween19ScoreMax?: number;
  SurvivalEventScore?: number;
  InfestedEventScore?: number;
}
interface Lunaro {
  ties: number;
  checks: number;
  goals: number;
  interceptions: number;
  steals: number;
  points: number;
  losses: number;
  assists: number;
  wins: number;
  saves: number;
  passes: number;
}
interface ScarletSpear {
  eventScore: number;
  condrixTier1: number;
  condrixTier2: number;
  condrixTier3: number;
  murexTier1: number;
  murexTier2: number;
  murexTier3: number;
}
/**
 * A player's overall career stats
 * @module
 */
declare class Stats {
  /**
   * Guild name
   */
  guildName: string;
  /**
   * Missions completed
   */
  missionsCompleted: number;
  /**
   * Missions quit
   */
  missionsQuit: number;
  /**
   * Misions failed
   */
  missionsFailed: number;
  /**
   * Missions interrupted
   */
  missionsInterrupted: number;
  /**
   * Missions dumped
   */
  missionsDumped: number;
  /**
   * Items picked up
   */
  pickupCount: number;
  /**
   * Stats per weapon
   */
  weapons: Weapon[];
  /**
   * Stats on enemy encounters.
   */
  enemies: Enemy[];
  /**
   * Max score for Operation: Cryotic Front
   */
  excavationEventScoreMax?: number;
  /**
   * Max scoring for The Cicero crisis
   */
  forestEventScoreMax?: number;
  /**
   * Clan scoring for The Cicero crisis
   */
  forestEventScoreSum?: number;
  /**
   * Melee kills
   */
  meleeKills: number;
  /**
   * Used abilities
   */
  abilities: Ability[];
  /**
   * Ciphers completed successfully
   */
  ciphersSolved: number;
  /**
   * Ciphers failed
   */
  ciphersFailed: number;
  /**
   * Gross income
   */
  income: number;
  /**
   * Total play time since account creation
   */
  timePlayedSec: number;
  /**
   * Average time to hack a panel
   */
  cipherTime: number;
  /**
   * N/A
   */
  rating: number;
  /**
   * Mastery rank
   */
  rank: number;
  /**
   * Total deaths since account creation
   */
  deaths: number;
  /**
   * Mastery rank
   */
  playerLevel: number;
  /**
   * List of missions and high scores
   */
  missions: Mission[];
  /**
   * Team heals
   */
  healCount: number;
  /**
   * Event Scores for Operation breeding grounds
   */
  breedGrounds?: {
    personalScore: number;
    clanScore: number;
  };
  /**
   * Event Scores for The Gradivus Dilemma
   */
  gradivusDilemma?: {
    grineer: number;
    corpus: number;
  };
  /**
   * List of scanned Warframe objects
   */
  scans: Scan[];
  /**
   * Team revives
   */
  reviveCount: number;
  /**
   * Score for Operation: Eyes of Blight
   */
  fomorianEventScore?: number;
  /**
   * Conclave scores
   */
  pvp: Pvp[];
  /**
   * Lunaro stats
   */
  lunaro: Lunaro;
  /**
   * Dojo obstacle course goal
   */
  dojoObstacleScore: number;
  /**
   * N/A
   */
  pvpGamesPendingMask: number;
  /**
   * N/A
   */
  dedicatedServerGamesCompleted: number;
  /**
   * Event score for the Pacifism Defect
   */
  pacifismDefect?: number;
  /**
   * Score for operation Ambulas reborn.
   */
  ambulasReborn?: number;
  /**
   * Score for Wyrmius mini game
   */
  sentinelGameScore?: number;
  /**
   * Event score for operation hostile merger
   */
  amalgamEventScoreMax?: number;
  /**
   * Operation Scarlet spear event score and badges
   */
  scarletSpear?: ScarletSpear;
  /**
   * Operation: Orphix Venom score
   */
  orphixVenomScore?: number;
  /**
   * Play's Highest score in Happy Zephyr
   */
  happyZephyrScore: number;
  /**
   * K-Drive races
   */
  kDriveRaces: Race[];
  /**
   * Operation Gate Crash event
   */
  gateCrash?: number;
  /**
   * Per mission score for Operation: False Profit
   */
  falseProfitMissionScore?: number;
  /**
   * Total even score for Operation: False Profit
   */
  falseProfitEventScore?: number;
  /**
   * Operation: Shadow Debt event score
   */
  shadowDebtEventScore?: number;
  /**
   * Operation: Rathuum event score
   */
  rathuumEventScore?: number;
  /**
   * Hollowed flame event max score
   */
  hallowedFlameScoreMax?: number;
  /**
   * Survival Weekend event score
   */
  survivalWeekenedEventScore?: number;
  /**
   * N/A
   */
  infestedEventScore?: number;
  /**
   *
   * @param stats Player stats
   */
  constructor(stats: RawStats);
}
//#endregion
export { RawStats, Stats as default };