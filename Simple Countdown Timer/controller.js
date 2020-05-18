const sound = require('sound-play');
const path = require('path');
const filePath = path.join(__dirname, 'D-Devils - Alarma.mp3')


async function countDownTimer(minutes) {
    let seconds = minutes * 60;
    const timer = await setInterval(() => {
        console.log(`${seconds -= 1} seconds left`);
        if (seconds == 0) {
            clearInterval(timer);
            sound.play(filePath)
        }
    }, 1000)
}

module.exports.countDownTimer = countDownTimer;