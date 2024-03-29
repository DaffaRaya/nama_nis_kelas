const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan indeks awal: ", (startIndex) => {
      rl.question("Masukkan panjang substring: ", (length) => {
        // konversi nilai index ke tipe Number
        startIndex = Number(startIndex);
        length = Number(length);
        // Gunakan method substr untuk mengambil substring dengan panjang length
        const substringResult = kalimat.substr(startIndex, length);
        console.log(`Hasil substring dari indeks ${startIndex} dengan panjang ${length} ${substringResult}`);
        rl.close();
      });
    });
  });
