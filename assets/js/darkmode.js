const darkmode = document.getElementById("darkmode");
const body = document.body;
const paragraphs = document.getElementsByTagName('p');
const headers1 = document.getElementsByTagName('h1');
const headers2 = document.getElementsByTagName('h2');
const headers3 = document.getElementsByTagName('h3');

window.onload = function () {
    loadSwitchState();
};

darkmode.onclick = function () {
    darkmodeToggle();
    saveSwitchState();
}

function darkmodeToggle() {
    swap([body], 20)
    swap(paragraphs, 20)
    swap(headers1, 20)
    swap(headers2, 20)
    swap(headers3, 20)
    switchImage('gemini')
    switchImage('dungey-cycle')
    switchImage('complex-aurora')
}

function swap(els, offset) {
    for (let i = 0; i < els.length; i++) {
        el = els[i];
        if (el instanceof HTMLElement) {
            style = window.getComputedStyle(el, null);
            c1 = style.getPropertyValue('color');
            c2 = style.getPropertyValue('background-color');
            c3 = style.getPropertyValue('border-color');
            el.style.color = invert(c1, offset);
            el.style.backgroundColor = invert(c2, offset);
            el.style.borderColor = invert(c3, offset);
        }
    }
}

function invert(c, offset) {
    var rgb = c.replace('rgb(', '').replace('rgba(', '').replace(')', '').split(', ');
    r = 255 - rgb[0] + offset;
    g = 255 - rgb[1] + offset;
    b = 255 - rgb[2] + offset;
    if (rgb.length != 4) {
        return `rgb(${r}, ${g}, ${b})`;
    } else {
        a = rgb[3];
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}

function switchImage(id) {
    const el = document.getElementById(id)
    if (!el || !el.src) return;
    if (el.src.endsWith('-dark.png')) {
        el.src = el.src.replace('-dark.png', '.png')
    } else {
        el.src = el.src.replace('.png', '-dark.png')
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
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
