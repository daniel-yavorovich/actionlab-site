$(document).ready(function () {
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['section0', 'section1', 'section2', 'section3', 'section4', 'section5'],
        scrollingSpeed: 1000,
        loopBottom: false,
        paddingTop: '53px',
        paddingBottom: '53px',
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

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'NoSIZIIFOxs',
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    player.stopVideo();
}