'use strict';

{

    function check() {
        //残り時間 = 終了時間 - 現在時刻
        let countdown = endTime - new Date().getTime();
        //タイマーの終了
        if ( countdown < 0 ) {
            clearInterval(intervalId);
            countdown = 3*1000;
            btn.disabled = false;
        }

        const totalSeconds = Math.floor(countdown/1000);
        const minutes = Math.floor(totalSeconds/60);
        const seconds = totalSeconds%60;

        const minutesFormatted = String(minutes).padStart(2,'0');
        const secondsFormatted = String(seconds).padStart(2,'0');

        timer.textContent = `${minutesFormatted}:${secondsFormatted}`;
    }
    const timer = document.getElementById('timer');
    const btn = document.getElementById('btn');
    let endTime;
    let intervalId;
    //終了時間を求める
    btn.addEventListener('click' , function() {
        endTime = new Date().getTime() +3 * 1000;

        this.disabled = true;
        //残り時間を求める
        intervalId = setInterval(check,100);
    },false);   
}