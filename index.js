var inDeal = false;
let sound = new Audio('./sound/tic-tac.mp3')
let fastSound = new Audio('./sound/tic-tac-fast.mp3')
let btn = document.getElementById('btn');

function startTime(){  
    let time = getRamdomNumber(8,45);
    
    if(!inDeal){
        inDeal = true;
        btn.className = 'deal-btn';
        sound.play();

        setTimeout(function() {
            stopTime();
        },time)
    }
};

function stopTime(){

    sound.pause();
    fastSound.play();

    setTimeout(function() {

        fastSound.pause();
        inDeal = false; 
        btn.className = '';
    },5000);
}

function getRamdomNumber(min,max){
    return Math.random() * ( ( (max-min) + min ) * 1000 );
}