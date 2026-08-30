var ChallengeProgress = class {
	name;
	progress;
	/**
	*
	* @param challenge The challenge object to parse
	*/
	constructor(challenge) {
		/**
		* Name of the challenge
		*/
		this.name = challenge.Name;
		/**
		* Progress towards completing this challenge
		*/
		this.progress = challenge.Progress;
	}
};

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

var Skin = class {
	uniqueName;
	item;
	/**
	*
	* @param skin The skin data  to parse
	* @param locale The locale to return skin item in
	*/
	constructor(skin, locale = "en") {
		/**
		* Unique name
		*/
		this.uniqueName = skin.ItemType;
		//const item = find(skin.ItemType, locale);
		/**
		* The Warframe item that matches the unique name
		*/
		this.item = undefined;
	}
};

var XpInfo = class {
	/**
	* Unique name
	*/
	uniqueName;
	/**
	* XP earned
	*/
	xp;
	/**
	* The item corrosponding to the unique name.
	*/
	item;
	/**
	*
	* @param info The info for a given ranked item
	* @param locale langauge to return item in
	* @param withItem Whether or not to include items
	*/
	constructor(info, locale = "en", withItem = false) {
		this.uniqueName = info.ItemType;
		this.xp = info.XP;
	}
};

var LoadOutItem = class {
	/**
	* Item ID
	*/
	itemId;
	/**
	* Item unique name
	*/
	uniqueName;
	/**
	* Item in-game name
	*/
	name;
	/**
	* Complete item from @wfcd/items
	*/
	item;
	/**
	* The name of the Lich, Sister, or Technocyte
	*/
	nemesis;
	/**
	* Configuration for this weapon. Such as colors and skins applied by the player
	*/
	configs;
	/**
	* The upgrade that was applied to this weapon
	*/
	upgradeType;
	/**
	* Information on the upgradeType that was applied
	* TODO need model for for fingerprint
	*/
	upgradeFingerprint;
	features;
	upgradeVer;
	/**
	* XP earned with this weapon
	*/
	xp;
	/**
	* How many mod slots are currently polarized.
	*/
	polarized;
	/**
	* Which polarity types exist on the weapon
	*/
	polarity;
	/**
	* Focus lens applied
	*/
	focuseLens;
	customizationSlotPurchases;
	/**
	* Primary colors applied to item if they exist
	*/
	primaryColor;
	/**
	* Sigil colors applied to item if they exist
	*/
	sigilColor;
	/**
	* Whether prime details are enabled or not
	*/
	enablePrime;
	/**
	* Attachment colors applied to item if they exist
	*/
	attachmentsColor;
	/**
	* Syandana colors applied to item if they exist
	*/
	syandanaColor;
	/**
	* If set will show when the player's warframe was infested.
	*/
	infestationDate;
	/**
	*
	* @param {Object} loadOutItem The loadout item from LoadoutInventory
	* @param {string} [locale='en'] The locale to return item in
	*/
	constructor(loadOutItem, locale = "en") {
		this.itemId = loadOutItem.ItemId.$oid;
		this.uniqueName = loadOutItem.ItemType;
		if (loadOutItem.ItemName) {
			const [, nemesis] = loadOutItem.ItemName.split("|");
			if (nemesis !== void 0) this.nemesis = toTitleCase(nemesis);
			else this.name = loadOutItem.ItemName;
		}
		if (loadOutItem.UpgradeType) this.upgradeType = loadOutItem.UpgradeType;
		this.upgradeFingerprint = loadOutItem.UpgradeFingerprint;
		this.features = loadOutItem.Features;
		this.upgradeVer = loadOutItem.UpgradeVer;
		this.xp = loadOutItem.XP;
		this.polarized = loadOutItem.Polarized;
		this.focuseLens = loadOutItem.FocusLens;
		this.customizationSlotPurchases = loadOutItem.CustomizationSlotPurchases ?? 0;
		this.enablePrime = loadOutItem.ugly ?? false;
	}
};

var SlotPreset = class {
	id;
	modPreset;
	appearancePreset;
	isHidden;
	constructor(slot) {
		if (slot?.ItemId?.$oid) this.id = slot.ItemId.$oid;
		this.isHidden = slot?.hide ?? false;
	}
};

var LoadOutPreset = class {
	/**
	* Focus School
	*/
	focusSchool;
	/**
	* Preset icon
	*
	* Note:
	* Icon in-game seems to be an image of whatever Warframe is equipped on it
	*/
	icon;
	/**
	* Whether this preset is a favorite
	*/
	isFavorite;
	/**
	* Preset name
	*/
	name;
	/**
	* Warframe equipped in preset
	*/
	warframe;
	/**
	* Primary equipped in preset
	*/
	primary;
	/**
	* Secondary equipped in preset
	*/
	secondary;
	/**
	* Heavy equipped in preset
	*/
	heavy;
	/**
	* Melee equiped in preset
	*/
	melee;
	/**
	* Exalted ability
	*/
	exalted;
	/**
	* Secondary exalted ability
	*
	* i.e Sevagoth has his shadow and his shadow's claws both of which can be modded separately
	*/
	exaltedB;
	constructor(preset) {
		this.icon = preset.PresetIcon;
		this.isFavorite = preset.Favorite;
		this.name = preset.n;
		this.warframe = new SlotPreset(preset.s);
		if (preset.l) this.primary = new SlotPreset(preset.l);
		if (preset.p) this.secondary = new SlotPreset(preset.p);
		if (preset.h) this.heavy = new SlotPreset(preset.h);
		if (preset.m) this.melee = new SlotPreset(preset.m);
		if (preset.a) this.exalted = new SlotPreset(preset.a);
		if (preset.b) this.exaltedB = new SlotPreset(preset.b);
	}
};

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
		const uniqueName = mission.type || mission.Tag
		this.nodeKey = uniqueName;
		if (mission.highScore) this.highScore = mission.highScore;
		if (mission.Completes) this.completes = mission.Completes;
		if (mission.Tier) this.tier = mission.Tier;
	}
};

var OperatorLoadOuts = class {
	/**
	* Skins that have been applied to the player's operator.
	*/
	skins;
	/**
	* Operator amp ID
	*/
	operatorAmp;
	/**
	* Applied upgrade IDs
	*/
	upgrades;
	abilityOverride;
	/**
	* Operator primary colors
	*/
	primaryColor;
	/**
	* Operator sigil colors
	*/
	sigilColor;
	/**
	* Operator attachment colors
	*/
	attachmentsColor;
	/**
	* Operator syandana colors
	*/
	syandanaColor;
	/**
	* Operator eye colors
	*/
	eyeColor;
	/**
	* Operator facial colors
	*/
	facial;
	/**
	* Operator cloth colors
	*/
	cloth;
	/**
	*
	* @param {Object} loadout The operator loadout
	*/
	constructor(loadout, locale = "en") {
		this.skins = loadout.Skins.filter(Boolean).map((s) => new Skin({ ItemType: s }, locale));
		this.operatorAmp = loadout.OperatorAmp?.$oid;
		/**
		* Applied upgrade IDs
		* @type {Array<String>}
		*/
		this.upgrades = loadout.Upgrades;
		this.abilityOverride = loadout.AbilityOverride;
	}
};

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
		this.standing = affiliation.Standing;
		this.title = affiliation.Title;
	}
};

const parseDate = (d) => {
	const contentD = d || epochZero;
	if (typeof contentD.$date?.$numberLong === "string") return new Date(Number.parseInt(contentD.$date.$numberLong, 10));
	if (typeof contentD.$date?.$numberLong === "number") return new Date(contentD.$date.$numberLong);
	const legacyD = d;
	if (typeof legacyD.sec === "string") return /* @__PURE__ */ new Date(1e3 * Number.parseInt(legacyD.sec, 10));
	if (typeof legacyD.sec !== "undefined") return /* @__PURE__ */ new Date(1e3 * legacyD.sec);
	if (typeof d === "number") return new Date(d);
	throw new Error(`Invalid date format ${d}`);
};

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

/**
 * Serializes a clean Profile object back into its original RawProfile JSON format.
 */
function serializeProfile(profile) {
  return {
    AccountId: { $oid: profile.accountId },
    DisplayName: profile.displayName,
    PlatformNames: profile.platformNames.length > 0 ? profile.platformNames : undefined,
    PlayerLevel: profile.masteryRank,
    
    // Assumes child objects implement a serialization method like toJSON() or toRaw()
    LoadOutPreset: profile.preset ? profile.preset.toJSON() : undefined,
    LoadOutInventory: profile.loadout ? profile.loadout.toJSON() : undefined,
    PlayerSkills: profile.intrinsics ? profile.intrinsics.toJSON() : {},
    
    ChallengeProgress: (profile.challengeProgress || []).map((c) => c.toJSON()),
    
    GuildId: profile.guildId ? { $oid: profile.guildId } : undefined,
    GuildName: profile.guildName ?? '',
    GuildTier: profile.guildTier ?? 0,
    GuildXp: profile.guildXp ?? 0,
    GuildClass: profile.guildClass ?? 0,
    GuildEmblem: profile.guildEmblem ?? false,
    
    AllianceId: profile.allianceId ? { $oid: profile.allianceId } : undefined,
    DeathMarks: profile.deathMarks || [],
    Harvestable: profile.harvestable ?? false,
    DeathSquadable: profile.deathSquadable ?? false,
    
    // Reverse parseDate: adjustments may be needed based on your explicit RawDate definition
    Created: profile.created instanceof Date 
      ? { $date: { $numberLong: profile.created.getTime().toString() } }
      : profile.created,
      
    MigratedToConsole: profile.migratedToConsole ?? false,
    Missions: (profile.missions || []).map((m) => m.toJSON()),
    
    // Maps back Syndicates into the Affiliations key
    Affiliations: (profile.syndicates || []).map((s) => s.toJSON()),
    
    // Unpacking dailyStanding container
    DailyAffiliation: profile.dailyStanding?.daily,
    DailyAffiliationPvp: profile.dailyStanding?.conclave,
    DailyAffiliationLibrary: profile.dailyStanding?.simaris,
    DailyAffiliationCetus: profile.dailyStanding?.ostron,
    DailyAffiliationQuills: profile.dailyStanding?.quills,
    DailyAffiliationSolaris: profile.dailyStanding?.solaris,
    DailyAffiliationVentkids: profile.dailyStanding?.ventKids,
    DailyAffiliationVox: profile.dailyStanding?.voxSolaris,
    DailyAffiliationEntrati: profile.dailyStanding?.entrati,
    DailyAffiliationNecraloid: profile.dailyStanding?.necraloid,
    DailyAffiliationZariman: profile.dailyStanding?.holdfasts,
    DailyAffiliationKahl: profile.dailyStanding?.kahl,
    DailyAffiliationCavia: profile.dailyStanding?.cavia,
    DailyAffiliationHex: profile.dailyStanding?.hex,
    
    DailyFocus: profile.dailyFocus,
    Wishlist: profile.wishList,
    UnlockedOperator: profile.unlockedOperator ?? false,
    UnlockedAlignment: profile.unlockedAlignment ?? false,
    
    OperatorLoadOuts: (profile.operatorLoadouts || []).map((ol) => ol.toJSON()),
    
    Alignment: profile.alignment ? {
      Wisdom: profile.alignment.wisdom,
      Alignment: profile.alignment.alignment
    } : undefined
  };
}
