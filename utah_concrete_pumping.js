function calc() {
    var lf = document.getElementById("lf").selectedIndex * 12;
    var l = document.getElementById("li").selectedIndex + lf;
    var wf = document.getElementById("wf").selectedIndex * 12;
    var w = document.getElementById("wi").selectedIndex + wf;
    var hf = document.getElementById("hf").selectedIndex * 12;
    var h = document.getElementById("hi").selectedIndex + hf;
    document.getElementById("output").innerHTML = calcVCube(l, w, h);
}
function makeInches() {
    var r = '';
    for (var i = 0; i < 12; i++) {
        r += '<option value="">' + i + '</option>';
    }
    return r;
}
function makeFeet() {
    var r = '';
    for (var i = 0; i < 1001; i++) {
        r += '<option value="">' + i + '</option>';
    }
    return r;
}
function calcCol() {
    var df = document.getElementById("cdf").selectedIndex * 12;
    var d = document.getElementById("cdi").selectedIndex + df;
    d = d / 2;
    var hf = document.getElementById("chf").selectedIndex * 12;
    var h = document.getElementById("chi").selectedIndex + hf;
    document.getElementById("colOutput").innerHTML = calcVCylindar(d, h);
}
function calcVCylindar(d,h) {
    var r = Math.PI * h * (d * d);
    var cy = r / 46656;
    return cy.toFixed(2);
}
function calcVCube(l,w,h) {
    var r = l * w * h;
    var cy = r / 46656;
    return cy.toFixed(2);
}
