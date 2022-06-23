var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (i = 0; i < names.length; i++) {
	var startingChar = names[i][0].toLowerCase();
	if(startingChar == 'j'){
		helloSpeaker.speak(names[i]);
	}
	else{
			window.byeSpeaker.speak(names[i])
	}
}
