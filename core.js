function Player (name,totalScore,cscore,active) {
    this.name = name;
    this.cscore = cscore;
    this.totalScore = totalScore;
    this.active = active;

}

playaer1 = new Player(prompt('Első játékos neve'),0,0,true);
playaer2 = new Player(prompt('Második játékos neve'),0,0,false);
document.getElementById('name-0').innerText = playaer1.name;
document.getElementById('name-1').innerText = playaer2.name;

function role() {
    return Math.floor(Math.random() * (6 - 1) ) + 1;
}

function swich(playaer1,playaer2) {
    if(playaer1.active === true) {
        playaer1.active = false;
        playaer2.active = true;
    }
    else if(playaer2.active ===true) {
        playaer2.active = false;
        playaer1.active = true;
    }
   
}

function curPlyer(playaer1,playaer2) {
    if (playaer1.active ===true)
     return playaer1;
    else
    return playaer2;
}
function igazMondo () {
    if (playaer2.totalScore >= 20 || playaer1.totalScore >=20)
    return false;
    else return true;
}


function game(playaer1,playaer2) {
        while(igazMondo()) {
            let akt = curPlyer(playaer1,playaer2);
            while(akt.active === true && akt.totalScore<20) {
                
                let a = role();
                if (a>1) {
                    akt.cscore = a;
                    akt.totalScore += akt.cscore;
                    console.log(akt.name + ' pontja van: ' +akt.totalScore);
                } 
                else {
                    akt.totalScore=0;
                    swich(playaer1,playaer2);
                    
                }
                
            }
        
        }

    console.log(playaer1.name + ' :'+playaer1.totalScore +' ' +playaer2.name +' :'+ playaer2.totalScore)

}
game(playaer1,playaer2);
