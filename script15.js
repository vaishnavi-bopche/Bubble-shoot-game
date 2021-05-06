var time = 60;
var timer = document.querySelector('#ti');
var hit = document.querySelector('#hi');
var bottom = document.querySelector('#botpn');
var score = document.querySelector('#sc');
var randomnumber;
var score1 = 0;


setInterval(function() {
    if (time > 0) {
        --time;
        timer.textContent = time;
    } else {
        bottom.innerHTML = '<h1 id="last">Game over</h1>'
    }

}, 1000);

function getrandomnumber() {
    randomnumber = Math.floor(Math.random() * 10);
    hit.textContent = randomnumber;
}
bottom.addEventListener('click', function(details) {
    var value = details.target.textContent;
    if (value == randomnumber) {
        score1 = score1 + 10;
        score.textContent = score1;
        getrandomnumber();
        bottom.innerHTML = '';
        makebubble();

    }


})

function makebubble() {
    for (var i = 0; i < 242; i++) {
        var randomnumber = Math.floor(Math.random() * 10);
        var templete = `<div class="bubble">${randomnumber}</div>`;
        bottom.innerHTML += templete;

    }

}
getrandomnumber();
makebubble();