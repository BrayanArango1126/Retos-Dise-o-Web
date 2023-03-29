//Importamos nuestras funciones
import { validateString, validateTelefono, Validate } from "./validate.js";
import { addStudent, modalAlert, addMaster } from "./paint.js";
const btnEnviar = document.getElementById("btnEnviar");
const form = document.getElementById("fmContact");
//Instanciar el objecto validate de la clase que está en validate

let validator = new Validate();
//Objeto de validacion 
const objectValid ={
    nameObject: true,
    lastNameObject: true,
    mailObject: true,
    cargoObjetc: true,
    teleObject: true,
    msnObject: true
}

//Evento para que cada vez que se genere un cambio en los hijos se genere la validacion
form.addEventListener("change", function(event){
    
    const inputId = event.target.id;
    //console.log(inputId);
    //capturar el valor (no es llo mismo que el content)
    const inputValue = event.target.value;
    //console.log(inputValue);
    //capturar clase 
    const inputClass = event.target.classList;
    //console.log(inputClass);

    //Darle una pista al ususario de si es valido o invalido
    const validClass = () =>{
        inputClass.add("is-valid");
        inputClass.remove("is-invalid");
    }
    const invalidClass = () =>{
        inputClass.add("is-invalid");
        inputClass.remove("is-valid");
    }

    //Segun el input hacer la validacion con el patron regex
    switch(inputId){
        case "name":
            //Aqui usamos nuestro objeto instanciado
            //devuelve un true or false y lo asigna al objeto
            objectValid.nameObject = validator.validNames(inputValue);
            
            //Si es true validClass y si es false InvalidClass
            objectValid.nameObject ? validClass() : invalidClass(); //ternario 
            //console.log(Object.values(objectValid));
            break;
        
        case "lastName":
            objectValid.lastNameObject = validator.validNames(inputValue);
            objectValid.lastNameObject ? validClass() : invalidClass();
            //console.log(Object.values(objectValid));
            break;

        case "mail":
            objectValid.mailObject = validator.validMail(inputValue);
            objectValid.mailObject ? validClass() : invalidClass();
            //console.log(Object.values(objectValid));
            break;  
        
        case "cargo":
            objectValid.cargoObjetc = validator.validCargo(inputValue);
            objectValid.cargoObjetc ? validClass() : invalidClass();
            //console.log(Object.values(objectValid));
            break;
        
        case "telephone":
            objectValid.teleObject = validator.validTelephone(inputValue);
            objectValid.teleObject ? validClass() : invalidClass();
            //console.log(Object.values(objectValid));
            break;  
        
        case "fm_contact":
            objectValid.msnObject = validator.validTexBox(inputValue);
            objectValid.msnObject ? validClass() : invalidClass();
            //console.log(Object.values(objectValid));
            break;  

        }
});

btnEnviar.addEventListener("click", (e) =>{
    //Evitar que la pagina se recarge con e.preventDefault
    e.preventDefault();
    
    //Seleccionar los datos del formulario
    const nombre = document.getElementById("name").value;
    const apellido = document.getElementById("lastName").value;
    const correo = document.getElementById("mail").value;
    const cargo = document.getElementById("cargo").value;
    const telefono = document.getElementById("telephone").value;
    const mensaje = document.getElementById("fm_contact").value;
    
    /*Forma antigua de validar cadena
    if( validateString(nombre) && validateString(apellido) && validateString(correo)
    && validateTelefono(telefono)&&validateString(mensaje) */
    
    if(validator.validForm(objectValid) ===-1){
        if(cargo === "Estudiante"){
        addStudent(nombre, apellido, correo, cargo, telefono, mensaje);
        }else if(cargo === "Profesor"){
            addMaster(nombre, apellido, correo, cargo, telefono, mensaje);
        }
    }else{
        modalAlert("Error en los datos, por favor revise y vuelvalo a intentar.");     
    }    
    /* if(validator.validForm(objectValid) ===-1){
        console.log("Enviando Formulario");
    }else{
        modalAlert("Error en los datos, por favor revise y vuelvalo a intentar.");     
    } */
});

