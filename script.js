let url_qrCode = document.querySelector("#url-qrcode");
let warning = document.querySelector("#warning");
let btn_generate = document.querySelector("#btn-generate");
let qr_code = document.querySelector("#qr-code")

btn_generate.addEventListener('click', () => {

    if (url_qrCode.value) {

    } else {
        warning.innerHTML = "coloque uma URL para gerar!";
    }

});