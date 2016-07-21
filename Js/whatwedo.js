

$(document).ready(function() {

	var counter = 1;


function blink(){

	if (counter === 1)
	{
    
    	$(".missionStatement").css(
      		"background-color","white");
    	counter-=1;		
    }
    
    else
    {
    	$(".missionStatement").css(
    		"background-color","lightgrey"
    	);
    	counter +=1;
	}
setTimeout(blink,1000);
}

blink();

});