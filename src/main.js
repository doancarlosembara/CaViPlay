import { caesarEncrypt, caesarDecrypt } from "./scripts/caesar.js";
import { vigenereEncrypt, vigenereDecrypt } from "./scripts/vigenere.js";
import { playfairEncrypt, playfairDecrypt } from "./scripts/playfair.js";

// Event handler for the Caesar Cipher buttons
document.getElementById("caesarEncryptBtn").addEventListener("click", () => {
  const text = document.getElementById("caesarText").value.toUpperCase();
  const shift = parseInt(document.getElementById("caesarShift").value);
  const encryptedText = caesarEncrypt(text, shift);
  document.getElementById("caesarOutput").value = encryptedText;
});

document.getElementById("caesarDecryptBtn").addEventListener("click", () => {
  const text = document.getElementById("caesarText").value.toUpperCase();
  const shift = parseInt(document.getElementById("caesarShift").value);
  const decryptedText = caesarDecrypt(text, shift);
  document.getElementById("caesarOutput").value = decryptedText;
});

// Event handler for the Vigenere Cipher buttons
document.getElementById("vigenereEncryptBtn").addEventListener("click", () => {
  const text = document.getElementById("vigenereText").value.toUpperCase();
  const keyword = document
    .getElementById("vigenereKeyword")
    .value.toUpperCase();
  const encryptedText = vigenereEncrypt(text, keyword);
  document.getElementById("vigenereOutput").value = encryptedText;
});

document.getElementById("vigenereDecryptBtn").addEventListener("click", () => {
  const text = document.getElementById("vigenereText").value.toUpperCase();
  const keyword = document
    .getElementById("vigenereKeyword")
    .value.toUpperCase();
  const decryptedText = vigenereDecrypt(text, keyword);
  document.getElementById("vigenereOutput").value = decryptedText;
});

// Event handler for the Playfair Cipher buttons
document.getElementById("playfairEncryptBtn").addEventListener("click", () => {
  const text = document.getElementById("playfairText").value.toUpperCase();
  const keyword = document
    .getElementById("playfairKeyword")
    .value.toUpperCase();
  const encryptedText = playfairEncrypt(text, keyword);
  document.getElementById("playfairOutput").value = encryptedText;
});

document.getElementById("playfairDecryptBtn").addEventListener("click", () => {
  const text = document.getElementById("playfairText").value.toUpperCase();
  const keyword = document
    .getElementById("playfairKeyword")
    .value.toUpperCase();
  const decryptedText = playfairDecrypt(text, keyword);
  document.getElementById("playfairOutput").value = decryptedText;
});
