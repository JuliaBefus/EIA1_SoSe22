const land1: string = "Deutschland";
const deutschland08: number = 28;
const deutschland22: number = 83.2;
const land2: string = "Frankreich";
const frankreich08: number = 62.14;
const frankreich22: number = 65.48;
const land3: string = "Italien";
const italien08: number = 59;
const italien22: number = 59.53;
const land4: string = "Luxemburg";
const luxemburg08: number = 0.48;
const luxemburg22: number = 0.65;
const europa22: number = 447.01;
const jahr: number = 2022;

function anteilEuropa22(jahr: number, land22: number) { 
const ersteBerechnung: number = land22 / europa22 * 100;
console.log("Relativ zur Gesamtzahl in der EU " + jahr + ": " + ersteBerechnung + "%" )
};

anteilEuropa22(jahr, deutschland22);
anteilEuropa22(jahr, frankreich22);
anteilEuropa22(jahr, italien22);
anteilEuropa22(jahr, luxemburg22);



