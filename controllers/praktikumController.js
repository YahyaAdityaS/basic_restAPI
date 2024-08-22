exports.profil = (req, res) => {
    let name = req.query.name // mengambil nilai pada parameter name 
    let age = req.query.age // mengambil nilai pada parameter age 
    // membuat objek yang berisi data yang akan dijadikan response 
    // response berisi data nama dan umur sesuai dengan nilai parameter 
    let response = {
        nama: name,
        umur: age
    }
    return res.json(response)
}
exports.bujur_sangkar = (req, res) => {
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    // memberikan response dengan format JSON yang berisi objek di atas
    return res.json(response)
}

//=======SOAL SATU=======//


//=======SOAL TIGA=======//

    

