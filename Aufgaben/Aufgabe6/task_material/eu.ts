// "Die Einwohnerzahl in Deutschland beträgt im Jahr 2022: XXX Mio." "Relativ zur Gesamtzahl der Einwohnerzahl in der EU ist die Einwohnerzahl in Deutschland im Jahr 2022: xxx %" "Für Deutschland hat sich die Einwohnerzahl im Jahr 2022 im Vergleich zu 2008 um xxx % verändert."
const deutschland2008: number = 82;
const deutschland2022: number = 83.2;
const frankreich2008: number = 62.14;
const frankreich2022: number = 65.48;
const italien2008: number = 59;
const italien2022: number = 59.53;
const luxemburg2008: number = 0.48;
const luxemburg2022: number = 0.65;
const europa2022: number = 447.01;

const deutschlandAnteileuropa2022: number = deutschland2022 / europa2022 * 100;
const deutschlandDifferenzwert: number = deutschland2022 - deutschland2008;
const deutschlandWachstumSeit2008: number = deutschlandDifferenzwert / deutschland2022 * 100;

const frankreichAnteileuropa2022: number = frankreich2022 / europa2022 * 100;
const frankreichDifferenzwert: number = frankreich2022 - frankreich2008;
const frankreichWachstumSeit2008: number = frankreichDifferenzwert / frankreich2022 * 100;

const italienAnteileuropa2022: number = italien2022 / europa2022 * 100;
const italienDifferenzwert: number = italien2022 - italien2008;
const italienWachstumSeit2008: number = italienDifferenzwert / italien2022 * 100;

const luxemburgAnteileuropa2022: number = luxemburg2022 / europa2022 * 100;
const luxemburgDifferenzwert: number = luxemburg2022 - luxemburg2008;
const luxemburgWachstumSeit2008: number = luxemburgDifferenzwert / luxemburg2022 * 100;



console.log("Gesamtzahl Einwohnerinnen und Einwohner in Deutschland 2022" + ": " + deutschland2022 + "Mio. ");
console.log("Relativ zur Gesamtzahl in der EU 2022" + ":" + " " + deutschlandAnteileuropa2022 + "%");
console.log("Wachstumsrate in Deutschland seit 2008" + ":" + " " + deutschlandWachstumSeit2008 + "%");

console.log("Gesamtzahl Einwohnerinnen und Einwohner in Frankreich 2022" + ": " + frankreich2022 + "Mio. ");
console.log("Relativ zur Gesamtzahl in der EU 2022" + ":" + " " + frankreichAnteileuropa2022 + "%");
console.log("Wachstumsrate in Frankreich seit 2008" + ":" + " " + frankreichWachstumSeit2008 + "%");


console.log("Gesamtzahl Einwohnerinnen und Einwohner in Italien 2022" + ": " + italien2022 + "Mio. ");
console.log("Relativ zur Gesamtzahl in der EU 2022" + ":" + " " + italienAnteileuropa2022 + "%");
console.log("Wachstumsrate in Italien seit 2008" + ":" + " " + italienWachstumSeit2008 + "%");


console.log("Gesamtzahl Einwohnerinnen und Einwohner in Luxemburg 2022" + ": " + luxemburg2022 + "Mio. ");
console.log("Relativ zur Gesamtzahl in der EU 2022" + ":" + " " + luxemburgAnteileuropa2022 + "%");
console.log("Wachstumsrate in Luxemburg seit 2008" + ":" + " " + luxemburgWachstumSeit2008 + "%");














