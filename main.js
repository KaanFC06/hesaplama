const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Yaşınızı giriniz: ", (yasGirdi) => {
    let yas = parseInt(yasGirdi);

    if (isNaN(yas) || yas < 0) {
        console.log("Geçerli bir yaş giriniz.");
    } else if (yas <= 12) {
        console.log("Çocuksun.");
    } else if (yas <= 17) {
        console.log("Ergenlik dönemindesin.");
    } else {
        console.log("Yetişkinsin.");
    }

    console.log("-----------------------------------------");

    rl.question("Sınav notunuzu giriniz (0-100): ", (notGirdi) => {
        let notDegeri = parseFloat(notGirdi);

        if (isNaN(notDegeri)) {
            console.log("Lütfen geçerli bir sayı giriniz!");
        } else if (notDegeri < 0 || notDegeri > 100) {
            console.log("Hatalı giriş! Not 0 ile 100 arasında olmalıdır.");
        } else if (notDegeri >= 50) {
            console.log(`Tebrikler! Notunuz: ${notDegeri}. Dersten GEÇTİNİZ.`);
        } else {
            console.log(`Üzgünüm, notunuz: ${notDegeri}. Dersten KALDINIZ.`);
        }

        rl.close();
    });
});