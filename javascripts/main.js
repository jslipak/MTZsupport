//Clases 
class FormMsg {
    constructor(fullName, email, telephone, address, servicios, msgInput){
        this.fullName = fullName;
        this.email = email;
        this.telephone = telephone;
        this.address = address;
        this.servicios = servicios;
        this.msgInput = msgInput;
    }
    printAllInputs = function(){
        console.log(`El nombre completo es: ${this.fullName} \n Email: ${this.email} \n Teléfono: ${this.telephone} \n Dirección: ${this.address} \n Los Servicios son: ${this.servicios.join()}\n Consulta: ${this.msgInput}`);
    }

}

//Funciones

function inputString(str) {
    return prompt("Ingrese su " + str +": ");
}

//Selectores 

let email = document.querySelector(".form-group input[name='email']");
let msg = document.getElementById("msgID");
let input = document.getElementsByTagName("input");
let checkbox = document.getElementsByClassName("form-check-input")
