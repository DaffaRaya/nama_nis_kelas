const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//charAT
rl.question("Masukkan sebuah kalimat: ", (inputString) => {
    rl.question("Masukkan indeks yang akan anda cek:", (index) => {
        //Konversi nilai index ke tipe Number
        index = Number(index);
        //Periksa apakah index valid (beraa dalam rentang string)
        if (index >= 0 && index < inputString.length) {
            //Gunakan method charAT untuk mendapatkan karakter pada indeks yang diminta
            const character = inputString.charAt(index);
            console.log(`karakter pada indeks ${index}: ${character}`);
        } else {
            console.log("indeks tidak valid");
        }
        rl.close();
    });
});