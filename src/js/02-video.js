import throttle from 'lodash.throttle'

import Player from "@vimeo/player";

// ==============================


    const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    
// ==============================

function findCurrentTime (data) 
        {
    const videoPlayerCurrentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', videoPlayerCurrentTime);

    console.log(videoPlayerCurrentTime);
}

const throttledFindCurrentTime = throttle(findCurrentTime, 1000);

player.on('timeupdate', throttledFindCurrentTime);

// ==============================

const getCurrentTime = localStorage.getItem('videoplayer-current-time');

// ==============================

player.setCurrentTime(getCurrentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});