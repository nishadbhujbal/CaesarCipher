// Encryption:
// Caesar to Cipher
function getAsciiValues() {
    let asciiValuesArray = [];
    let str1 = document.getElementById("inputText").value;
    console.log("Input String: " + str1);
    for (let i = 0; i < str1.length; i++) {
        asciiValuesArray.push(str1.charCodeAt(i));
    }

    return asciiValuesArray;
}

function encryptCipher(asciiValuesArray) {
    let CipherEncrypted = [];

    for (let i = 0; i < asciiValuesArray.length; i++) {
        if (asciiValuesArray[i] == 88) {
            CipherEncrypted.push(String.fromCharCode(65));
        }
        else if (asciiValuesArray[i] == 89) {
            CipherEncrypted.push(String.fromCharCode(66));
        }
        else if (asciiValuesArray[i] == 90) {
            CipherEncrypted.push(String.fromCharCode(67));
        }
        else if (asciiValuesArray[i] == 120) {
            CipherEncrypted.push(String.fromCharCode(97));
        }
        else if (asciiValuesArray[i] == 121) {
            CipherEncrypted.push(String.fromCharCode(98));
        }
        else if (asciiValuesArray[i] == 122) {
            CipherEncrypted.push(String.fromCharCode(99));
        }
        else if (asciiValuesArray[i] == 32) {
            CipherEncrypted.push(String.fromCharCode(32));
        }
        else {
            CipherEncrypted.push(String.fromCharCode(asciiValuesArray[i] + 3));
        }
    }
    return CipherEncrypted;
}



// Decryption:
function midEncrypt(asciiValuesArray) {
    let midValues = [];
    let str2 = document.getElementById("inputText").value;
    for (let i = 0; i < str2.length; i++) {
        midValues.push(asciiValuesArray[i] + 3);
    }
    return midValues;
}


function decryptCipher(midValuesArray) {
    let CipherDecrypted = [];

    for (let i = 0; i < midValuesArray.length; i++) {
        if (midValuesArray[i] == 97) {
            CipherDecrypted.push(String.fromCharCode(120));
        }
        else if (midValuesArray[i] == 98) {
            CipherDecrypted.push(String.fromCharCode(121));
        }
        else if (midValuesArray[i] == 99) {
            CipherDecrypted.push(String.fromCharCode(122));
        }
        else {
            CipherDecrypted.push(String.fromCharCode(midValuesArray[i] - 3));
        }
    }

    return CipherDecrypted;
}

function handleSendClickForCaesar() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";


    // Encryption:
    const asciiValuesArray = getAsciiValues();
    console.log("asciiValuesArray: " + asciiValuesArray);
    const CipherEncrypted = encryptCipher(asciiValuesArray);
    console.log("CipherEncrypted: " + CipherEncrypted);
    let encryption = CipherEncrypted.join("");
    document.getElementById("encryptedText").textContent = encryption;


    // Decryption:
    const midValuesArray = midEncrypt(asciiValuesArray);
    console.log("midEncrypted: " + midValuesArray);
    const CipherDecrypted = decryptCipher(midValuesArray);
    console.log("CipherDecrypted: " + CipherDecrypted);
    let decryption = CipherDecrypted.join("");
    document.getElementById("decryptedText").textContent = decryption;
}

let convert = document.getElementById("convert");
if (convert) {
    convert.addEventListener("click", handleSendClickForCaesar);
} else {
    console.error("Element with ID 'convert' not found.");
}