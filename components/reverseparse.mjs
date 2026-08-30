import type { RawProfile } from '../node_modules/@wfcd/profile-parser/dist/Profile.mjs'; // Adjust path as necessary

/**
 * Serializes a clean Profile object back into its original RawProfile JSON format.
 */
export function serializeProfile(profile: any): RawProfile {
  return {
    AccountId: { $oid: profile.accountId },
    DisplayName: profile.displayName,
    PlatformNames: profile.platformNames.length > 0 ? profile.platformNames : undefined,
    PlayerLevel: profile.masteryRank,
    
    // Assumes child objects implement a serialization method like toJSON() or toRaw()
    LoadOutPreset: profile.preset ? profile.preset.toJSON() : undefined,
    LoadOutInventory: profile.loadout ? profile.loadout.toJSON() : undefined,
    PlayerSkills: profile.intrinsics ? profile.intrinsics.toJSON() : {},
    
    ChallengeProgress: (profile.challengeProgress || []).map((c: any) => c.toJSON()),
    
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
      ? { $date: { $numberLong: profile.created.getTime().toString() } } as any
      : profile.created,
      
    MigratedToConsole: profile.migratedToConsole ?? false,
    Missions: (profile.missions || []).map((m: any) => m.toJSON()),
    
    // Maps back Syndicates into the Affiliations key
    Affiliations: (profile.syndicates || []).map((s: any) => s.toJSON()),
    
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
    
    OperatorLoadOuts: (profile.operatorLoadouts || []).map((ol: any) => ol.toJSON()),
    
    Alignment: profile.alignment ? {
      Wisdom: profile.alignment.wisdom,
      Alignment: profile.alignment.alignment
    } : undefined
  };
}
