
const crypto = require("crypto");

const aesEncy1 = async (msg,key,iv) =>{

    const algorithm = "aes-256-cbc"; 
    // the cipher function
    const cipher = await crypto.createCipheriv(algorithm, key, iv);
   
    let encryptedData = await cipher.update(msg, "utf-8", "hex");
    
    encryptedData += await cipher.final("hex");
    
    console.log("Encrypted message: " + encryptedData);
    return encryptedData
}

const aesDec1 = async(msg, key, iv) =>{
    const algorithm = "aes-256-cbc"; 
    const decipher = await crypto.createDecipheriv(algorithm, key, iv);

    let decryptedData = await decipher.update(msg, "hex", "utf-8");
    
    decryptedData += await decipher.final("utf8");
    
    console.log("Decrypted message: " + decryptedData);

    return decryptedData
}

module.exports = {aesEncy1, aesDec1}