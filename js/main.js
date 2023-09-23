let pantalla = document.getElementById("screen");

document.addEventListener("click", (e)=>{

switch (e.target.id){
    case 'botonIzquierdo':
       pantalla.style.backgroundImage = "url('imagenes/TetrisCabecera.jpg')"; break;
    case 'botonDerecho':
       pantalla.style.backgroundImage = "url('imagenes/tetrisJuego.jfif')"; break;
    case 'botonApagado':
      pantalla.style.backgroundImage = "url('imagenes/Nintendo-Switch.jpg"; break;
    
      default:
       }
    



});