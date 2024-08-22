exports.rumusBMI = (req, res) => {
    let tinggi = Number(req.body.tinggi)
    let berat = Number(req.body.berat) // Mengambil nilai berat dari input
    let BMI = berat / Math.pow(tinggi / 100, 2) // Menghitung BMI, tinggi dalam meter

    let status;

    if (BMI < 18.5) {
        status = "Kekurangan Berat Badan";
    } else if (BMI >= 18.5 && BMI < 24.9) {
        status = "Normal (Ideal)";
    } else if (BMI >= 25 && BMI < 29.9) {
        status = "Kelebihan Berat Badan";
    } else {
        status = "Kelebihan Berat Badan(Obesitas)";
    }

    // Membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        berat: berat,
        BMI: BMI.toFixed(2), // Membatasi dua angka di belakang koma
        status: status
    };

    // Memberikan response dengan format JSON yang berisi objek di atas
    return res.json(response);
}
