//Активация кнопок при вводе в инпуты
function activate() {
    if ($('#input1').val() != '' &&
        $('#input2').val() != '' && $('#input3').val() != '') {
        $('#success').removeClass("disabled");
    }
    else {
        $('#success').addClass("disabled");
    }
}

function activate1() {
    if ($('#input4').val() != '' &&
        $('#input5').val() != '' && $('#input6').val() != '') {
        $('#success1').removeClass("disabled");
    }
    else {
        $('#success1').addClass("disabled");
    }
}

function activate2() {
    if ($('#input7').val() != '' &&
        $('#input8').val() != '' && $('#input9').val() != '') {
        $('#success2').removeClass("disabled");
    }
    else {
        $('#success2').addClass("disabled");
    }
}
//Активация кнопок при вводе в инпуты

// Проверка номера
function check() {
    var tel = document.getElementById("input8").value;
    if (tel.length != 11) {
        document.getElementById('error').style.display = "block";
    }else{
        document.getElementById('error').style.display = "none";
    }
}
// Проверка номера
