const express = require('express');
const router = express.Router();
var QRCode = require('qrcode');
console.log("Connected!");

router.post("/", (req, res) => {
    let cardNumber = req.body.cardNumber,
        cardDigits = req.body.cardDigits,
        expiryDate = req.body.expiryDate;
    let qrcode = `|${cardNumber}|${cardDigits}|${expiryDate}`;

    QRCode.toDataURL(qrcode, {type: "png"})
        .then(img => {
            res.status(200).json(img);
        })
        .catch(err => console.log(err));
});

module.exports = router