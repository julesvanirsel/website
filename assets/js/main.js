var $body = $('body')
var bp = 0
const [bp0, bp1] = [700, 1200]
const nav = document.getElementById('nav')

checkBreakpoint()
updateNavClass()

// title bar
$(
    '<div id="title-bar">' +
    '<button id="nav-open-btn" onclick="openNav()" type="button" title="openNav"></button>' +
    '<h4>' + $('#title').html() + '</h4>' +
    '</div>'
).prependTo($body);

// open and close nav panel
function openNav() {
    nav.style.left = "0";
}

function closeNav() {
    nav.style.left = "-50em";
}

// document.body.addEventListener('click', function () {
//     if (nav.className === "nav-panel") {
//         if (window.getComputedStyle(nav, null).getPropertyValue('left') === "0px") {
//             closeNav()
//         }
//     }
// });

// open nav items
function openNavItem(el) {
    if (bp < 2) {
        if (el.style.maxHeight && el.style.maxHeight !== '0px') {
            el.style.maxHeight = '0px';
        } else {
            el.style.maxHeight = `${el.scrollHeight}px`;
        }
    }
}

function openNavA() {
    openNavItem(document.getElementById('navA'))
}
function openNavB() {
    openNavItem(document.getElementById('navB'))
}
function openNavC() {
    openNavItem(document.getElementById('navC'))
}
function openNavD() {
    openNavItem(document.getElementById('navD'))
}
function openNavE() {
    openNavItem(document.getElementById('navE'))
}

// breakpoints
function checkBreakpoint() {
    if (window.innerWidth <= bp0) {
        bp = 0
    } else if (window.innerWidth <= bp1) {
        bp = 1
    } else {
        bp = 2
    }
    console.log('current breakpoint: '+ bp)
    return bp
}

// change header color
// window.addEventListener('scroll', function() {
//     const titleBar = document.getElementById('title-bar')
//     const scrollTop = window.scrollY;
//     const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//     const scrollRatio = scrollTop / docHeight;
//     r = Math.min(255, (1 + 3 * scrollRatio) * 16);
//     g = Math.min(255, (3 + 5 * scrollRatio) * 16);
//     b = Math.min(255, (1 + 0 * scrollRatio) * 16);
//     titleBar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// })

window.addEventListener('resize', function() {
    bp_old = bp
    bp = checkBreakpoint();
    if (bp_old != bp) {
        updateNavClass();
        location.reload()
        console.log('breakpoint switch: ' + bp_old + ' to ' + bp)
    }
})

function updateNavClass() {
    console.log('updating nav class')
    var el = document.getElementById('nav');
    if (bp <= 1) {
        el.classList.add('nav-panel');
        el.classList.remove('nav-bar');
        console.log('changed to panel')
    } else if (bp > 1) {
        el.classList.remove('nav-panel');
        el.classList.add('nav-bar');
        console.log('changed to bar')
    }
}

// dropdowns
$('.nav-bar ul').dropotron({
    hoverDelay: 0,
    alignment: 'center'
});

// scroll
function scrollToForm() {
    const form = document.getElementById("form")
    const pos = form.getBoundingClientRect();
    window.scrollBy({
        top: pos.top - 80,
        behavior: 'smooth'
    })
    if (bp < 2) {
        closeNav()
    }
}