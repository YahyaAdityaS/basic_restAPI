exports.celcius = (req, res) => {
    // Mengambil nilai fahrenheit dari parameter
    let celcius = parseFloat(req.params.celcius);

    // Membuat objek response dengan hasil konversi
    let response = {
        celcius: celcius,
        result: {
            reamur: (4 * celcius / 5).toFixed,
            fahrenheit: ((9 * celcius / 5) + 32).toFixed,
            kelvin: (celcius + 273.15).toFixed,
        }
    };

    // Mengirimkan response dalam format JSON
    return res.json(response);
};

exports.reamur = (req, res) => {
    // Mengambil nilai fahrenheit dari parameter
    let reamur = parseFloat(req.params.reamur);

    // Membuat objek response dengan hasil konversi
    let response = {
        reamur: reamur,
        result: {
            celcius: (5 * reamur / 4).toFixed(2),
            fahrenheit: (9 * reamur / 4 + 32).toFixed(2),
            kelvin: (5 * reamur / 4 + 273.15).toFixed(2)
        }
    };

    // Mengirimkan response dalam format JSON
    return res.json(response);
};

exports.kelvin = (req, res) => {
    // Mengambil nilai fahrenheit dari parameter
    let kelvin = parseFloat(req.params.kelvin);

    // Membuat objek response dengan hasil konversi
    let response = {
        kelvin: kelvin,
        result: {
            celcius: (kelvin - 273.15).toFixed(2),
            fahrenheit: (9 * (kelvin - 273.15) / 5 + 32).toFixed(2),
            reamur: (4 * (kelvin - 273.15) / 5).toFixed(2),
        }
    };

    // Mengirimkan response dalam format JSON
    return res.json(response);
};

exports.fahrenheit = (req, res) => {
    // Mengambil nilai fahrenheit dari parameter
    let fahrenheit = parseFloat(req.params.fahrenheit);

    // Membuat objek response dengan hasil konversi
    let response = {
        fahrenheit: fahrenheit,
        result: {
            celcius: (5 * (fahrenheit - 32) / 9).toFixed(2),
            reamur: (4 * (fahrenheit - 32) / 9).toFixed(2),
            kelvin: ((5 * (fahrenheit - 32) / 9) + 273.15).toFixed(2),
        }
    };

    // Mengirimkan response dalam format JSON
    return res.json(response);
};