//#region src/LoadOutPreset.d.ts
interface RawSlotPreset {
  ItemId?: {
    $oid: string;
  };
  mod?: number;
  cus?: number;
  hide?: boolean;
}
interface RawLoadOutPreset {
  FocusSchool: string;
  PresetIcon: string;
  Favorite: boolean;
  n: string;
  s: RawSlotPreset;
  l?: RawSlotPreset;
  p?: RawSlotPreset;
  h?: RawSlotPreset;
  m?: RawSlotPreset;
  a?: RawSlotPreset;
  b?: RawSlotPreset;
}
declare class SlotPreset {
  id?: string;
  modPreset?: string;
  appearancePreset?: string;
  isHidden: boolean;
  constructor(slot: RawSlotPreset);
}
declare class LoadOutPreset {
  /**
   * Focus School
   */
  focusSchool: string;
  /**
   * Preset icon
   *
   * Note:
   * Icon in-game seems to be an image of whatever Warframe is equipped on it
   */
  icon: string;
  /**
   * Whether this preset is a favorite
   */
  isFavorite: boolean;
  /**
   * Preset name
   */
  name: string;
  /**
   * Warframe equipped in preset
   */
  warframe: SlotPreset;
  /**
   * Primary equipped in preset
   */
  primary?: SlotPreset;
  /**
   * Secondary equipped in preset
   */
  secondary?: SlotPreset;
  /**
   * Heavy equipped in preset
   */
  heavy?: SlotPreset;
  /**
   * Melee equiped in preset
   */
  melee?: SlotPreset;
  /**
   * Exalted ability
   */
  exalted?: SlotPreset;
  /**
   * Secondary exalted ability
   *
   * i.e Sevagoth has his shadow and his shadow's claws both of which can be modded separately
   */
  exaltedB?: SlotPreset;
  constructor(preset: RawLoadOutPreset);
}
//#endregion
export { RawLoadOutPreset as n, LoadOutPreset as t };