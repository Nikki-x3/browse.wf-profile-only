function serializeProfileFromJson(jsonInput) {
  // Parse the input if it's a JSON string; otherwise assume it's already parsed
  const profile = typeof jsonInput === 'string' ? JSON.parse(jsonInput) : jsonInput;

  return {
    AccountId: profile.accountId ? { $oid: profile.accountId } : undefined,
    DisplayName: profile.displayName,
    PlatformNames: profile.platformNames?.length > 0 ? profile.platformNames : undefined,
    PlayerLevel: profile.masteryRank,
    
    // Direct assignment instead of .toJSON() because JSON data is already raw data
    LoadOutPreset: profile.preset || undefined,
    LoadOutInventory: profile.loadout || undefined,
    PlayerSkills: profile.intrinsics || {},
    
    // Direct mapping instead of calling .toJSON()
    ChallengeProgress: profile.challengeProgress || [],
    
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
    
    // JSON strings cannot store actual Date instances; dates will be strings (e.g., ISO format)
    Created: profile.created 
      ? { $date: { $numberLong: new Date(profile.created).getTime().toString() } }
      : undefined,
      
    MigratedToConsole: profile.migratedToConsole ?? false,
    Missions: profile.missions || [],
    
    // Maps back Syndicates into the Affiliations key
    Affiliations: profile.syndicates || [],
    
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
    
    OperatorLoadOuts: profile.operatorLoadouts || [],
    
    Alignment: profile.alignment ? {
      Wisdom: profile.alignment.wisdom,
      Alignment: profile.alignment.alignment
    } : undefined
  };
}