//Clases
class FormMsg {
  constructor(fullName, email, telephone, address, servicios, msgInput) {
    this.fullName = fullName;
    this.email = email;
    this.telephone = telephone;
    this.address = address;
    this.servicios = servicios;
    this.msgInput = msgInput;
  }
  printAllInputs = function () {
    console.log(
      `El nombre completo es: ${this.fullName} \n Email: ${
        this.email
      } \n Teléfono: ${this.telephone} \n Dirección: ${
        this.address
      } \n Los Servicios son: ${this.servicios.join()}\n Consulta: ${
        this.msgInput
      }`,
    );
  };
}

//Funciones

function inputString(str) {
  return prompt('Ingrese su ' + str + ': ');
}

function isEmail(email) {
  RegExpEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return RegExpEmail.test(email);
}
//Selectores
let email = document.querySelector(".form-group input[name='email']");
let msg = document.getElementById('msgID');
let input = document.getElementsByTagName('input');
let checkbox = document.getElementsByClassName('form-check-input');
let btnModal = document.querySelector('button.btn.btn-success');
let socialLi = $('.socialside ul li');
//https://github.com/webfashionist/RichText
if ($('#msgID').length > 0) {
  $('#msgID').richText({
    imageUpload: false,
    fileUpload: false,
    videoEmbed: false,
    urls: false,
    removeStyles: false,
    code: false,
    table: false,
    justify: false,
  });
}
$(document).ready(function () {
  $(window).keydown(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
  socialLi.mouseenter(function (e) {
    console.log(this);
    $(this).animate({
      width: '100px',
    });
  });
  socialLi.mouseleave(function (e) {
    $(this).animate({
      width: '50px',
    });
  });
});

window.onload = function () {
  if ($('#msgID').length > 0) {
    email.addEventListener('input', function (e) {
      if (isEmail(e.target.value)) {
        email.classList.remove('wrong');
        btnModal.disabled = false;
      } else {
        email.classList.add('wrong');
        btnModal.disabled = true;
      }
    });
    btnModal.addEventListener('click', function (e) {
      let modalSubmit = new FormMsg(
        name.value,
        email.value,
        phone.value,
        address.value,
        msg.value,
      );
      localStorage.setItem('lastMSG', JSON.stringify(modalSubmit));
    });
  }
};
