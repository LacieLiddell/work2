
( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.popup-active' ),
                page = document.getElementsByClassName( 'page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
    
} () );
var startTime;
var checkTime;
var canvasText=document.getElementById("drawText");
var canvasCell = document.getElementById("drawCell");
var canvasShape = document.getElementById("drawShape");
var x=canvasText.getContext("2d");
var y = canvasCell.getContext('2d');
var z = canvasShape.getContext('2d');
setTimeout("drawFrame()", 20);
x.font='15px Verdana';
x.fillText("Tizen", 60, 40);
x.font='15px Verdana';
x.fillStyle = "blue";
x.fillText("JavaScript", 60, 45);
x.font='20px Arial';
x.fillStyle = "red";
x.fillText("HTML5", 15, 100);
x.font='15px Arial';
x.fillStyle = "blue";
x.fillText("canvas", 80, 110);

var i, j;
for (i = 0; i<31; i++){
	for (j = 0; j<16; j++){
		if ((i+j)%2 === 1){
			y.fillStyle = "black";
		} else {y.fillStyle = "white";}
		y.fillRect(i*10, j*10, (i+1)*10, (j+1)*10);
	}
	
}

var posX = 10;
var posY = 60;
function drawFrame() {
	z.clearRect(0, 0, canvasShape.width, canvasShape.height);
	
	z.beginPath();
	z.strokeRect(posX, posY, 15, 15);
	if (posX<=canvasShape.width){ posX+=1; } else { posX = 0; }
	setTimeout("drawFrame()", 20);
}



$('#two').css({'font-size':'15px', 'font-family':'Arial', 'color':'red'});
$('#change').click(function() { 
	$('#two').css({'color':'black'});	
});

$('#dropLogo').draggable();
$('#text').droppable({
	drop:function(){
		$('#header').css('color','red');
	}
});

//Initialize function
var init = function () {
	// TODO:: Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
};
// window.onload can work without <body onload="">
window.onload = init;

function startTime() {
	var today = new Date();
	var h = today.getHours();

	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 250);
}

function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}

