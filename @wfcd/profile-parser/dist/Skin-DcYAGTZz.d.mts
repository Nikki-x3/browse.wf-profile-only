import { Item } from "@wfcd/items";
//#region src/Skin.d.ts
interface RawSkin {
  ItemType: string;
}
/**
 * A skin class
 * @module
 */
declare class Skin {
  uniqueName: string;
  item?: Item;
  /**
   *
   * @param skin The skin data  to parse
   * @param locale The locale to return skin item in
   */
  constructor(skin: RawSkin, locale?: string);
}
/**
 * @deprecated Move to Skin, this is just here to not break anything for early users
 * @param {Object} skin Skin object
 * @returns {Skin} Skin object with possible item
 */
declare const WeaponSkin: (skin: RawSkin) => Skin;
//#endregion
export { Skin as n, WeaponSkin as r, RawSkin as t };