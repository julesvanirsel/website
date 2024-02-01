const darkmode = document.getElementById("darkmode");
const dark = document.getElementById("dark");
const footer = document.getElementById("footer");
const bio = document.getElementById("bio");
const highlights = document.getElementById("highlights");
const form1 = document.getElementById("name");
const form2 = document.getElementById("email");
const form3 = document.getElementById("message");

darkmode.onclick = function(){
    swap([bio,footer,highlights],20);
    swap([form1,form2,form3],50);
}

function swap(els,offset) {
    for (let i = 0; i < els.length; i++) {
        el = els[i];
        style = window.getComputedStyle(el,null);
        c1 = style.getPropertyValue('color');
        c2 = style.getPropertyValue('background-color');
        c3 = style.getPropertyValue('border-color');
        el.style.color = invert(c1,offset);
        el.style.backgroundColor = invert(c2,offset);
        el.style.borderColor = invert(c3,offset);
    }
}

function invert(c,offset) {
    var rgb = c.replace('rgb(','').replace('rgba(','').replace(')','').split(', ');
    r = 255 - rgb[0] + offset;
    g = 255 - rgb[1] + offset;
    b = 255 - rgb[2] + offset;
    if (rgb.length != 4) {
        return `rgb(${r}, ${g}, ${b})`;
    } else{
        a = 1 - rgb[3];
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}