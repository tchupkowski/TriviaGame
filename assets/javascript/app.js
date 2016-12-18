//Global Variables 

var correctAnswers = 0;
var incorrectAnswers =0;
var unAnswered = 0;

//Functions 

function countdown(){

	var seconds = 10;
	//alert("countdown")
	tick();

function tick(){
		//alert("tick function");
		seconds--;
		$("#timer").html("Time Remaining: " + seconds);
		if(seconds > 0){
			setTimeout(tick, 1000);
		}
		else{ answerPage()}
}
}

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

$("#startb").click(function(){
	$("#start").addClass("hidden");
	$("#triviaGame").removeClass("hidden");
	countdown();
}); 

$("#doneb").click(function(){
	
	answerPage();
 });		

