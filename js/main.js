var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elTranslate = elForm.querySelector(".js-translate");
var elResult = elForm.querySelector(".js-result");

elForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var elInputVal = elInput.value.trim();
    var elTranslateVal = elTranslate.value;

    if (elInputVal > 0 || elInputVal < 0) {
        elResult.textContent = `Iltimos son kiritmang`;
        elResult.style.color = "red";
        elResult.style.marginTop = "20px";
    }
    else if (elTranslateVal == "EN" && elInputVal == "Dushanba") {
        elResult.textContent = `Monday`;
        elResult.style.color = "blue";
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
        elResult.style.marginTop = "20px";
    }
    else if (elTranslateVal == "EN" && elInputVal == "Seshanba") {
        elResult.style.color = "blue";
        elResult.textContent = `Tuesday`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "EN" && elInputVal == "Chorshanba") {
        elResult.style.color = "blue";
        elResult.textContent = `Thirsday`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "EN" && elInputVal == "Payshanba") {
        elResult.style.color = "blue";
        elResult.textContent = `Thursday`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "EN" && elInputVal == "Juma") {
        elResult.style.color = "blue";
        elResult.textContent = `Friday`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "EN" && elInputVal == "Shanba") {
        elResult.style.color = "blue";
        elResult.textContent = `Saturday`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "EN" && elInputVal == "Yakshanba") {
        elResult.style.color = "blue";
        elResult.textContent = `Sunday`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "RU" && elInputVal == "Dushanba") {
        elResult.style.color = "blue";
        elResult.textContent = `Понидельник`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "RU" && elInputVal == "Seshanba") {
        elResult.style.color = "blue";
        elResult.textContent = `Вторник`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "RU" && elInputVal == "Chorshanba") {
        elResult.style.color = "blue";
        elResult.textContent = `Среда`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "RU" && elInputVal == "Payshanba") {
        elResult.style.color = "blue";
        elResult.textContent = `Четверг`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "RU" && elInputVal == "Juma") {
        elResult.style.color = "blue";
        elResult.textContent = `Пятьница`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "RU" && elInputVal == "Shanba") {
        elResult.style.color = "blue";
        elResult.textContent = `Суббота`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (elTranslateVal == "RU" && elInputVal == "Yakshanba") {
        elResult.style.color = "blue";
        elResult.textContent = `Воскересенье`;
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";

    }
    else if (elInputVal !== "Dushanba, Seshanba,Chorshanba,Payshanba,Juma,Shanba,Yakshanba") {
        elResult.textContent = "Tarjimon test rejimda ishlamoqda!"
        elResult.style.color = "red";
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
    else if (isNaN(elTranslateVal)) {
        elResult.textContent = `Tilni tanlang`;
        elResult.style.color = "red";
        elResult.style.transform = "translateY(0px)";
        elResult.style.transform = "translateY(5px)";
    }
});
