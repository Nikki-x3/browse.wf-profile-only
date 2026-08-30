import { Locale } from "warframe-worldstate-data";
//#region src/Mission.d.ts
interface RawMission {
  Tag?: string | undefined;
  type?: string;
  Mission?: string;
  highScore?: number;
  Completes?: number;
  Tier?: number;
}
/**
 * A mission completed by the player
 * @module
 */
declare class Mission {
  /**
   * Node name
   */
  node: string;
  /**
   * Node unique name
   */
  nodeKey: string;
  /**
   * Node mission type
   */
  missionType: string;
  /**
   * Node faction
   */
  faction: string;
  /**
   * Highest score earned in this mission
   */
  highScore?: number;
  /**
   * How many times the mission was completed
   */
  completes?: number;
  /**
   * Denotes a steel path node
   */
  tier?: number;
  /**
   *
   * @param mission The mission data
   * @param locale The locale to return in
   */
  constructor(mission: RawMission, locale?: Locale);
}
//#endregion
export { RawMission as n, Mission as t };