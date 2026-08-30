import { n as RawDate } from "./Utils-D1MZW1kt.mjs";
import Profile, { RawProfile } from "./Profile.mjs";
import Stats, { RawStats } from "./Stats.mjs";
import { Locale } from "warframe-worldstate-data";
//#region src/ProfileParser.d.ts
interface ProfileData {
  Results: RawProfile[];
  TechProjects?: Array<object>;
  XpComponents?: Array<object>;
  XpCacheExpiryDate?: RawDate;
  CeremonyResetDate?: RawDate;
  Stats: RawStats;
}
/**
 * Parser entry point
 * @module
 */
declare class ProfileParser {
  /**
   * Player's profile
   */
  profile: Profile;
  /**
   * N/A
   */
  techProjects: Array<object>;
  /**
   * N/A
   */
  xpComponents: Array<object>;
  /**
   * N/A
   */
  xpCacheExpiryDate: Date;
  /**
   * N/A
   */
  ceremonyResetDate: Date;
  /**
   * Player stats
   */
  stats: Stats;
  /**
   *
   * @param {Object} data The data returned by getProfile endpoint
   * @param {string} locale The locale to return where possible
   * @param {boolean} [withItem=false] Whether or not to include items
   */
  constructor(data: ProfileData, locale?: Locale, withItem?: boolean);
}
//#endregion
export { ProfileParser as default };