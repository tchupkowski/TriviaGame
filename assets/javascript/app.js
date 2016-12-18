//Global Variables 

var correctAnswers = 0;
var incorrectAnswers =0;
var unAnswered = 0;

//Functions 

//creates timer
function countdown(){

	var seconds = 10;
	//alert("countdown")
	tick();

//also creates ther timer 
function tick(){
		//alert("tick function");
		seconds--;
		$("#timer").html("Time Remaining: " + seconds);
		if((seconds > 0) || ($("#answers").is(':visible'))){
			setTimeout(tick, 1000);
		}
		else{ answerPage()}
}
}

//tallies then displays answers 
function answerPage(){

	if(!$("input[name=inlineRadioOptions]:checked").val())
	{
		unAnswered++;
	}	
	if($('input[value=option11]').prop("checked")){
		correctAnswers++;
 	}
 	
 	if(!$("input[name=inlineRadioOptions2]:checked").val()){
		unAnswered++;
	}	
 	if($('input[value=option22]').prop("checked")){
		correctAnswers++;
	}

	if(!$("input[name=inlineRadioOptions3]:checked").val()){
		unAnswered++;
	}	
	if($('input[value=option33]').prop("checked")){
		correctAnswers++;
	}

	if(!$("input[name=inlineRadioOptions4]:checked").val()){
		unAnswered++;
	}	
	if($('input[value=option44]').prop("checked")){
		correctAnswers++;
	}

	$("#correct").html("Correct Answers: "+ correctAnswers);

	incorrectAnswers = 4 - correctAnswers - unAnswered;
	$("#incorrect").html("IncorrectAnswers: " + incorrectAnswers)

	$("#unanswered").html("Unanswered Questions: " + unAnswered)
	
	$("#answers").removeClass("hidden");
	$("#triviaGame").addClass("hidden");


}
//Main Process 

//launches game when start is clicked 
$("#startb").click(function(){
	$("#start").addClass("hidden");
	$("#triviaGame").removeClass("hidden");
	countdown();
}); 

//shows results when done is clicked 
$("#doneb").click(function(){
	
	answerPage();
 });		

