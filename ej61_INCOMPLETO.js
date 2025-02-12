const nombre = "Felipa";
let mensaje = null;

switch (nombre) {
  case "Marta":
    mensaje = "El nombre de la usuaria es Marta";
    break;
  case "Felipa":
    mensaje = "El nombre de la usuaria es Felipa";
    break;
  case "Xime":
    mensaje = "El nombre de la usuaria es Xime";
    break;
  case "Belu":
    mensaje = "El nombre de la usuaria es Belu";
    break;
  default:
    mensaje = "El nombre de la usuaria no es Marta, Felipa, Xime o Belu";
}

console.log(mensaje);

