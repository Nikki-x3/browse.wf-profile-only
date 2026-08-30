//#region src/Scan.d.ts
interface RawScan {
  type: string;
  scans: number;
}
/**
 * Represents an enemy scanned to the codex
 * @module
 */
declare class Scan {
  /**
   * Enemy unique name
   * @type {String}
   */
  uniqueName: string;
  /**
   * Number of scans done
   * @type {number}
   */
  scans: number;
  /**
   * @param {Object} scan The scanned Warframe object
   */
  constructor(scan: RawScan);
}
//#endregion
export { Scan as n, RawScan as t };