let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["red", "pink", "blue", "green"];


document.addEventListener("click", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelup();
    }
})
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250)
}
function levelup() {
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;
    let randidx = Math.floor(Math.random() * 4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}
function check(idx){
    
    // let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
       console.log("same value");  
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerText=`Game over at level :your score is ${level}  press any key to start again `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress() {
    let btn = this;
    userflash(btn);
   usercolor=btn.getAttribute("id");
   userseq.push(usercolor);
//    console.log(usercolor);
   check(userseq.length-1);


}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
function highscores(score){
    if(score>highscore){
        highscore=score;
        document.getElementById("highscore").innerText=highscore;
    } 
}
