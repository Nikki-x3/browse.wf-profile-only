//#region src/ChallengeProgress.d.ts
interface RawChallengeProgress {
  Name: string;
  Progress: number;
}
/**
 * Player completed or in progress challenges
 * @module
 */
declare class ChallengeProgress {
  name: string;
  progress: number;
  /**
   *
   * @param challenge The challenge object to parse
   */
  constructor(challenge: RawChallengeProgress);
}
//#endregion
export { RawChallengeProgress as n, ChallengeProgress as t };