import { numberToLetter } from "./Utils.mjs";
import { translatePolarity } from "warframe-worldstate-data/utilities";
//#region src/LoadOutPreset.ts
var SlotPreset = class {
	id;
	modPreset;
	appearancePreset;
	isHidden;
	constructor(slot) {
		if (slot?.ItemId?.$oid) this.id = slot.ItemId.$oid;
		if (slot?.mod !== void 0) this.modPreset = numberToLetter(slot.mod);
		if (slot?.cus !== void 0) this.appearancePreset = numberToLetter(slot.cus);
		this.isHidden = slot?.hide ?? false;
	}
};
var LoadOutPreset = class {
	/**
	* Focus School
	*/
	focusSchool;
	/**
	* Preset icon
	*
	* Note:
	* Icon in-game seems to be an image of whatever Warframe is equipped on it
	*/
	icon;
	/**
	* Whether this preset is a favorite
	*/
	isFavorite;
	/**
	* Preset name
	*/
	name;
	/**
	* Warframe equipped in preset
	*/
	warframe;
	/**
	* Primary equipped in preset
	*/
	primary;
	/**
	* Secondary equipped in preset
	*/
	secondary;
	/**
	* Heavy equipped in preset
	*/
	heavy;
	/**
	* Melee equiped in preset
	*/
	melee;
	/**
	* Exalted ability
	*/
	exalted;
	/**
	* Secondary exalted ability
	*
	* i.e Sevagoth has his shadow and his shadow's claws both of which can be modded separately
	*/
	exaltedB;
	constructor(preset) {
		this.focusSchool = translatePolarity(preset.FocusSchool);
		this.icon = preset.PresetIcon;
		this.isFavorite = preset.Favorite;
		this.name = preset.n;
		this.warframe = new SlotPreset(preset.s);
		if (preset.l) this.primary = new SlotPreset(preset.l);
		if (preset.p) this.secondary = new SlotPreset(preset.p);
		if (preset.h) this.heavy = new SlotPreset(preset.h);
		if (preset.m) this.melee = new SlotPreset(preset.m);
		if (preset.a) this.exalted = new SlotPreset(preset.a);
		if (preset.b) this.exaltedB = new SlotPreset(preset.b);
	}
};
//#endregion
export { LoadOutPreset as default };
