exports.balok = (req, res) => {
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai lebar dari body

    let volume = panjang * lebar * tinggi
    let luasper = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi))
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        volume: volume,
        luasper: luasper
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    return res.json(response)
}
exports.kubus = (req, res) => {
    let sisi = Number(req.body.sisi) // mengambil nilai panjang dari
    let volume = sisi * sisi * sisi
    let luasper = 6 * sisi * sisi
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luasper: luasper
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    return res.json(response)
}
exports.tabung = (req, res) => {
    let tinggi = Number(req.body.tinggi) // mengambil nilai panjang dari
    let jarijari = Number(req.body.jarijari)
    let volume = Math.PI * Math.pow(jarijari, 2) * tinggi
    let luasper = 2 * Math.PI * jarijari * (jarijari + tinggi)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        volume: volume,
        luasper: luasper
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    return res.json(response)
}
exports.bola = (req, res) => {
    let jarijari = Number(req.body.jarijari) // mengambil nilai panjang dari
    let volume = 4 * Math.PI * Math.pow(jarijari, 3) / 3
    let luasper = 4 * Math.PI * Math.pow(jarijari, 2)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        volume: volume,
        luasper: luasper
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    return res.json(response)
}
