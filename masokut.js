let scores,roundScore,activePlayer,gamePlaying;
function init() {
gamePlaying=true;
scores = [0,0];
roundScore = 0;
activePlayer = 0;
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';

document.querySelector('#name-0').textContent ='Player-1';
document.querySelector('#name-1').textContent ='Player-2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}

init();

//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML ='<em>' + dice +'</em>';
//var x = document.querySelector("#score-0").textContent;



document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying) {
    //random number
   let dice = Math.floor(Math.random()*6)+1;
   // itt lesz képhez tartozó kép megjelenitjuk stb
   //ki mentettem a kverit egy változóba igy nem kell mindig hosszan leirni azt a nyavaját
   let diceDoom = document.querySelector('.dice');
   diceDoom.style.display = 'block';
   diceDoom.src = 'dice-'+dice+ '.png';
   
    if(dice!==1) {
        roundScore += dice;
        document.querySelector('#current-'+activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying) {
    scores[activePlayer] += roundScore;
    
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];


    if(scores[activePlayer]>=20) {
        document.querySelector('#name-' + activePlayer).textContent ='Winner!!!';
        document.querySelector('.dice').style.display = "none";
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
    } else {
        nextPlayer();
    }

}});


function nextPlayer () {
    activePlayer === 0 ? 
    activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //ezek csak egy irányba müködnek és külön lekéne programozni a másik esetet is 
    //document.querySelector('.playeer-0-panel').classList.remove('active');
    //document.querySelector('.playeer-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = "none";
}

document.querySelector('.btn-new').addEventListener('click',init);










