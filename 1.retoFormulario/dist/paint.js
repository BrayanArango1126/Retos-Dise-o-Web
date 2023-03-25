//Aquí pintamos el template en el html

//seleccionamos en card del estudiante por medio del Id
const cardsEstudiantes = document.querySelector("#cardsEstudiantes"); //Creamos una variable y luego con queryselector llamamos por id el documento de donde queremos vincular valores
const cardsProfesores = document.querySelector("#cardseProfesores")
//seleccionamos el formulario por Id para poder borrarlo
const clean = document.querySelector("#fmContact");

//Variable de envío
let flagSend =0;               

//Creamos la funcion de estudiante
const addStudent = (name, lastName, mail, rol, tele, msn) =>{    //creamos una funcion y dentro de ella creamos un objeto, en este caso persona, en la funcion ponemos los valores que pedimos
    let person = {         //de esta maner creamos un objeto para poderlo vincular a un mensaje y que muestre todos sus atributos
        pname: name,         //le damos un nombre a cada atributo y luego seleccionamos los valores puestos en los parametros de la funcion
        plastName: lastName,
        pmail: mail,
        prol: rol,
        ptele: tele,
        pmsn: msn
    };
    //Creacion del modal
    let text = `${person.pname} ${person.plastName} ¿Esta segur@  de
    enviar la petición como estudiante?`;   //En este momento lo que hacemos es crear una variable con el mensaje de advertencia que queremos que muestre al darle enviar
    modalAlert(text, "aceptar", person);    //y con el modalAlert y los parametros vamos a hacer que lo muestre en la web
}
//creamos la funcion del profesor
const addMaster = (name, lastName, mail, rol, tele, msn) =>{
    let person = {
        pname: name,
        plastName: lastName,
        pmail: mail,
        prol: rol,
        ptele: tele,
        pmsn: msn
    };
    let text = `${person.pname} ${person.plastName} ¿Esta segur@ de
    enviar la petición como profesor?`;
    modalAlert(text, "aceptar", person);
}

function modalAlert(cad, tipo, persona){    //Creamos una funcion anonima para poder darle los parametros al modalAlert y asi poder mostrar el mensaje
    //Creacion de elementos que apareceran en el html
    const alerta = document.createElement('div');   //con createElement podemos crear etiquetas para usarlas en nuestro HTML
    const texto = document.createElement('p');
    const btnCerrar = document.createElement('input');
    
    //Dar atributos a las etiquetas creadas anteriormente
    alerta.setAttribute("id", "alerta");  //con setAttribute podemos agregarle id class y value a las etiqeutas creadas
    alerta.setAttribute("class", "alerta");
    texto.setAttribute("class", "textAlerta");
    texto.innerHTML = `<strong>${cad}</strong>`; //con el inner HTML podemos instanciar las etiquetas en el codigo
    
    //Dar atributos al Boton
    btnCerrar.setAttribute("type", "button");
    btnCerrar.setAttribute("class", "btnAlerta");
    btnCerrar.setAttribute("value", "Cerrar");
    
    //Agregamos el texto y el boton como hijos a la etiqueta padre "Alerta"
    alerta.appendChild(texto);
    alerta.appendChild(btnCerrar);
    

    if(tipo === "aceptar"){
        const btnEnviar = document.createElement("input");
        
        //Atributos de boton
        btnEnviar.setAttribute("type", "button");
        btnEnviar.setAttribute("class", "btnAlerta");
        btnEnviar.setAttribute("value", "Enviar");
        
        //Agregamos el btn Enviar al Alerta
        alerta.appendChild(btnEnviar);   //Con el appendChild se agregan las etiquetas hijas a un contenedor padre
        
        //Agregamos alerta al Body
        document.body.appendChild(alerta);
        
        btnEnviar.onclick = function(){          //Con esta funcion le damos un evento al boton
            //!Importante
            paintCard(persona, "estudiante");
            
            /* paintCard(persona, "profesor"); */
            
            flagSend = 1;
                
            //Así removemos una vez demos en aceptar
            document.getElementById("alerta").remove();   //con esta funcion eliminamos el mensaje una vez se de click
            clean.reset();
        }

    }else{
        //Agregar el alerta dentro del body
        document.body.appendChild(alerta);
    }
    //Remover el alerta
    btnCerrar.onclick = function(){
        document.getElementById("alerta").remove();
    }

}

//Pintar el card
//Los datos de la persona, tipo = Estudiante/profesor/Administrador
const paintCard = (datos, tipo) =>{
    //Convertir a Mayusculas
    tipo = tipo.toUpperCase();    //Esto es para convertir en mayuscula sostenida todo lo que recoge //!Importante
    //Mini (Dom)
    const fragmento = document.createDocumentFragment();   //Con el fragment nos evitamos el tener que crear uno a un o los elementos que agregamos via codigo, y lo comprimimos en uno solo
    //El fragment es un miniDom
    const temEstudiante = document.getElementById("templateEstudiante").content;
    if(tipo ===  "ESTUDIANTE" ){                 //!Importante
        //Se clonará TemEstudiante
        let temTemplate = temEstudiante.cloneNode(true);
        temTemplate.querySelector('.title-card').innerHTML = `DATOS DEL PQR <hr>`;
        temTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        temTemplate.querySelector('.text-mail').innerHTML = `CORREO ELECTRÓNICO: ${datos.pmail}`;
        temTemplate.querySelector('.text-rol').innerHTML = `ROL: ${datos.prol}`;  
        temTemplate.querySelector('.text-telefono').innerHTML = `TELÉFONO: ${datos.ptele}`;
        temTemplate.querySelector('.text-msn').innerHTML = `MENSAJE: ${datos.pmsn}`;
        
        //Agregar el temTemplate al fragmento
        fragmento.appendChild(temTemplate);
        cardsEstudiantes.appendChild(fragmento);
    }
    const temMaster = document.getElementById("templateProfesor").content;
    if(tipo === "PROFESOR" ){           //!Importante
        //Se clonará TemEstudiante
        let temTemplate = temMaster.cloneNode(true);
        temTemplate.querySelector('.title-card').innerHTML = `DATOS DEL PQR <hr>`;
        temTemplate.querySelector('.data-card').innerHTML = `NOMBRES Y APELLIDOS: ${datos.pname} ${datos.plastName}`;
        temTemplate.querySelector('.text-mail').innerHTML = `CORREO ELECTRÓNICO: ${datos.pmail}`;
        temTemplate.querySelector('.text-rol').innerHTML = `ROL: Profesor`;
        temTemplate.querySelector('.text-telefono').innerHTML = `TELÉFONO: ${datos.ptele}`;
        temTemplate.querySelector('.text-msn').innerHTML = `MENSAJE: ${datos.pmsn}`;
        
        //Agregar el temTemplate al fragmento
        fragmento.appendChild(temTemplate);
        cardsProfesores.appendChild(fragmento);
    }
      
}


export {addStudent, modalAlert, addMaster};