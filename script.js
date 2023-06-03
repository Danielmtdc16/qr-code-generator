let url_qrCode = document.querySelector("#url-qrcode");
let warning = document.querySelector("#warning");
let btn_generate = document.querySelector("#btn-generate");
let qr_code = document.querySelector("#qr-code")

btn_generate.addEventListener('click', () => {

    qr_code.innerHTML = "";

    if (url_qrCode.value) {
        let qrCode = new QRCode(qr_code, {
            text: url_qrCode.value,
            width: 200,
            height: 200
        });
        qrCode.innerHTML = qrCode;
    } else {
        qr_code.innerHTML = "";
        warning.innerHTML = "coloque uma URL para gerar!";
    }

});