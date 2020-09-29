function showm(){
	document.getElementById('modal').style.display = 'block';
}

function closem(){
	document.getElementById('file-name').value = '';
	document.getElementById('modal').style.display = 'none';
}

function translate(){
	var langFrom = document.getElementById('languages-in').value;
	var langTo = document.getElementById('languages-out').value;
	var codein = document.getElementById('code-input').value;
	if (codein){
		RunTranslate(langFrom,langTo,codein);
	}
}

function RunTranslate(from,to,codevalue){
	var returnedstr = ""

	if (from == 'python' && to == 'c'){
		var keywords = {
			"def":"void",
			"int":"int",
			"print":"printf"
		}

		for (var i=0; i<=codevalue.length; i++) {
			returnedstr += keywords[codevalue];
		}

	document.getElementById("code-output").value = returnedstr;
	}else{
		alert('Changing from '+from+ ' to '+to);
	}
}

function copy(){
	var codeout = document.getElementById('code-output');
	var data = codeout.value;
	if (data != ""){
		var text = codeout.select();
		document.execCommand('copy');
	}else{
		alert("Please enter a file!!");
	}
	
}