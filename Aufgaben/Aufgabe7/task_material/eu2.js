var Aufgabe7;
(function (Aufgabe7) {
    const land1 = "Deutschland";
    const deutschland2008 = 82;
    const deutschland2022 = 83.2;
    const land2 = "Frankreich";
    const frankreich2008 = 62.14;
    const frankreich2022 = 65.48;
    const land3 = "Italien";
    const italien2008 = 59;
    const italien2022 = 59.53;
    const land4 = "Luxemburg";
    const luxemburg2008 = 0.48;
    const luxemburg2022 = 0.65;
    const eu5 = "EU";
    const eu2022 = 447.01;
    const eu2008 = 440.66;
    const jahr = 2022;
    const europa5 = "Europa";
    const europa2022 = 750.844;
    function gesamtzahl(land, land2022) {
        console.log("Gesamtzahl EinwohnerInnen in " + land + " " + jahr + ": " + land2022 + " Mio.");
    }
    gesamtzahl(land1, deutschland2022);
    gesamtzahl(land2, frankreich2022);
    gesamtzahl(land3, italien2022);
    gesamtzahl(land4, luxemburg2022);
    gesamtzahl(eu5, eu2022);
    function anteilEu2022(land, jahr, land2022) {
        const ersteBerechnung = land2022 / eu2022 * 100;
        console.log("Relativ zur Gesamtzahl in der EU " + " in " + land + jahr + ": " + ersteBerechnung + " %");
    }
    anteilEu2022(land1, jahr, deutschland2022);
    anteilEu2022(land2, jahr, frankreich2022);
    anteilEu2022(land3, jahr, italien2022);
    anteilEu2022(land4, jahr, luxemburg2022);
    function anteilEuropa2022(land, jahr, europa2022) {
        const euBerechnung = eu2022 / europa2022 * 100;
        console.log("Relativ zur Gesamtzahl in der EU " + " in " + europa5 + jahr + ": " + euBerechnung + " %");
    }
    anteilEuropa2022(eu5, jahr, europa2022);
    function wachstum(land, land2022, land2008) {
        const zweiteBerechnung = land2022 - land2008;
        const drittteBerechnung = zweiteBerechnung / land2022 * 100;
        console.log("Wachstumsrate in " + land + " seit 2008: " + drittteBerechnung + " %");
    }
    wachstum(land1, deutschland2022, deutschland2008);
    wachstum(land2, frankreich2022, frankreich2008);
    wachstum(land3, italien2022, italien2008);
    wachstum(land4, luxemburg2022, luxemburg2008);
    wachstum(eu5, eu2022, eu2008);
    function wachstumGesamt(land, land2022, land2008) {
        const zweiteBerechnung = land2022 - land2008;
        console.log("Wachstumsrate gesamt in " + land + " zwischen 2008 und 2022: " + zweiteBerechnung + " Mio.");
    }
    wachstumGesamt(land1, deutschland2022, deutschland2008);
    wachstumGesamt(land2, frankreich2022, frankreich2008);
    wachstumGesamt(land3, italien2022, italien2008);
    wachstumGesamt(land4, luxemburg2022, luxemburg2008);
    wachstumGesamt(eu5, eu2022, eu2008);
    document.querySelector("#deutschland")
        .addEventListener("click", function () {
        document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Deutschland";
        document.querySelector(".gesamtzahlEinwohnerInnen").innerHTML = "" + ((deutschland2022)) + " Mio.";
        document.querySelector(".text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Deutschland 2022";
        document.querySelector(".relativZurGesamtzahl").innerHTML = "" + ((deutschland2022 / eu2022 * 100)).toFixed(2) + "%";
        document.querySelector(".wachstumsrateProzent").innerHTML = "" + ((deutschland2022 - deutschland2008) / deutschland2022 * 100).toFixed(2) + "%";
        document.querySelector(".wachstumsrateZahl").innerHTML = "" + ((deutschland2022 - deutschland2008)).toFixed(2) + " Mio.";
        document.querySelector(".chart").setAttribute("style", "height: " + (deutschland2022 / eu2022 * 100) + "%");
    });
    document.querySelector("#frankreich")
        .addEventListener("click", function () {
        document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Frankreich";
        document.querySelector(".gesamtzahlEinwohnerInnen").innerHTML = "" + ((frankreich2022)) + " Mio.";
        document.querySelector(".text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Frankreich 2022";
        document.querySelector(".relativZurGesamtzahl").innerHTML = "" + ((frankreich2022 / eu2022 * 100)).toFixed(2) + "%";
        document.querySelector(".wachstumsrateProzent").innerHTML = "" + ((frankreich2022 - frankreich2008) / frankreich2022 * 100).toFixed(2) + "%";
        document.querySelector(".wachstumsrateZahl").innerHTML = "" + ((frankreich2022 - frankreich2008)).toFixed(2) + " Mio.";
        document.querySelector(".chart").setAttribute("style", "height: " + (frankreich2022 / eu2022 * 100) + "%");
    });
    document.querySelector("#italien")
        .addEventListener("click", function () {
        document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Italien";
        document.querySelector(".gesamtzahlEinwohnerInnen").innerHTML = "" + ((italien2022)) + " Mio.";
        document.querySelector(".text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Italien 2022";
        document.querySelector(".relativZurGesamtzahl").innerHTML = "" + ((italien2022 / eu2022 * 100)).toFixed(2) + "%";
        document.querySelector(".wachstumsrateProzent").innerHTML = "" + ((italien2022 - italien2008) / italien2022 * 100).toFixed(2) + "%";
        document.querySelector(".wachstumsrateZahl").innerHTML = "" + ((italien2022 - italien2008)).toFixed(2) + " Mio.";
        document.querySelector(".chart").setAttribute("style", "height: " + (italien2022 / eu2022 * 100) + "%");
    });
    document.querySelector("#luxemburg")
        .addEventListener("click", function () {
        document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in Luxemburg";
        document.querySelector(".gesamtzahlEinwohnerInnen").innerHTML = "" + ((luxemburg2022)) + " Mio.";
        document.querySelector(".text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in Luxemburg 2022";
        document.querySelector(".relativZurGesamtzahl").innerHTML = "" + ((luxemburg2022 / eu2022 * 100)).toFixed(2) + "%";
        document.querySelector(".wachstumsrateProzent").innerHTML = "" + ((luxemburg2022 - luxemburg2008) / luxemburg2022 * 100).toFixed(2) + "%";
        document.querySelector(".wachstumsrateZahl").innerHTML = "" + ((luxemburg2022 - luxemburg2008)).toFixed(2) + " Mio.";
        document.querySelector(".chart").setAttribute("style", "height: " + (luxemburg2022 / eu2022 * 100) + "%");
    });
    document.querySelector("#eurosterne")
        .addEventListener("click", function () {
        document.querySelector(".einwohnerzahl").innerHTML = "Einwohnerzahl in der europäischen Union";
        document.querySelector(".gesamtzahlEinwohnerInnen").innerHTML = "" + ((eu2022)) + " Mio.";
        document.querySelector(".text").innerHTML = "Gesamtzahl Einwohnerinnen und Einwohner in der europäischen Union 2022";
        document.querySelector(".text2").innerHTML = "Relativ zur Gesamtzahl in Europa";
        document.querySelector(".relativZurGesamtzahl").innerHTML = "" + ((eu2022 / europa2022 * 100)).toFixed(2) + "%";
        document.querySelector(".wachstumsrateProzent").innerHTML = "" + ((eu2022 - eu2008) / eu2022 * 100).toFixed(2) + "%";
        document.querySelector(".wachstumsrateZahl").innerHTML = "" + ((eu2022 - eu2008)).toFixed(2) + " Mio.";
        document.querySelector(".chart").setAttribute("style", "height: " + (eu2022 / europa2022 * 100) + "%");
    });
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=eu2.js.map