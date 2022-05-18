
var colors: string[] = ["rgb(1,88,224)", "#ff0088", "yellow", "rgba(0,0,100,0.5)"];
var aI: number = 0;

document.querySelector("#buttonA").addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = colors[aI];

    aI = aI + 1;
})

