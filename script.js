require.config({
  paths: {
    vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs",
  },
});
let editor;
require(["vs/editor/editor.main"], function () {
  editor = monaco.editor.create(document.getElementById("editor"), {
    value: "// Start coding...",
    language: "javascript",
    theme: "vs-dark",
  });
});

function saveFile() {
  const blob = new Blob([editor.getValue()], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "code.js";
  a.click();
}
async function loadFolder(event) {
  const files = event.target.files;
  for (let file of files) {
    if (
      file.name.endsWith(".py") ||
      file.name.endsWith(".java") ||
      file.name.endsWith(".c") ||
      file.name.endsWith(".cpp")
    ) {
      const content = await file.text();
      editor.setValue(content);
      document.getElementById("file-list").innerHTML += `<li>${file.name}</li>`;
    }
  }
}

const excalidrawWrapper = document.createElement("div");
excalidrawWrapper.style.height = "500px";
excalidrawWrapper.style.border = "1px solid black";
document.getElementById("whiteboard").appendChild(excalidrawWrapper);

window.ExcalidrawApp = new ExcalidrawApp({
  target: excalidrawWrapper,
});

const term = new Terminal();
term.open(document.getElementById("terminal"));
term.write("Welcome to the Web Terminal!\n");
