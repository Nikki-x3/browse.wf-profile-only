//#region src/Ability.d.ts
interface RawAbility {
  type: string;
  used: number;
}
/**
 * Represents a players used ability
 * @module
 */
declare class Ability {
  uniqueName: string;
  used: number;
  /**
   * @param ability The ability
   */
  constructor(ability: RawAbility);
}
//#endregion
export { RawAbility as n, Ability as t };