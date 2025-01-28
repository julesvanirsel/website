$(function () {

    // var $window = $(window);
    var $body = $('body');

    // dropdowns
    $('#nav>ul').dropotron({
        hoverDelay: 0,
        alignment: 'center'
    });

    // breakpoints
    	breakpoints({
    		wide:      [ '1281px',  '1680px' ],
    		normal:    [ '981px',   '1280px' ],
    		narrow:    [ '841px',   '980px'  ],
    		narrower:  [ '737px',   '840px'  ],
    		mobile:    [ '481px',   '736px'  ],
    		mobilep:   [ null,      '480px'  ]
    	});

    // // Play initial animations on page load.
    // 	$window.on('load', function() {
    // 		window.setTimeout(function() {
    // 			$body.removeClass('is-preload');
    // 		}, 100);
    // 	});


    // var link = document.createElement('link');
    // link.rel = "stylesheet";
    // link.type = "text/css";
    // link.href = "assets/css/main.css";
    // console.log(link)
    // document.head.appendChild(link);

    // bar
    $(
        '<div id="titleBar">' +
        '<a href="#" class="toggle">=</a>' +
        '<h2>' + $('#title').html() + '</h2>' +
        '</div>'
    ).prependTo($body);

    // // panel
    // $(
    //     '<div id="navPanel">' +
    //     '<nav>' +
    //     $('#nav').navList() +
    //     '</nav>' +
    //     '</div>'
    // )
    //     .appendTo($body)
    //     .panel({
    //         delay: 500,
    //         hideOnClick: true,
    //         hideOnSwipe: true,
    //         resetScroll: true,
    //         resetForms: true,
    //         side: 'left',
    //         target: $body,
    //         visibleClass: 'navPanel-visible'
    //     });

})(jQuery);