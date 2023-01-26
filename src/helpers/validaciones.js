//validaciones
  const campoRequerido = (input) => {
  console.log("desde campo requerido");
  console.log(input.value);
  if (input.value.trim().length > 0) {
    console.log("aqui esta todo bien");
    return true;
  } else {
    console.log("aqui muestro un error");
    return false;
  }
};

const validarNumeros = (input) => {
  //vamos a crear una expresión regular
  let patron = /^[0-9]{1,8}$/;
  //el metodo test --> devuelve true o false si matchea o no
  //regex.test(string a validar)
  if (patron.test(input.value)) {
    //cumpla con la expresion regular
    return true;
  } else {
    return false;
  }
};


const validarGeneral = (
  campoNombre,
  campoApellido,
  campoDNI,
  campoEmail,
) => {
  //comprobar que pasen cada una validaciones y si no pasan mostrar el alert
  // console.log('desde validar general');
  //console.log(e);
  if (
    campoRequerido(campoNombre) &&
    campoRequerido(campoApellido) &&
    validarNumeros(campoDNI) &&
    campoRequerido(campoEmail)
  ) {
    console.log("validación correcta los datos están listo para ser enviados");
    return true;
  } else {
    console.log("validación incorrecta");
    return false;
  }
};

//pueden usar un export general como el siguiente o anteponer la palabra export en cada defición de función a exportar
export {validarGeneral};
