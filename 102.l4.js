const first = prompt("Podaj pierwsza liczbe", "");
const what = prompt("Podaj operator arytmetyczny(+,-,*,/ lub %", " "); 
const second = prompt("Podaj druga liczbe", "");
if (what == "+") {
        alert (Number(first) + Number(second));
} else if (what == "-") {
        alert (Number(first) - Number(second));
} else if (what == "*") {
        alert (Number(first) * Number(second));
} else if (what == "/")
            if (Number(second) === 0) {
                alert ("nie dziel przez 0");
            } else {
                alert (Number(first) / Number(second));
} else if (what == "%") {
        alert (Number(first) % Number(second));
} else if (Number(first) === NaN) {
        alert ("that is not a number");
} else {
    alert ("this is not a number");
}