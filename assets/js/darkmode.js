const darkmode = document.getElementById("darkmode");
const footer = document.getElementById("footer");
const content = document.getElementById("content");
const highlights = document.getElementById("highlights");
const form1 = document.getElementById("name");
const form2 = document.getElementById("email");
const form3 = document.getElementById("message");
const construction = document.getElementById("under-construction");

window.onload = function() {
    loadSwitchState();
};

darkmode.onclick = function() {
    darkmodeToggle();
    saveSwitchState();
}

function darkmodeToggle(){
    swap([content,footer,highlights,construction],20);
    swap([form1,form2,form3],50);
}

function swap(els,offset) {
    for (let i = 0; i < els.length; i++) {
        el = els[i];            
        if (el instanceof HTMLElement) {
            style = window.getComputedStyle(el,null);
            c1 = style.getPropertyValue('color');
            c2 = style.getPropertyValue('background-color');
            c3 = style.getPropertyValue('border-color');
            el.style.color = invert(c1,offset);
            el.style.backgroundColor = invert(c2,offset);
            el.style.borderColor = invert(c3,offset);
        }
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

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
        console.log(date)
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function saveSwitchState() {
    var switchElement = document.getElementById('darkmode');
    var switchState = switchElement.checked ? 'on' : 'off';
    setCookie('darkmode', switchState, 7); // Save for 7 days
}

function loadSwitchState() {
    var switchState = getCookie('darkmode');
    if (switchState) {
        if (switchState === 'on') {
            darkmodeToggle();
            darkmode.checked = true;
        }
    }
}
