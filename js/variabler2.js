//henter elementer
let ya = document.getElementById('ya');
let no = document.getElementById('no');
let del1 = document.getElementById('del1')

//tildeler handler til hvert element
ya.onclick = skrivUtVerdi;
no.onclick = skrivUtVerdi;

//handler som henter innerHTML for den knappen som setter i gang onclick eventet
function skrivUtVerdi() {


    del1.innerHTML +=(this.innerHTML) + "<br />";
}

document.getElementById ("tekst").innerHTML = 'Hei, Jeg heter Tor Andreas Hovstein Johansen Røen Waterloo, og skal IKKE bli nerd :imp:'

document.getElementById ("navn").innerHTML += 'Tor'


function knapp() {
    alert('JA, det funker')
}

function funker() {
    alert('JODA, dette funker også')
}

function check3() {
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;
    let beregn = (weight/(height * height)*10000);
    bmi2.innerHTML = ("Din BMI er " + beregn.toFixed(4).toString().replace(".",",") + "<br>")
}   