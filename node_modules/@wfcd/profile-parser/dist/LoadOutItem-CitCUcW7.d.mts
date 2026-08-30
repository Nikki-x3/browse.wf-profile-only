import { n as RawDate } from "./Utils-D1MZW1kt.mjs";
import { n as RawItemConfig, t as ItemConfig } from "./ItemConfig-uxRf3GAy.mjs";
import { n as RawPolarity, t as Polarity } from "./Polarity-BWadoIXU.mjs";
import { ColorMap, Item, RawColors } from "@wfcd/items";
import { Locale } from "warframe-worldstate-data";
//#region src/LoadOutItem.d.ts
interface RawLoadOutItem {
  ItemId: {
    $oid: string;
  };
  ItemType: string;
  ItemName?: string;
  Configs: RawItemConfig[];
  UpgradeType?: string;
  UpgradeFingerprint?: unknown;
  Features: number;
  UpgradeVer: number;
  XP?: number;
  Polarized?: number;
  Polarity?: RawPolarity[];
  FocusLens?: string;
  CustomizationSlotPurchases?: number;
  pricol?: RawColors;
  sigcol?: RawColors;
  ugly?: boolean;
  attcol?: RawColors;
  syancol?: RawColors;
  InfestationDate?: RawDate;
}
/**
 * An an item in LoadOutInventory
 * @module
 */
declare class LoadOutItem {
  /**
   * Item ID
   */
  itemId: string;
  /**
   * Item unique name
   */
  uniqueName: string;
  /**
   * Item in-game name
   */
  name?: string;
  /**
   * Complete item from @wfcd/items
   */
  item?: Item;
  /**
   * The name of the Lich, Sister, or Technocyte
   */
  nemesis?: string;
  /**
   * Configuration for this weapon. Such as colors and skins applied by the player
   */
  configs: ItemConfig[];
  /**
   * The upgrade that was applied to this weapon
   */
  upgradeType?: string;
  /**
   * Information on the upgradeType that was applied
   * TODO need model for for fingerprint
   */
  upgradeFingerprint: unknown;
  features: number;
  upgradeVer: number;
  /**
   * XP earned with this weapon
   */
  xp?: number;
  /**
   * How many mod slots are currently polarized.
   */
  polarized?: number;
  /**
   * Which polarity types exist on the weapon
   */
  polarity?: Polarity[];
  /**
   * Focus lens applied
   */
  focuseLens?: string;
  customizationSlotPurchases: number;
  /**
   * Primary colors applied to item if they exist
   */
  primaryColor?: ColorMap;
  /**
   * Sigil colors applied to item if they exist
   */
  sigilColor?: ColorMap;
  /**
   * Whether prime details are enabled or not
   */
  enablePrime: boolean;
  /**
   * Attachment colors applied to item if they exist
   */
  attachmentsColor?: ColorMap;
  /**
   * Syandana colors applied to item if they exist
   */
  syandanaColor?: ColorMap;
  /**
   * If set will show when the player's warframe was infested.
   */
  infestationDate?: Date;
  /**
   *
   * @param {Object} loadOutItem The loadout item from LoadoutInventory
   * @param {string} [locale='en'] The locale to return item in
   */
  constructor(loadOutItem: RawLoadOutItem, locale?: Locale);
}
//#endregion
export { RawLoadOutItem as n, LoadOutItem as t };