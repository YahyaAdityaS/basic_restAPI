exports.decimalToBinary = (req, res) => {
    const { decimal } = req.body;
    const binary = parseInt(decimal, 10).toString(2);
    return res.json({ binary });
};

exports.binaryToDecimal = (req, res) => {
    const { binary } = req.body;
    const decimal = parseInt(binary, 2).toString(10);
    return res.json({ decimal });
};

exports.octalToHexadecimal = (req, res) => {
    const { octal } = req.body;
    const decimal = parseInt(octal, 8);
    const hexadecimal = decimal.toString(16).toUpperCase();
    return res.json({ hexadecimal });
};

exports.hexadecimalToOctal = (req, res) => {
    const { hexadecimal } = req.body;
    const decimal = parseInt(hexadecimal, 16);
    const octal = decimal.toString(8);
    return res.json({ octal });
};
