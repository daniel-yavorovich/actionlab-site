$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['section0', 'section1', 'section2', 'section3', 'section4'],
        scrollOverflow: true,
        scrollingSpeed: 1000,
        loopBottom: true,
        paddingTop: '5em',
        paddingBottom: '3em',
        verticalCentered: true,
        scrollOverflowOptions: {
            scrollbars: true,
            mouseWheel: true,
            hideScrollbars: false,
            fadeScrollbars: false,
            disableMouse: true
        }
    });
});