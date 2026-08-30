import { n as Skin } from "./Skin-DcYAGTZz.mjs";
import { t as ProfileRawColors } from "./Utils-D1MZW1kt.mjs";
import { ColorMap } from "@wfcd/items";
import { Locale } from "warframe-worldstate-data";
//#region src/ItemConfig.d.ts
interface RawItemConfig {
  Skins?: string[];
  PvpUpgrades?: string[];
  pricol?: ProfileRawColors;
  sigcol?: ProfileRawColors;
  attcol?: ProfileRawColors;
  syancol?: ProfileRawColors;
}
/**
 * Item customizations such as colors and applied skins
 * @module
 */
declare class ItemConfig {
  /**
   * Array of unique names for the skins applied to item
   */
  skins?: Skin[];
  /**
   * Array of PVP unique name upgrades applied
   */
  conclaveUpgrades?: string[];
  /**
   * Primary colors applied to item if they exist
   */
  primaryColor?: ColorMap;
  /**
   * Sigil colors applied to item if they exist
   */
  sigilColor?: ColorMap;
  /**
   * Attachment colors applied to item if they exist
   */
  attachmentsColor?: ColorMap;
  /**
   * Syandana colors applied to item if they exist
   */
  syandanaColor?: ColorMap;
  /**
   *
   * @param config The configuration
   */
  constructor(config: RawItemConfig, locale?: Locale);
}
//#endregion
export { RawItemConfig as n, ItemConfig as t };