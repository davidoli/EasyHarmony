function calculateNotes() {
	//obtain root from user input
	let chordRoot = document.getElementById("chordRoot").value;
	//obtain chord type from user input
	let chordType = document.getElementById("chordType").value;
	//obtain extensions from user input
	//let ex = document.getElementById("add9").value.split(',');
	let nine = document.getElementById("add9").value;
	let eleven = document.getElementById("add11").value;
	let thirteen = document.getElementById("add13").value;

	let sharpnotes = ["A", "A#", "B", "C", "C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G"];
	let flatnotes = ["A", "Bb", "B", "C", "Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];

	let chord = { rootNum:NaN, thirdNum:NaN, fifthNum:NaN, seventhNum:NaN, ninthNum:NaN, eleventhNum:NaN, thirteenthNum:NaN };

	for(let i = 0; i<sharpnotes.length; i++){
		if(sharpnotes[i]==chordRoot){
		chord.rootNum = i;
		break;
		}
		if(flatnotes[i]==chordRoot){
			chord.rootNum = i;
			break;
		}
	}

	if(chordType == "" || chordType=="maj" || chordType=="7" || chordType=="maj7" || chordType=="Maj" || chordType=="Maj7"){
		chord.thirdNum = chord.rootNum + 4;
		chord.fifthNum = chord.rootNum + 7;
		if(chordType=="7")
			chord.seventhNum = chord.rootNum + 10;
			if(chordType=="maj7" || chordType=="Maj7")
				chord.seventhNum = chord.rootNum + 11;
	}
	else if(chordType=="min" || chordType == "min7" || chordType=="Min" || chordType == "Min7"){
		chord.thirdNum = chord.rootNum + 3;
		chord.fifthNum = chord.rootNum + 7;
		if(chordType == "min7" || chordType == "Min7")
			chord.seventhNum = chord.rootNum + 10;
	}
	else if(chordType=="sus2" || chordType == "sus4" || chordType=="Sus2" || chordType == "Sus4"){
		chord.fifthNum = chord.rootNum + 7;
		if(chordType=="sus2" || chordType=="Sus2")
			chord.thirdNum = chord.rootNum + 2;
		if(chordType=="sus4" || chordType=="Sus4")
			chord.thirdNum = chord.rootNum + 5;
	}
	if (nine=="9")
		chord.ninthNum = chord.rootNum+2;
	else if(nine=="b9")
		chord.ninthNum = chord.rootNum+1;
	else if(nine=="#9")
		chord.ninthNum = chord.rootNum+3;
	if (eleven=="11")
		chord.eleventhNum = chord.rootNum+5;
	else if(eleven=="#11")
		chord.eleventhNum = chord.rootNum+6;
	if (thirteen=="13")
		chord.thirteenthNum = chord.rootNum+9;
	else if(thirteen=="b13")
		chord.thirteenthNum = chord.rootNum+8;
	
	// intro =  chordRoot + chordType;

	// 	if(nine=="9"||nine=="b9"||nine=="#9")
	// 		intro += ", " + nine;
	// 	if(eleven=="11"||eleven=="#11")
	// 		intro += ", " + eleven;
	// 	if(thirteen=="13"||thirteen=="b13")
	// 		intro += ", " + thirteen;
	// intro += " is composed of ";

	resultstring = "";
			
	if(chordRoot == "A" || chordRoot == "B" || chordRoot == "C#" || chordRoot == "D" || chordRoot == "E" || chordRoot == "F#" || chordRoot == "G"){
		resultstring = sharpnotes[chord.rootNum] + " " + sharpnotes[chord.thirdNum] + " " + sharpnotes[chord.fifthNum];
		if(!isNaN(chord.seventhNum))
			resultstring += " " + sharpnotes[chord.seventhNum];
		if(!isNaN(chord.ninthNum))
			resultstring += " " + sharpnotes[chord.ninthNum];
		if(!isNaN(chord.eleventhNum))
			resultstring += " " + sharpnotes[chord.eleventhNum];
		if(!isNaN(chord.thirteenthNum))
			resultstring += " " + sharpnotes[chord.thirteenthNum];
	}
	else{
		resultstring = flatnotes[chord.rootNum] + " " + flatnotes[chord.thirdNum] + " " + flatnotes[chord.fifthNum];
		if(!isNaN(chord.seventhNum))
			resultstring += " " + flatnotes[chord.seventhNum];
		if(!isNaN(chord.ninthNum))
			resultstring += " " + flatnotes[chord.ninthNum];
		if(!isNaN(chord.eleventhNum))
			resultstring += " " + flatnotes[chord.eleventhNum];
		if(!isNaN(chord.thirteenthNum))
			resultstring += " " + flatnotes[chord.thirteenthNum];
	}
	document.getElementById("result").value = resultstring;
}
function calculateMode() {
	
}

function openPage(pageName) {
	var i;
	var x = document.getElementsByClassName("page");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	document.getElementById(pageName).style.display = "block";  
}







		