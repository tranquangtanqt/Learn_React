
export const readContentMultiFileData = {
    index: `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div class="row">
                    <label>Select multiple files to read from your system:</label>
                    <input type="file" id="fileinput" class="form-control-file" multiple />
                </div>
                
                <div class="row mt-3">
                    <div class="col-2 offset-10 float-end">
                        <input type="button" id="btn-copy" onclick="copyContent()" value="Copy clipboard" class="btn btn-primary" />
                    </div>
                </div>
                
                <div class="row mt-3">
                    <textarea id="output" name="output" rows="30" cols="50"></textarea>	
                </div>
            </div>
            
            <script src="script.js"></script>
        </body>
    </html>`,
    script: `var content = "";
/**
 *  Simple JavaScript Promise that reads a file as text.
 **/
function readFileAsText(file){
	return new Promise(function(resolve,reject){
		let fr = new FileReader();

		fr.onload = function(){
			resolve(fr.result);
		};

		fr.onerror = function(){
			reject(fr);
		};

		fr.readAsText(file);
	});
}

// Handle multiple fileuploads
document.getElementById("fileinput").addEventListener("change", function(ev){
	let files = ev.currentTarget.files;
	let readers = [];
	content = "";

	// Abort if there were no files selected
	if(!files.length) return;

	// Store promises in array
	for(let i = 0;i < files.length;i++){
		readers.push(readFileAsText(files[i]));
	}
	
	// Trigger Promises
	Promise.all(readers).then((values) => {
		// Values will be an array that contains an item
		// with the text of every selected file
		// ["File1 Content", "File2 Content" ... "FileN Content"]
		//console.log(values);
		
		for(let i = 0; i < values.length; i++){
			content += values[i];
			content += "\\n";
		}
		console.log(content);
		
		document.getElementById("output").value = content;
		
	});
}, false);

function copyContent(){
	if(content == ""){
		 alert("not found content");
		return;
	}
	copyText(document.getElementById("output"), content);
}

function copyText(ele, str){
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("copied");
} \n`
}