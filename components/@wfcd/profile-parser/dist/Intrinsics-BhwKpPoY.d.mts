//#region src/Intrinsics.d.ts
interface RawIntrinsics {
  LPS_ENGINEERING?: number;
  LPS_GUNNERY?: number;
  LPS_PILOTING?: number;
  LPS_TACTICAL?: number;
  LPS_COMMAND?: number;
  LPP_DRIFTER?: number;
  LPS_DRIFT_RIDING?: number;
  LPS_DRIFT_COMBAT?: number;
  LPS_DRIFT_OPPORTUNITY?: number;
  LPS_DRIFT_ENDURANCE?: number;
  LPP_SPACE?: number;
}
/**
 * Player's intrinsics ranks
 * @module
 */
declare class Intrinsics {
  /**
   * Intrinsic points for railjack
   */
  railjack: number;
  /**
   * Railjack engineering rank
   */
  engineering: number;
  /**
   * Railjack gunnery rank
   */
  gunnery: number;
  /**
   * Railjack piloting rank
   */
  piloting: number;
  /**
   * Railjack tactical rank
   */
  tactical: number;
  /**
   * Railjack command rank
   */
  command: number;
  /**
   * Intrinsic points for railjack
   */
  drifter: number;
  /**
   * Drifter riding rank
   */
  riding: number;
  /**
   * Drifter combat rank
   */
  combat: number;
  /**
   * Drifter opportunity rank
   */
  opportunity: number;
  /**
   * Drifter endurance rank
   */
  endurance: number;
  constructor(skills: RawIntrinsics);
}
//#endregion
export { RawIntrinsics as n, Intrinsics as t };