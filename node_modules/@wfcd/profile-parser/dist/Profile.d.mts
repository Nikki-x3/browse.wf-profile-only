import { n as RawChallengeProgress, t as ChallengeProgress } from "./ChallengeProgress-BrxgSqf4.mjs";
import { n as RawIntrinsics, t as Intrinsics } from "./Intrinsics-BhwKpPoY.mjs";
import { n as RawDate, r as RawId } from "./Utils-D1MZW1kt.mjs";
import { n as RawLoadOut, t as LoadOutInventory } from "./LoadOutInventory-D6L-Xf2n.mjs";
import { n as RawLoadOutPreset, t as LoadOutPreset } from "./LoadOutPreset-CUV29lLL.mjs";
import { n as RawMission, t as Mission } from "./Mission-Dh8poEBh.mjs";
import { n as RawOperatorLoadOuts, t as OperatorLoadOuts } from "./OperatorLoadOuts-Bh2yMsL2.mjs";
import { n as Syndicate, t as RawAffiliation } from "./Syndicate-CzI3yiyj.mjs";
import { Locale } from "warframe-worldstate-data";
//#region src/Profile.d.ts
interface RawProfile {
  AccountId: {
    $oid: string;
  };
  DisplayName: string;
  PlatformNames?: string[];
  PlayerLevel: number;
  LoadOutPreset: RawLoadOutPreset;
  LoadOutInventory: RawLoadOut;
  PlayerSkills: RawIntrinsics;
  ChallengeProgress: RawChallengeProgress[];
  GuildId: RawId;
  GuildName: string;
  GuildTier: number;
  GuildXp: number;
  GuildClass: number;
  GuildEmblem: boolean;
  AllianceId?: RawId;
  DeathMarks: string[];
  Harvestable: boolean;
  DeathSquadable: boolean;
  Created: RawDate;
  MigratedToConsole: boolean;
  Missions: RawMission[];
  Affiliations: RawAffiliation[];
  DailyAffiliation: number;
  DailyAffiliationPvp?: number;
  DailyAffiliationLibrary?: number;
  DailyAffiliationCetus?: number;
  DailyAffiliationQuills?: number;
  DailyAffiliationSolaris?: number;
  DailyAffiliationVentkids?: number;
  DailyAffiliationVox?: number;
  DailyAffiliationEntrati?: number;
  DailyAffiliationNecraloid?: number;
  DailyAffiliationZariman?: number;
  DailyAffiliationKahl?: number;
  DailyAffiliationCavia?: number;
  DailyAffiliationHex?: number;
  DailyFocus?: number;
  Wishlist?: string[];
  UnlockedOperator: boolean;
  UnlockedAlignment: boolean;
  OperatorLoadOuts: RawOperatorLoadOuts[];
  Alignment: {
    Wisdom: number;
    Alignment: number;
  };
}
/**
 * A player's profile
 * @module
 */
declare class Profile {
  /**
   * Player's account ID
   */
  accountId: string;
  /**
   * In-game name
   */
  displayName: string;
  /**
   * List of usernames across supported platforms
   */
  platformNames: string[];
  /**
   * Mastery rank
   */
  masteryRank: number;
  /**
   * Load out preset equipped
   */
  preset?: LoadOutPreset;
  /**
   * Current loadout
   */
  loadout: LoadOutInventory;
  /**
   * Railjack and drifter Intrinsics
   */
  intrinsics?: Intrinsics;
  /**
   * Nightwave challenges progress
   */
  challengeProgress: ChallengeProgress[];
  /**
   * Guild ID
   */
  guildId?: string;
  /**
   * Guild name
   */
  guildName?: string;
  /**
   * Guild tier
   */
  guildTier?: number;
  /**
   * Guild XP
   */
  guildXp?: number;
  /**
   * Guild class
   */
  guildClass?: number;
  /**
   * Guild emblem.
   */
  guildEmblem: boolean;
  /**
   * Alliance ID
   */
  allianceId?: string;
  /**
   * Assassins currently asfter the player
   */
  deathMarks: string[];
  /**
   * Whether or not the player is qualified as a target for Zanuka
   * @type {boolean}
   */
  harvestable: boolean;
  /**
   * Whether or not the player is qualified as a target for a syndicate death squad
   */
  deathSquadable: boolean;
  /**
   * Date the account was created
   */
  created: Date;
  /**
   * Whether the user has migrated to console or not
   */
  migratedToConsole: boolean;
  /**
   * List of completed missions and their completions
   */
  missions: Mission[];
  /**
   * Player standing and title across all syndicates
   */
  syndicates?: Syndicate[];
  /**
   * Daily standing per Syndicate
   *
   * Faction syndicates all share daily standing
   */
  dailyStanding: {
    daily: number;
    conclave?: number;
    simaris?: number;
    ostron?: number;
    quills?: number;
    solaris?: number;
    ventKids?: number;
    voxSolaris?: number;
    entrati?: number;
    necraloid?: number;
    holdfasts?: number;
    kahl?: number;
    cavia?: number;
    hex?: number;
  };
  /**
   * Daily focus
   */
  dailyFocus?: number;
  /**
   * Player wishlist for in-game market items
   */
  wishList?: string[];
  /**
   * Whether the player has unlocked their operator or not
   */
  unlockedOperator: boolean;
  /**
   * Whether the player has unlocked their alignment or not
   */
  unlockedAlignment: boolean;
  /**
   * Operator loadout
   */
  operatorLoadouts?: OperatorLoadOuts[];
  /**
   * Player's alignment
   */
  alignment?: {
    wisdom: number;
    alignment: number;
  };
  /**
   *
   * @param profile The profile data to parse
   * @param locale The locale to return in where possible
   * @param withItem Whether or not to include items
   */
  constructor(profile: RawProfile, locale?: Locale, withItem?: boolean);
}
//#endregion
export { RawProfile, Profile as default };