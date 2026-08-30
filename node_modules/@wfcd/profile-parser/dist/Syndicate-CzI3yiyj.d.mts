import { Locale } from "warframe-worldstate-data";
//#region src/Syndicate.d.ts
interface RawAffiliation {
  Tag: string;
  Standing: number;
  Title: number;
}
/**
 * Represents a syndicate
 * @module
 */
declare class Syndicate {
  /**
   * Name of the syndicate
   */
  name: string;
  /**
   * Current standing the player has with the syndicate
   */
  standing: number;
  /**
   * The player's current syndicate title
   */
  title: number;
  /**
   * @param affiliation The syndicate data
   * @param locale  locale code
   */
  constructor(affiliation: RawAffiliation, locale?: Locale);
}
//#endregion
export { Syndicate as n, RawAffiliation as t };