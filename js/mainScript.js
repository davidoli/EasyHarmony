function calculateNotes() {
	//obtain root from user input
	let chordRoot = document.getElementById("chordRoot").value;
	//obtain chord type from user input
	let chordType = document.getElementById("chordType").value;
	//obtain extensions from user input
	
	let ex = document.getElementById("add9").value.split(',');
	if(ex.length >= 4){
		alert("ERROR: Invalid Extensions!");
		return;
	}

	let sharpnotes = ["A", "A#", "B", "C", "C#","D","D#","E","F","F#","G","G#","A"
	,"A#","B","C","C#","D","D#","E","F","F#","G"];
	let flatnotes = ["A", "Bb", "B", "C", "Db","D","Eb","E","F","Gb","G","Ab","A",
	"Bb","B","C","Db","D","Eb","E","F","Gb","G"];

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
	if(isNaN(chord.rootNum)){
		alert("ERROR: Invalid Root");
		return;
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
	else{
		alert("ERROR: Invalid Chord Type!");
		return;
	}

	let trimmedEx = [];
	for (let i = 0; i < ex.length; i++)
    	trimmedEx.push(ex[i].trim());

	if (trimmedEx[0]=="9"||trimmedEx[1]=="9"||trimmedEx[2]=="9")
		chord.ninthNum = chord.rootNum+2;
	else if(trimmedEx[0]=="b9"||trimmedEx[1]=="b9"||trimmedEx[2]=="b9")
		chord.ninthNum = chord.rootNum+1;
	else if(trimmedEx[0]=="#9"||trimmedEx[1]=="#9"||trimmedEx[2]=="#9")
		chord.ninthNum = chord.rootNum+3;
	if (trimmedEx[0]=="11"||trimmedEx[1]=="11"||trimmedEx[2]=="11")
		chord.eleventhNum = chord.rootNum+5;
	else if(trimmedEx[0]=="#11"||trimmedEx[1]=="#11"||trimmedEx[2]=="#11")
		chord.eleventhNum = chord.rootNum+6;
	if (trimmedEx[0]=="13"||trimmedEx[1]=="13"||trimmedEx[2]=="13")
		chord.thirteenthNum = chord.rootNum+9;
	else if(trimmedEx[0]=="b13"||trimmedEx[1]=="b13"||trimmedEx[2]=="b13")
		chord.thirteenthNum = chord.rootNum+8;
	///////////////////////////////////////////

	// intro =  chordRoot + chordType;

	// 	if(nine=="9"||nine=="b9"||nine=="#9")
	// 		intro += ", " + nine;
	// 	if(eleven=="11"||eleven=="#11")
	// 		intro += ", " + eleven;
	// 	if(thirteen=="13"||thirteen=="b13")
	// 		intro += ", " + thirteen;
	// intro += " is composed of ";

	let resultstring = "";
	
	if(chordRoot == "A#" || chordRoot == "D#" || chordRoot == "G#"){
		alert("NOTE: Please use flat key!");
		return;
	}
	else if(chordRoot == "A" || chordRoot == "B" || chordRoot == "C#" || chordRoot == "D" || chordRoot == "E" || chordRoot == "F#" || chordRoot == "G"){
		resultstring = sharpnotes[chord.rootNum] + "," + sharpnotes[chord.thirdNum] + "," + sharpnotes[chord.fifthNum];
		if(!isNaN(chord.seventhNum))
			resultstring += "," + sharpnotes[chord.seventhNum];
		if(!isNaN(chord.ninthNum))
			resultstring += "," + sharpnotes[chord.ninthNum];
		if(!isNaN(chord.eleventhNum))
			resultstring += "," + sharpnotes[chord.eleventhNum];
		if(!isNaN(chord.thirteenthNum))
			resultstring += "," + sharpnotes[chord.thirteenthNum];
	}
	else{
		resultstring = flatnotes[chord.rootNum] + "," + flatnotes[chord.thirdNum] + "," + flatnotes[chord.fifthNum];
		if(!isNaN(chord.seventhNum))
			resultstring += "," + flatnotes[chord.seventhNum];
		if(!isNaN(chord.ninthNum))
			resultstring += "," + flatnotes[chord.ninthNum];
		if(!isNaN(chord.eleventhNum))
			resultstring += "," + flatnotes[chord.eleventhNum];
		if(!isNaN(chord.thirteenthNum))
			resultstring += "," + flatnotes[chord.thirteenthNum];
	}
	document.getElementById("result").value = resultstring;
}

function calculateMode() {
	let chordRoot = document.getElementById("modeRoot").value;
	let mode = document.getElementById("modes").value;

	let sharpnotes = ["A", "A#", "B", "C", "C#","D","D#","E","F","F#","G","G#","A",
	"A#","B","C","C#","D","D#","E","F","F#","G"];
	let flatnotes = ["A", "Bb", "B", "C", "Db","D","Eb","E","F","Gb","G","Ab",
	"A","Bb","B","C","Db","D","Eb","E","F","Gb","G"];
	/////////////////////////////Calculate Root/Start Note///////////////
	let start = -1;
	for(let i = 0; i<sharpnotes.length; i++){
		if(sharpnotes[i]==chordRoot){
			start = i;
			break;
		}
		if(flatnotes[i]==chordRoot){
			start = i;
			break;
		}
	}
	if(start == -1){
		alert("ERROR: Invalid Root");
		return;
	}
	////////////////////////////Calculate Mode////////////////////////////
	let scale = {second: start+2, third: start+4, fourth: start+5,
		fifth: start+7, sixth: start+9, seventh: start+11, octave: start+12};
	if(mode=="dorian"){
		scale.third--;
		scale.seventh--;
	}
	else if(mode=="phrygian"){
		scale.second--;
		scale.third--;
		scale.sixth--;
		scale.seventh--;
	}
	else if(mode=="lydian"){
		scale.fourth++;
	}
	else if(mode=="mixolydian"){
		scale.seventh--;
	}
	else if(mode=="aeolian"){
		scale.third--;
		scale.sixth--;
		scale.seventh--;
	}
	else if(mode=="locrian"){
		scale.second--;
		scale.third--;
		scale.fifth--;
		scale.sixth--;
		scale.seventh--;
	}
	result = "";

	if(chordRoot == "A#" || chordRoot == "D#" || chordRoot == "G#"){
		alert("NOTE: Please use flat key!");
		return;
	}
	else if(chordRoot == "A" || chordRoot == "B" || chordRoot == "C#" || chordRoot == "D" ||
	 chordRoot == "E" || chordRoot == "F#" || chordRoot == "G"){
		result+=sharpnotes[start];
		for(var key in scale) {
    		var value = scale[key];
    		result+= ", " + sharpnotes[value];
		}
	 }
	else{
		result+=flatnotes[start];
		for(var key in scale) {
    		var value = scale[key];
    		result+= ", " + flatnotes[value];
		}
	}
	document.getElementById("modeResult").value = result;
}
function calculateNegative() {
	let key = document.getElementById("key").value;
		
	//obtain root from user input
	let chordRoot = document.getElementById("chordRoot2").value;
	//obtain chord type from user input
	let chordType = document.getElementById("chordType2").value;
	//obtain extensions from user input
	
	let ex = document.getElementById("add92").value.split(',');
	if(ex.length >= 4){
		alert("ERROR: Invalid Extensions!");
		return;
	}

	let sharpnotes = ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A"
	,"A#","B","C","C#","D","D#","E","F","F#","G","G#"];
	let flatnotes = ["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A",
	"Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"];

	let chord = { rootNum:NaN, thirdNum:NaN, fifthNum:NaN, seventhNum:NaN, ninthNum:NaN, eleventhNum:NaN, thirteenthNum:NaN };

	let keyNum = NaN;
	for(let i = 0; i<sharpnotes.length; i++){
		if(sharpnotes[i]==key){
		keyNum = i;
		break;
		}
		if(flatnotes[i]==key){
			keyNum = i;
			break;
		}
		keyRoot = keyNum;
	}
	let keyFifth = keyNum + 7;
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
	if(isNaN(chord.rootNum)){
		alert("ERROR: Invalid Root");
		return;
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
	else{
		alert("ERROR: Invalid Chord Type!");
		return;
	}

	let trimmedEx = [];
	for (let i = 0; i < ex.length; i++)
    	trimmedEx.push(ex[i].trim());

	if (trimmedEx[0]=="9"||trimmedEx[1]=="9"||trimmedEx[2]=="9")
		chord.ninthNum = chord.rootNum+2;
	else if(trimmedEx[0]=="b9"||trimmedEx[1]=="b9"||trimmedEx[2]=="b9")
		chord.ninthNum = chord.rootNum+1;
	else if(trimmedEx[0]=="#9"||trimmedEx[1]=="#9"||trimmedEx[2]=="#9")
		chord.ninthNum = chord.rootNum+3;
	if (trimmedEx[0]=="11"||trimmedEx[1]=="11"||trimmedEx[2]=="11")
		chord.eleventhNum = chord.rootNum+5;
	else if(trimmedEx[0]=="#11"||trimmedEx[1]=="#11"||trimmedEx[2]=="#11")
		chord.eleventhNum = chord.rootNum+6;
	if (trimmedEx[0]=="13"||trimmedEx[1]=="13"||trimmedEx[2]=="13")
		chord.thirteenthNum = chord.rootNum+9;
	else if(trimmedEx[0]=="b13"||trimmedEx[1]=="b13"||trimmedEx[2]=="b13")
		chord.thirteenthNum = chord.rootNum+8;

	//////////////////////PRINTING ORIGINAL CHORD////////////////////////////
	let resultstring = "";
	
	if(key == "A#" || key == "D#" || key == "G#"){
		alert("NOTE: Please use flat key!");
		return;
	}
	else if(key == "A" || key == "B" || key == "C#" || key == "D" || 
		key == "E" || key == "F#" || key == "G"){
		resultstring = sharpnotes[chord.rootNum] + "," + sharpnotes[chord.thirdNum] + "," + sharpnotes[chord.fifthNum];
		if(!isNaN(chord.seventhNum))
			resultstring += "," + sharpnotes[chord.seventhNum];
		if(!isNaN(chord.ninthNum))
			resultstring += "," + sharpnotes[chord.ninthNum];
		if(!isNaN(chord.eleventhNum))
			resultstring += "," + sharpnotes[chord.eleventhNum];
		if(!isNaN(chord.thirteenthNum))
			resultstring += "," + sharpnotes[chord.thirteenthNum];
	}
	else{
		resultstring = flatnotes[chord.rootNum] + "," + flatnotes[chord.thirdNum] + "," + flatnotes[chord.fifthNum];
		if(!isNaN(chord.seventhNum))
			resultstring += "," + flatnotes[chord.seventhNum];
		if(!isNaN(chord.ninthNum))
			resultstring += "," + flatnotes[chord.ninthNum];
		if(!isNaN(chord.eleventhNum))
			resultstring += "," + flatnotes[chord.eleventhNum];
		if(!isNaN(chord.thirteenthNum))
			resultstring += "," + flatnotes[chord.thirteenthNum];
	}
	document.getElementById("negativeResult1").value = resultstring;

	////////////////BLURB IN BETWEEN //////////////////////////////////
	if(key == "A" || key == "B" || key == "D" || 
		key == "E" || key == "F#" || key == "G"){
		document.getElementById("keyAxis").innerHTML = "flipped around the key axis of "
		 + sharpnotes[keyNum] + " and " + sharpnotes[keyFifth];
	}
	else{
		document.getElementById("keyAxis").innerHTML = "flipped around the key axis of "
		 + flatnotes[keyNum] + " and " + flatnotes[keyFifth];
	}
	////////////////FLIPPING CHORD HERE////////////////////////////////
	// let flatnotes = ["A", "Bb", "B", "C", "Db","D","Eb","E","F","Gb","G","Ab","A",
	// "Bb","B","C","Db","D","Eb","E","F","Gb","G"];
	let resultflip = "";
	let nChord = { rootNum:NaN, thirdNum:NaN, fifthNum:NaN, seventhNum:NaN, ninthNum:NaN, eleventhNum:NaN, thirteenthNum:NaN };

	nChord.rootNum = keyFifth + (keyNum - chord.rootNum);
	if(chord.thirdNum>13)
		chord.thirdNum -= 12;
	nChord.thirdNum = keyFifth + (keyNum - chord.thirdNum);
	if(chord.fifthNum>13)
		chord.fifthNum -= 12;
	nChord.fifthNum = keyFifth + (keyNum - chord.fifthNum);
	if(!isNaN(chord.seventhNum)){
		if(chord.seventhNum>13)
			chord.seventhNum -= 12;
		nChord.seventhNum = keyFifth + (keyNum - chord.seventhNum);
	}
	if(!isNaN(chord.ninthNum)){
		if(chord.ninthNum>13)
			chord.ninthNum -= 12;
		nChord.ninthNum = keyFifth + (keyNum - chord.ninthNum);
	}
	if(!isNaN(chord.eleventhNum)){
		if(chord.eleventhNum>13)
			chord.eleventhNum -= 12;
		nChord.eleventhNum = keyFifth + (keyNum - chord.eleventhNum);
	}
	if(!isNaN(chord.thirteenthNum)){
		if(chord.thirteenthNum>13)
			chord.thirteenthNum -= 12;
		nChord.thirteenthNum = keyFifth + (keyNum - chord.thirteenthNum);
	}
	////////////////PRINTING NEGATIVE CHORD //////////////////////////

	else if(key == "A" || key == "B" || key == "C#" || key == "D" || 
		key == "E" || key == "F#" || key == "G"){
		resultflip = sharpnotes[nChord.rootNum] + "," + sharpnotes[nChord.thirdNum] + "," + sharpnotes[nChord.fifthNum];
		if(!isNaN(chord.seventhNum))
			resultflip += "," + sharpnotes[nChord.seventhNum];
		if(!isNaN(chord.ninthNum))
			resultflip += "," + sharpnotes[nChord.ninthNum];
		if(!isNaN(chord.eleventhNum))
			resultflip += "," + sharpnotes[nChord.eleventhNum];
		if(!isNaN(chord.thirteenthNum))
			resultflip += "," + sharpnotes[nChord.thirteenthNum];
	}
	else{
		resultflip = flatnotes[nChord.rootNum] + "," + flatnotes[nChord.thirdNum] + "," + flatnotes[nChord.fifthNum];
		if(!isNaN(chord.seventhNum))
			resultflip += "," + flatnotes[nChord.seventhNum];
		if(!isNaN(chord.ninthNum))
			resultflip += "," + flatnotes[nChord.ninthNum];
		if(!isNaN(chord.eleventhNum))
			resultflip += "," + flatnotes[nChord.eleventhNum];
		if(!isNaN(chord.thirteenthNum))
			resultflip += "," + flatnotes[nChord.thirteenthNum];
	}
	document.getElementById("negativeResult2").value = resultflip;
}

function openPage(pageName) {
	var i;
	var x = document.getElementsByClassName("page");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	document.getElementById(pageName).style.display = "block";  
}
