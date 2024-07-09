function caesarCipher(str, shift) {
  return str.replace(/[a-z]/g, function (char) {
    return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
  });
}

function processText(action) {
  const inputText = document.getElementById("inputText").value;
  let outputText = "";

  if (action === "encrypt") {
    outputText = caesarCipher(inputText, 3);
  } else if (action === "decrypt") {
    outputText = caesarCipher(inputText, -3);
  }

  document.getElementById("outputText").innerText = outputText;
  document.getElementById("output").style.display = "block";
}

function copyText() {
  const outputText = document.getElementById("outputText").innerText;
  navigator.clipboard.writeText(outputText).then(() => {
    alert("Texto copiado!");
  });
}
