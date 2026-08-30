import { WorldStateDate } from "warframe-worldstate-data/utilities";
import { Item, RawColors } from "@wfcd/items";
//#region src/Utils.d.ts
/**
 * interface for DE's ID data
 */
interface RawId {
  $oid: string;
}
type RawDate = WorldStateDate;
interface ProfileRawColors {
  t0?: number;
  t1?: number;
  t2?: number;
  t3?: number;
  m0?: number;
  m1?: number;
  en?: number;
  e1?: number;
}
/**
 * Map base10 int colors to hex color strings
 * @param colors color map
 */
declare const mapToHex: (colors: ProfileRawColors) => RawColors;
/**
 * Find an item by Item#uniqueName
 * @param {string} name string with which to query
 * @param {string} locale locale to use for internationalization
 * @returns {Item}
 */
declare const find: (name: string, locale?: string) => Item;
declare const numberToLetter: (num: number) => string;
//#endregion
export { mapToHex as a, find as i, RawDate as n, numberToLetter as o, RawId as r, ProfileRawColors as t };