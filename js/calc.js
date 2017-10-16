
$(document).ready(function(){
	$("#equalSign").click(solve);
	$(".btn").click(chk);
	$("#backspace").click(back);
	$("button").css("width","100%");
});

function solve(opt){
	var problem = $("#input_txt").val();
	var percents = problem.match(/[0-9]+%/g);
	var parser = math.parser();

	if (percents != null){
		for (var i = 0; i < percents.length; i++){
			var oPercent = percents[i].replace("%","");
			var prob = oPercent + "*0.01";
			var nPercent = parser.eval(prob);
			problem = problem.replace(percents[i],nPercent);
		}
	}

	
	var solution = parser.eval(problem);
	if (opt == 1){
		$("#input_txt2").val(solution);	
	}else{
		$("#input_txt").val(solution);
	}
}

function chk(){
	try
	{
		solve(1);
	}
	catch(e)
	{

	}
}

function back(){
	var problem = $("#input_txt").val();
	var nProblem = problem.substring(0,problem.length-1);
	$("#input_txt").val(nProblem);
}