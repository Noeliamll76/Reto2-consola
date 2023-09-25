let pantalla = document.getElementById("screen");
let encendido = 0;

document.addEventListener("click", (e) => {

  if (encendido == 0 && e.target.id == 'botonApagado') {
    pantalla.style.backgroundImage = "url('./imagenes/Nintendo-Switch.jpg";
    encendido = 1;
  }
  else if (encendido == 1) {
    switch (e.target.id) {

      case 'botonIzquierdo':
        pantalla.style.backgroundImage = "url('./imagenes/CabeceraMario.jpg')"; break;

      case 'botonDerecho':
        pantalla.style.backgroundImage = "url('./imagenes/MarioJugando.jpg')";
        break;

      case 'botonApagado':
        pantalla.style.backgroundImage = "";
        pantalla.style.backgroundColor = "rgb(48, 46, 46)";
        encendido = 0;
        break;

      default:
    }
  }
});
