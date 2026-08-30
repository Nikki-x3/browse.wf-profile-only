//#region src/Enemy.d.ts
interface RawEnemy {
  type: string;
  kills: number;
  headshots: number;
  executions: number;
  assists: number;
  deaths: number;
}
/**
 * An enemy killed/executed by player
 */
declare class Enemy {
  /**
   * Enemy's unique name
   */
  uniqueName: string;
  /**
   * How many times the player has killed this enemy type
   */
  kills: number;
  /**
   * The amount of kills that were headshots
   */
  headshots: number;
  /**
   * The amount of kills that were finishers
   */
  executions: number;
  /**
   * The amount of kills that were assits
   */
  assists: number;
  /**
   * How many times this enemy type has killed the player
   */
  deaths: number;
  /**
   * @param enemy The enemy
   */
  constructor(enemy: RawEnemy);
}
//#endregion
export { RawEnemy as n, Enemy as t };