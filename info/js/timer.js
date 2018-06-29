
/** 
 *  A timer to count how long i have been in the world
 *  inspired by https://github.com/wangshub/romantic_page
*/

function lifeTimer() {
    
    var start = new Date(1993, 8, 21);  // start at my birthday
    var t = new Date() - start;
    
    var h = ~~(t / 1000 / 60 / 60 % 24);
    if (h < 10) {
        h = "0" + h;
    }

    var m = ~~(t / 1000 / 60 % 60);
    if (m < 10) {
        m = "0" + m;
    }

    var s = ~~(t / 1000 % 60);
    if (s < 10) {
        s = "0" + s;
    }

    document.getElementById('d').innerHTML = ~~(t / 1000 / 60 / 60 / 24);
    document.getElementById('h').innerHTML = h;
    document.getElementById('m').innerHTML = m;
    document.getElementById('s').innerHTML = s;
}

lifeTimer();
setInterval(lifeTimer, 1000);


  