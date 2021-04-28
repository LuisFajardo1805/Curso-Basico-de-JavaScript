var estudiantes = ["Maria" , "Luis" , "Hernan" , "Marcos"];

function saludarEstudiantes(estudiantes){
       console.log('Hola, ${estudiantes}');
}

while(estudiantes.length > 0) {
    var estudiantes = estudiantes.shift();
    saludarEstudiantes(estudiantes);
}



var estudiantes = ["Maria" , "Luis" , "Hernan" , "Marcos"];

function saludarEstudiantes(estudiantes){
       console.log('Hola, ${estudiantes}');
}

while(estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiantes = estudiantes.shift();
    saludarEstudiantes(estudiantes);
}
