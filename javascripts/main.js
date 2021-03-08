class FormMsg {
    constructor(fullName, email, telephone, address, servicios, msgInput){
        this.fullName = fullName;
        this.email = email;
        this.telephone = telephone;
        this.address = address;
        this.servicios = servicios
        this.msgInput = msgInput;
    }
    printAllInputs = function(){
        console.log(`El nombre completo es: ${this.fullName} \n Email: ${this.email} \n Teléfono: ${this.telephone} \n Dirección: ${this.address} \n Los Servicios son: ${this.servicios.join()}\n Consulta: ${this.msgInput}`);
    }

}

function inputString(str) {
    return prompt("Ingrese su " + str +": ");
}

//msg = new FormMsg(inputString("Nombre Completo"), inputString("email"), inputString("teléfono"), inputString("Dirección"),["Visita Domicilio", "instalar Gadget"], inputString("mensaje"));

