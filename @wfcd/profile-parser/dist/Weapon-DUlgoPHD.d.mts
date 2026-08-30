//#region src/Weapon.d.ts
interface RawWeapon {
  type: string;
  xp: number;
  equipTime: number;
  headShots: number;
  hits: number;
  assists: number;
  kills: number;
  fired: number;
}
/**
 * Represents a player's used weapon stats
 * @module
 */
declare class Weapon {
  uniqueName: string;
  xp: number;
  equipTime: number;
  headShots: number;
  hits: number;
  assists: number;
  kills: number;
  fired: number;
  /**
   *
   * @param weapon The weapon stats being parsed
   */
  constructor(weapon: RawWeapon);
}
//#endregion
export { Weapon as n, RawWeapon as t };