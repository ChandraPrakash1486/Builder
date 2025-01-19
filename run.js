function runJavaScript() {
    try {
        let code = editor.getValue();
        let output = eval(code);
        document.getElementById("output").innerText = output;
    } catch (err) {
        document.getElementById("output").innerText = "Error: " + err.message;
    }
}

async function runPython() {
    let pyodide = await loadPyodide();
    let code = editor.getValue();
    
    try {
        let output = pyodide.runPython(code);
        document.getElementById("output").innerText = output;
    } catch (err) {
        document.getElementById("output").innerText = "Error: " + err.message;
    }
}
