import { Item } from "@wfcd/items";
//#region src/XpInfo.d.ts
interface RawXpItem {
  ItemType: string;
  XP: number;
}
/**
 * An item that has contributed to a player's mastery rank
 * @module
 */
declare class XpInfo {
  /**
   * Unique name
   */
  uniqueName: string;
  /**
   * XP earned
   */
  xp: number;
  /**
   * The item corrosponding to the unique name.
   */
  item?: Item;
  /**
   *
   * @param info The info for a given ranked item
   * @param locale langauge to return item in
   * @param withItem Whether or not to include items
   */
  constructor(info: RawXpItem, locale?: string, withItem?: boolean);
}
//#endregion
export { XpInfo as n, RawXpItem as t };