function verificarEdad(){

    let edad = document.getElementById('edad').value;
    let resultado = document.getElementById('resultado');

    //Eliminar clases previamente aplicadas definidas en llos archivos css
    resultado.classList.remove('mensaje-error','mensaje-invalido','mensaje-valido')
    //validaciones
    if(edad == ""){
        resultado.textContent = "Por favor, ingresa tu edad";
        resultado.classList.add('mensaje-error');
    } else if(edad <= 0){
        resultado.textContent = "La edad no puede ser negativa o igual a 0";
        resultado.classList.add('mensaje-invalido');
    }else if(edad.length >= 3){
        resultado.textContent = "La longitud de la edad es mayor a la esperada";
        resultado.classList.add('mensaje-invalido');
    }else if(edad >= 18){
        resultado.textContent = "Eres una persona mayor de edad y puedes ingresar al sito";
        resultado.classList.add('mensaje-valido');
    }else{
        resultado.textContent = "Es menor de edad, no puedes ingresar al sitio";
        resultado.classList.add('mensaje-error');
    }

}