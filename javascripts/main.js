class FormMsg {
    constructor(fullName, email, telephone, address, msgInput){
        this.fullName = fullName;
        this.email = email;
        this.telephone = telephone;
        this.address = address;
        this.msgInput = msgInput;
    }
    
    printAllInputs = function(){
        console.log(`El nombre completo es: ${this.fullName} \n Email: ${this.email} \n Teléfono: ${this.telephone} \n Dirección: ${this.address} \n Consulta: ${this.msgInput}`);
    }
}

function inputString(str) {
    return prompt("Ingrese su " + str +": ");
}

msg = new FormMsg(inputString("Nombre Completo"), inputString("email"), inputString("teléfono"), inputString("Dirección"), inputString("mensaje"));

msg.printAllInputs();
