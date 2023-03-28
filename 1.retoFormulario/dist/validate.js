//Validar cadena de caracteres
const validateString = (cad) =>{  //Cad es una cadena de caracteres y esta es una funcion tipo flecha
    //Ternario un if abreviado
    let response = (cad.length >=3) ? true : false;
    return response;
};

const validateTelefono = (cad) =>{
    let response = (cad.length >=10) ? true : false;
    return response;
}

class Validate{
    //Metidos de validacion por medio de regex
    validNames (value){
        //Patron regex para que se validen los datos que el usuario escriba
        const nombresRX = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
        //Con el match comparamos lo que escribe el ususario con el regex
        const resp = value.match(nombresRX) ? true : false;
        //Devuelve un true o un false
        return resp;
    }
    validMail(value){
        const mailRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        //Se compara el mail con el patrón creado
        const resp = value.match(mailRX) ?true :false; 
        //De nuevo devuelve un true o false
        return resp;
    }
    validCargo(value){
        const cargoRX = 0;
        //Se compara el mail con el patrón creado
        const resp = value.match(cargoRX) ?false :true; 
        //De nuevo devuelve un true o false
        return resp;
    }
    validTelephone (value){
        //Patron regex para que se validen los datos que el usuario escriba
        /* /^(3)?([0-2])?([0-9])?([0-9]{2})?([0-9]{2})?([0-9]{3})?/ */
        const telephoneRX = /^(\(?(\+57)\)?)?(3)(0|1|2|5)(\d{1})[-]?(\d{3})[-]?(\d{4})$/g ;
        //Con el match comparamos lo que escribe el ususario con el regex
        const resp = value.match(telephoneRX) ? true : false;
        //Devuelve un true o un false
        return resp;
    }
    validTexBox(value){
        const textBoxRX = /^[\W.a-zA-ZÀ-ÖØ-öø-ÿ\s\d]{20,80}$/g;
        //Se compara el mail con el patrón creado
        const resp = value.match(textBoxRX) ?true :false; 
        //De nuevo devuelve un true o false
        return resp;
    }
    validForm = (objeto) =>{
        //Aqui tomamos los valores del objeto y se convierte en un arreglo
        const valores = Object.values(objeto);
        //Si hay match devuelve un true y si no un false
        let resp = valores.findIndex(e => e === false); //Si no ecuentra una similitud devuelve un -1 pero si la encuentra devuelve la posicion
        return resp;
    }
} 

export {validateString, validateTelefono, Validate};