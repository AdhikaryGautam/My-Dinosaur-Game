

{


//Make box able to jump

let myBox = document.getElementById('myBox');
var elDistanceToTop = window.pageYOffset + myBox.getBoundingClientRect().top;
var tempVar=elDistanceToTop;


window.addEventListener("keydown", (event) => {
	if (event.keyCode == 32) {
	    elDistanceToTop-=80;
	    myBox.style.top=elDistanceToTop+'px';
	    setTimeout(setTimeoutFunc, 600);
	    elDistanceToTop=tempVar;
	}
});
function setTimeoutFunc(){
    myBox.style.top='49.3%'; 
}


// Create new obstacles every three seconds and make them move from right to left

var n=50;
let myObstacle=document.getElementsByClassName('obstacle');
for (let i =0; i < n; i++) {
	var myNewObstacle=document.createElement('div');
	myNewObstacle.className='obstacle';
	document.body.appendChild(myNewObstacle);
}


// Make every obstacle go from right to left

var mainDistance=[];
for(i=0;i<n;i++){
	mainDistance[i]=99;
}

var clearVar=[];


var time=0;
for (let i=0;i<n;i++) {
	setTimeout(settingTime, time,i,mainDistance[i]);
	time+=2000;
}

function settingTime(x,tempmainDistance){
	clearVar[x]=window.setInterval(settingInterval, 100,x,tempmainDistance);
}

function settingInterval(y,z){
	mainDistance[y]-=1.5;
	myObstacle[y].style.left=mainDistance[y]+'%';
}

// Update the scoreboard every millisecond

let score=0;
let scoreParagraph=document.getElementById('paragraph');
var scoreInterval=window.setInterval(function(){
	score++;
	if (score%100==0) {
		scoreParagraph.style.color="red";
	}
	scoreParagraph.style.color="black";
	scoreParagraph.innerHTML=score;
}, 100);



var position;

for(let k=0;k<n-1;k++){
window.setInterval(myFunction, 100,k);
}
function myFunction(tempNthChildVar) {

	var boxDistance=$("body>div:nth-child(4)");
	position = boxDistance.position();


 	var obstacleDistance=$("body div:nth-child("+tempNthChildVar+")");
	var positionObstacle = obstacleDistance.position();


	if (positionObstacle.left>=266.2&&positionObstacle.left<=266.4&&position.top==315.515625) {
	tempParagraph4=document.getElementById('paragraph4');
	tempParagraph4.innerHTML=("Poor dino is dead!! <br> Shame on you");
	myStopFunction();
	}
}


function myStopFunction() {
	for(let a=0;a<n;a++){
  		clearInterval(clearVar[a]);
  	}
  	clearInterval(scoreInterval);

}




}