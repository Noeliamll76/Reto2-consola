let pantalla = document.getElementById("screen");

document.addEventListener("click", (e)=>{

switch (e.target.id){
    case 'botonIzquierdo':
       pantalla.style.backgroundImage = "url('imagenes/CabeceraMario.jpg')"; break;
    case 'botonDerecho':
       pantalla.style.backgroundImage = "url('imagenes/MarioJugando.jpg')"; break;
    case 'botonApagado':
      pantalla.style.backgroundImage = "url('imagenes/Nintendo-Switch.jpg"; break;
    
      default:
       }
    
});