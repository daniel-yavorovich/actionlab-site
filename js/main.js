$(document).ready(function () {
    if ($('#fullpage').fullpage) {
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
    }

});

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
var playerGal1;
var playerGal2;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'abpkgNNsn5U',
        events: {
            'onReady': onPlayerReady,
        }
    });

    playerGal1 = new YT.Player('playerGal1', {
        height: '390',
        width: '640',
        videoId: 'NoSIZIIFOxs',
        events: {
            'onReady': onPlayerGal1Ready,
        }
    });

    playerGal2 = new YT.Player('playerGal2', {
        playerVars: {
          'autoplay': 0
        },
        videoId: 'hAwp9nJ8SvA',
        events: {
            'onReady': onPlayerGal2Ready,
        }
    });
}

function onPlayerReady(event) {
    player.stopVideo();
}

function onPlayerGal1Ready(event) {
    playerGal1.stopVideo();
}

function onPlayerGal2Ready(event) {
    playerGal2.stopVideo();
}