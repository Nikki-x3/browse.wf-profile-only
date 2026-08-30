import { Locale } from "warframe-worldstate-data";
//#region src/ArchonCrystal.d.ts
interface RawArchonCrystal {
  Color: string;
  UpgradeType: string;
}
/**
 * Represents an Archon shard
 * @module
 */
declare class ArchonCrystal {
  color: string;
  modifier: string;
  /**
   *
   * @param crystal The archon crystal object
   * @param locale The locale to get translations in
   */
  constructor(crystal: RawArchonCrystal, locale?: Locale);
}
//#endregion
export { ArchonCrystal as default };