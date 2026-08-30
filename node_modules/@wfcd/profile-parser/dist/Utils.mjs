import Items from "@wfcd/items";
//#region src/Utils.ts
/**
* Map base10 int colors to hex color strings
* @param colors color map
*/
const mapToHex = (colors) => {
	const hex = {};
	Object.entries(colors).forEach(([key, value]) => {
		if (value) hex[key] = Math.abs(value).toString(16).toUpperCase();
	});
	return hex;
};
const categories = [
	"Skins",
	"Primary",
	"Secondary",
	"Melee",
	"Arch-Melee",
	"Arch-Gun",
	"Warframes",
	"Archwing",
	"Sentinels",
	"Pets"
];
/**
* Find an item by Item#uniqueName
* @param {string} name string with which to query
* @param {string} locale locale to use for internationalization
* @returns {Item}
*/
const find = (name, locale = "en") => {
	const item = new Items({
		category: categories,
		i18n: [locale],
		i18nOnObject: true
	}).find((i) => i.uniqueName === name);
	let itemClone = { ...item };
	if (locale !== "en" && itemClone.i18n?.[locale]) {
		itemClone = {
			...itemClone,
			...itemClone.i18n[locale]
		};
		const warframe = itemClone;
		if (warframe.abilities) warframe.abilities = warframe.abilities.map((ability) => ({
			uniqueName: ability.abilityUniqueName || ability.uniqueName || void 0,
			name: ability.abilityName || ability.name,
			description: ability.abilityDescription || ability.description,
			imageName: ability.imageName ?? void 0
		}));
		delete itemClone.i18n;
		return itemClone;
	}
	return item;
};
const numberToLetter = (num) => String.fromCharCode(64 + (num + 1));
//#endregion
export { find, mapToHex, numberToLetter };
