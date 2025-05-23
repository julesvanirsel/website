var $body = $('body')
var bp = 0
const [bp0, bp1] = [800, 1200]
const nav = document.getElementById('nav')
// const imgs = document.getElementsByClassName('img')

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
    nav.style.left = "-60em";
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
function openNavBB() {
    document.getElementById('navB').style.maxHeight = '9999px'
    openNavItem(document.getElementById('navBB'))
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

window.addEventListener('scroll', function() {
    let navbar = document.getElementById('nav');
    let darkmode = document.getElementById('dark')
    if (bp == 2) {
        if (window.scrollY > 50) {
            navbar.style.height = '50px'
            darkmode.style.top = '4em'
        } else {
            navbar.style.height = '100px'
            darkmode.style.top = '7em'
        }
    }
});

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
    alignment: 'center',
    offsetX: 3,
    offsetY: 0
});

// scroll
function scrollToForm() {
    const form = document.getElementById("footer")
    const pos = form.getBoundingClientRect();
    window.scrollBy({
        top: pos.top - 70,
        behavior: 'smooth'
    })
    if (bp < 2) {
        closeNav()
    }
}

function getYPos(els) {
    for (let i = 0; i < els.length; i++) {
        const pos = el.getBoundingClientRect()

    }
}

// function slide(els) {
//     console.log('----------------')
//     // for (let i = 0; i < els.length; i++) {
//     for (let i = 1; i < 2; i++) {
//         el = els[i];
//         if (el instanceof HTMLElement) {
//             // var pos = el.getBoundingClientRect()
//             // const loc = window.scrollY - pos.y + pos.height / 2
//             const loc = window.scrollY - 700
//             var w = 350 + 20 * 2.72**(-1 * loc**2 / 10000)
//             // style = window.getComputedStyle(el, null);
//             // el.position
//             console.log('scrollY = ' + window.scrollY)
//             console.log('loc = ' + loc)
//             console.log('w = ' + w)
//             // console.log('h = ' + h)
//             // el.style.transform = "translateY(50px)"
//             // el.style.position = "block"
//             el.style.width = w + "px";
//             // el.style.height = (1.001 * h) + "px";
//         }
//     }
// }

// slide(content)
// window.addEventListener('scroll', function() {
//     slide(imgs)
// })