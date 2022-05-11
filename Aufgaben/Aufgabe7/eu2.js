const land1 = "Deutschland";
const deutschland08 = 28;
const deutschland22 = 83.2;
const land2 = "Frankreich";
const frankreich08 = 62.14;
const frankreich22 = 65.48;
const land3 = "Italien";
const italien08 = 59;
const italien22 = 59.53;
const land4 = "Luxemburg";
const luxemburg08 = 0.48;
const luxemburg22 = 0.65;
const europa22 = 447.01;
const jahr = 2022;
function anteilEuropa22(jahr, land22) {
    const ersteBerechnung = land22 / europa22 * 100;
    console.log("Relativ zur Gesamtzahl in der EU " + jahr + ": " + ersteBerechnung + "%");
}
;
anteilEuropa22(jahr, deutschland22);
anteilEuropa22(jahr, frankreich22);
anteilEuropa22(jahr, italien22);
anteilEuropa22(jahr, luxemburg22);
//# sourceMappingURL=eu2.js.map