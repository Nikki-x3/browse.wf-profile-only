import { n as Skin } from "./Skin-DcYAGTZz.mjs";
import { t as ProfileRawColors } from "./Utils-D1MZW1kt.mjs";
import { ColorMap } from "@wfcd/items";
import { Locale } from "warframe-worldstate-data";
//#region src/OperatorLoadOuts.d.ts
interface RawOperatorLoadOuts {
  Skins: string[];
  OperatorAmp?: {
    $oid: string;
  };
  Upgrades: string[];
  AbilityOverride: {
    Ability: string;
    Index: number;
  };
  pricol?: ProfileRawColors;
  sigcol?: ProfileRawColors;
  attcol?: ProfileRawColors;
  syancol?: ProfileRawColors;
  eyecol?: ProfileRawColors;
  facial?: ProfileRawColors;
  cloth?: ProfileRawColors;
}
/**
 * Player's operator loadout
 * @module
 */
declare class OperatorLoadOuts {
  /**
   * Skins that have been applied to the player's operator.
   */
  skins: Skin[];
  /**
   * Operator amp ID
   */
  operatorAmp?: string;
  /**
   * Applied upgrade IDs
   */
  upgrades: string[];
  abilityOverride: {
    Ability: string;
    Index: number;
  };
  /**
   * Operator primary colors
   */
  primaryColor?: ColorMap;
  /**
   * Operator sigil colors
   */
  sigilColor?: ColorMap;
  /**
   * Operator attachment colors
   */
  attachmentsColor?: ColorMap;
  /**
   * Operator syandana colors
   */
  syandanaColor?: ColorMap;
  /**
   * Operator eye colors
   */
  eyeColor?: ColorMap;
  /**
   * Operator facial colors
   */
  facial?: ColorMap;
  /**
   * Operator cloth colors
   */
  cloth?: ColorMap;
  /**
   *
   * @param {Object} loadout The operator loadout
   */
  constructor(loadout: RawOperatorLoadOuts, locale?: Locale);
}
//#endregion
export { RawOperatorLoadOuts as n, OperatorLoadOuts as t };