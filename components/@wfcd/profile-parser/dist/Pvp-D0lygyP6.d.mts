//#region src/Pvp.d.ts
interface RawPvp {
  type: string;
  suitDeaths?: number;
  suitKills?: number;
  weaponKills?: number;
}
/**
 * Player's conclave stats
 * @module
 */
declare class Pvp {
  /**
   * PVP match unique name
   */
  uniqueName: string;
  /**
   * Deaths for this match
   */
  warframeDeaths?: number;
  /**
   * Warframe kills
   */
  warframeKills?: number;
  /**
   * Weapon killes
   */
  weaponKills?: number;
  /**
   *
   * @param {Object} pvp PVP data to parse
   */
  constructor(pvp: RawPvp);
}
//#endregion
export { RawPvp as n, Pvp as t };