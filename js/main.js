$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['section0', 'section1', 'section2', 'section3', 'section4'],
        scrollingSpeed: 1000,
        loopBottom: false,
        paddingTop: '53px',
        paddingBottom: '53px',
        responsiveHeight: 900,
        verticalCentered: true,
        scrollOverflow: true,
        scrollOverflowOptions: {
            scrollbars: true,
            mouseWheel: true,
            hideScrollbars: false,
            fadeScrollbars: false,
            disableMouse: true
        }
    });
});