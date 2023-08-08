const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan sebuah kalimat: ", (kalimat) => {
    rl.question("Masukkan indeks awal: ", (startIndex) => {
      rl.question("Masukkan indeks akhir: ", (endIndex) => {
        // konversi nilai ke tipe number
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        
        // gunakan slice untuk mengambil substring dari startindex hingga endindex
        const slicedSubstring = kalimat.slice(startIndex, endIndex);
  
        console.log(`Hasil slice dari indeks ${startIndex} hingga ${endIndex}: ${slicedSubstring}`);
        
        rl.close();
      });
    });
  });
