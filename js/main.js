$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['section0', 'section1', 'section2', 'section3', 'section4'],
        scrollOverflow: true,
        scrollingSpeed: 1500,
        loopBottom: false,
        paddingTop: '53px',
        paddingBottom: '53px',
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