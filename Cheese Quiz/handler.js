function generateQuiz(){
	var questions = [["What price range do you tend to buy in?",
				[["Cheap", 2],
				["Scrooge McDuck Rich", 4],
				["Mid-Range", 0],
				["One movie theater popcorn", 5],
				["So Cheap they pay you to take it", 3],
				["25% off your next Papa Gino's order", 1]]],
			["What is your favorite cheese delivery service?",
				[["This is the first answer",2],
				["This is a generic answer", 2],
				["This is a generic answer", 2],
				["This is a generic answer", 2],
				["This is a generic answer", 2],
				["This is the last answer", 0]]],
			["This is the last question",
				[["This is the first answer",3],
				["This is a generic answer", 2],
				["This is a generic answer", 2],
				["This is a generic answer", 2],
				["This is a generic answer", 2],
				["This is the last answer", 0]]]	
			];
	for(var i = 0; i < questions.length; i++){
		var name = "q" + i;
		var div = document.createElement(name);
		
		var contents = "<br>";	
		contents += "<h3>" + questions[i][0] + "</h3>";
		for(var a = 0; a < questions[i][1].length; a++){
			console.log("<input type=\"radio\" name=\"" + (name + "-" + a) + "\" value=\"" + questions[i][1][a][0] + "\">&nbsp;" + questions[i][1][a][0] + "<br>");
			contents += "<input type=\"radio\" name=\"" + (name + "-" + a) + "\" value=\"" + questions[i][1][a][0] + "\">&nbsp;" + questions[i][1][a][0] + "<br>";
		}
		contents += "<br>";	
		div.innerHTML = contents;

		document.getElementById("questions").appendChild(div);
	}
}

