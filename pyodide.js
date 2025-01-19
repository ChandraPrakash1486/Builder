// pyodide.js - Handles Pyodide Loading & Python Execution

let pyodideInstance = null;

// Function to load Pyodide only once
async function loadPyodideInstance() {
    if (!pyodideInstance) {
        pyodideInstance = await loadPyodide();
        console.log("✅ Pyodide loaded successfully!");
    }
    return pyodideInstance;
}

// Function to run Python code
async function runPythonCode(code) {
    let pyodide = await loadPyodideInstance();

    try {
        let output = await pyodide.runPythonAsync(code);
        return output;
    } catch (err) {
        return "Error: " + err.message;
    }
}

// Function to install additional Python libraries (NumPy, Pandas, etc.)
async function installPythonPackages(packages) {
    let pyodide = await loadPyodideInstance();
    await pyodide.loadPackage(packages);
    console.log("✅ Installed packages: ", packages);
}
