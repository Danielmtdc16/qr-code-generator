let url_qrCode = document.querySelector("#url-qrcode");
let warning = document.querySelector("#warning");
let btn_generate = document.querySelector("#btn-generate");
let qr_code = document.querySelector("#qr-code")

btn_generate.addEventListener('click', () => {

    if (url_qrCode.value) {
        warning.innerHTML = "";
        let qrCode = new QRCode(qr_code, {
            text: url_qrCode.value,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#18181b"
        });
        qrCode.innerHTML = qrCode;
    } else {
        qr_code.innerHTML = "";
        warning.innerHTML = "coloque uma URL para gerar!";
    }

});