export function caesarDecrypt(text, shift) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const textLength = text.length;
  let encryptedText = "";

  for (let i = 0; i < textLength; i++) {
    const char = text[i].toUpperCase();
    if (char === " ") {
      encryptedText += " ";
      continue;
    }

    const charIndex = alphabet.indexOf(char);
    if (charIndex === -1) {
      encryptedText += char;
      continue;
    }

    // Perhitungan indeks baru dengan pergeseran dan dihitung ulang dari awal
    let newIndex = (charIndex + shift + alphabet.length) % alphabet.length;
    const newChar = alphabet[newIndex];
    encryptedText += newChar;
  }

  return encryptedText;
}


// Exporting the functions
export function caesarEncrypt(text, shift) {
  return caesarDecrypt(text, -shift);
}
