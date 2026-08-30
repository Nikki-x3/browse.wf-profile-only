import ChallengeProgress from "./ChallengeProgress.mjs";
import Intrinsics from "./Intrinsics.mjs";
import LoadOutInventory from "./LoadOutInventory.mjs";
import LoadOutPreset from "./LoadOutPreset.mjs";
import Mission from "./Mission.mjs";
import OperatorLoadOuts from "./OperatorLoadOuts.mjs";
import Syndicate from "./Syndicate.mjs";
import { parseDate } from "warframe-worldstate-data/utilities";
//#region src/Profile.ts
/**
* A player's profile
* @module
*/
var Profile = class {
	/**
	* Player's account ID
	*/
	accountId;
	/**
	* In-game name
	*/
	displayName;
	/**
	* List of usernames across supported platforms
	*/
	platformNames;
	/**
	* Mastery rank
	*/
	masteryRank;
	/**
	* Load out preset equipped
	*/
	preset;
	/**
	* Current loadout
	*/
	loadout;
	/**
	* Railjack and drifter Intrinsics
	*/
	intrinsics;
	/**
	* Nightwave challenges progress
	*/
	challengeProgress;
	/**
	* Guild ID
	*/
	guildId;
	/**
	* Guild name
	*/
	guildName;
	/**
	* Guild tier
	*/
	guildTier;
	/**
	* Guild XP
	*/
	guildXp;
	/**
	* Guild class
	*/
	guildClass;
	/**
	* Guild emblem.
	*/
	guildEmblem;
	/**
	* Alliance ID
	*/
	allianceId;
	/**
	* Assassins currently asfter the player
	*/
	deathMarks;
	/**
	* Whether or not the player is qualified as a target for Zanuka
	* @type {boolean}
	*/
	harvestable;
	/**
	* Whether or not the player is qualified as a target for a syndicate death squad
	*/
	deathSquadable;
	/**
	* Date the account was created
	*/
	created;
	/**
	* Whether the user has migrated to console or not
	*/
	migratedToConsole;
	/**
	* List of completed missions and their completions
	*/
	missions;
	/**
	* Player standing and title across all syndicates
	*/
	syndicates;
	/**
	* Daily standing per Syndicate
	*
	* Faction syndicates all share daily standing
	*/
	dailyStanding;
	/**
	* Daily focus
	*/
	dailyFocus;
	/**
	* Player wishlist for in-game market items
	*/
	wishList;
	/**
	* Whether the player has unlocked their operator or not
	*/
	unlockedOperator;
	/**
	* Whether the player has unlocked their alignment or not
	*/
	unlockedAlignment;
	/**
	* Operator loadout
	*/
	operatorLoadouts;
	/**
	* Player's alignment
	*/
	alignment;
	/**
	*
	* @param profile The profile data to parse
	* @param locale The locale to return in where possible
	* @param withItem Whether or not to include items
	*/
	constructor(profile, locale = "en", withItem = false) {
		this.accountId = profile.AccountId.$oid;
		this.displayName = profile.DisplayName;
		this.platformNames = profile.PlatformNames ?? [];
		this.masteryRank = profile.PlayerLevel;
		if (profile.LoadOutPreset) this.preset = new LoadOutPreset(profile.LoadOutPreset);
		this.loadout = new LoadOutInventory(profile.LoadOutInventory, locale, withItem);
		this.intrinsics = new Intrinsics(profile.PlayerSkills ?? {});
		this.challengeProgress = profile.ChallengeProgress.map((c) => new ChallengeProgress(c));
		if (profile.GuildId?.$oid) this.guildId = profile.GuildId.$oid;
		this.guildName = profile.GuildName;
		this.guildTier = profile.GuildTier;
		this.guildXp = profile.GuildXp;
		this.guildClass = profile.GuildClass;
		this.guildEmblem = profile.GuildEmblem;
		if (profile.AllianceId) this.allianceId = profile.AllianceId.$oid;
		this.deathMarks = profile.DeathMarks;
		this.harvestable = profile.Harvestable;
		this.deathSquadable = profile.DeathSquadable;
		this.created = parseDate(profile.Created);
		this.migratedToConsole = profile.MigratedToConsole;
		this.missions = profile.Missions.map((m) => new Mission(m, locale));
		this.syndicates = profile.Affiliations?.map((a) => new Syndicate(a, locale)) ?? [];
		this.dailyStanding = {
			daily: profile.DailyAffiliation,
			conclave: profile.DailyAffiliationPvp,
			simaris: profile.DailyAffiliationLibrary,
			ostron: profile.DailyAffiliationCetus,
			quills: profile.DailyAffiliationQuills,
			solaris: profile.DailyAffiliationSolaris,
			ventKids: profile.DailyAffiliationVentkids,
			voxSolaris: profile.DailyAffiliationVox,
			entrati: profile.DailyAffiliationEntrati,
			necraloid: profile.DailyAffiliationNecraloid,
			holdfasts: profile.DailyAffiliationZariman,
			kahl: profile.DailyAffiliationKahl,
			cavia: profile.DailyAffiliationCavia,
			hex: profile.DailyAffiliationHex
		};
		this.dailyFocus = profile.DailyFocus;
		this.wishList = profile.Wishlist;
		this.unlockedOperator = profile.UnlockedOperator;
		this.unlockedAlignment = profile.UnlockedAlignment;
		this.operatorLoadouts = profile.OperatorLoadOuts?.map((ol) => new OperatorLoadOuts(ol, locale));
		if (profile.Alignment) this.alignment = {
			wisdom: profile.Alignment?.Wisdom,
			alignment: profile.Alignment?.Alignment
		};
	}
};
//#endregion
export { Profile as default };
