let pantalla = document.getElementById("screen");

document.addEventListener("click", (e)=>{

switch (e.target.id){
    case 'botonIzquierdo':
       pantalla.style.backgroundImage = "url('imagenes/TetrisCabecera.jpg')"; break;
    case 'botonDerecho':
       pantalla.style.backgroundImage = "url('imagenes/tetrisJuego.jfif')"; break;
    case 'botonApagado':
      pantalla.style.backgroundColor = "pantallaCentral"; break;
    default :
       }
    



//
 //  if(e.target.id === 'botonIzquierdo'){
 //       pantalla.style.backgroundImage = "url('imagenes/TetrisCabecera.jpg')";
//   } 
 //  else if (e.target.id === 'botonDerecho'){
 //       pantalla.style.backgroundImage = "url('imagenes/tetrisJuego.jfif')";
 //  }
 //  else if (e.target.id === 'botonApagado'){
 //       pantalla.style.backgroundColor = "black";}

//
});