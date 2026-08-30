import { n as Skin, t as RawSkin } from "./Skin-DcYAGTZz.mjs";
import { n as RawLoadOutItem, t as LoadOutItem } from "./LoadOutItem-CitCUcW7.mjs";
import { n as XpInfo, t as RawXpItem } from "./XpInfo-DGAlsS6u.mjs";
import { Locale } from "warframe-worldstate-data";
//#region src/LoadOutInventory.d.ts
interface RawLoadOut {
  WeaponSkins: RawSkin[];
  Suits: RawLoadOutItem[];
  Pistols?: RawLoadOutItem[];
  LongGuns?: RawLoadOutItem[];
  Melee?: RawLoadOutItem[];
  XPInfo: RawXpItem[];
}
/**
 * Player loudout
 * @module
 */
declare class LoadOutInventory {
  /**
   * Skins applied to weapons
   */
  weaponSkins: Skin[];
  /**
   * An array of the player's currently equiped Warframe (or powersuits)
   */
  suits: LoadOutItem[];
  /**
   * An array of the player's currently equiped secondary weapon
   */
  secondary?: LoadOutItem[];
  /**
   * An array of the player's currently equiped primary weapon
   */
  primary?: LoadOutItem[];
  /**
   * An array of the player's currently equiped melee weapon
   */
  melee?: LoadOutItem[];
  /**
   * Items that have counted towards the players mastery rank
   */
  xpInfo: XpInfo[];
  /**
   *
   * @param item The loadout data
   * @param locale The locale to return loudout items in. Default is en
   * @param withItem Whether or not to include items
   */
  constructor(item: RawLoadOut, locale?: Locale, withItem?: boolean);
}
//#endregion
export { RawLoadOut as n, LoadOutInventory as t };