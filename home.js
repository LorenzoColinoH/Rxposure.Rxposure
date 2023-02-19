$(document).ready(function(){
    // Cuando se cargue la web se ejecutará todo lo que haya en el ready
    //Todas las declaraciones de funciones se harán abajo
    getAllArtists()
    colocarElementos();
    $(".boton").click(()=>{redireccion(), console.log("Estoy pulsando el boton")})
});

const redireccion = () =>{
    window.location.href = 'creaUsuario.html';
}

const getAllArtists = async() => {
   let data;
    let request = await fetch("https://todos2-fe472-default-rtdb.europe-west1.firebasedatabase.app/.json", {
    method:"GET"
   })
   // El request es una promesa, asi que hay que hacerla con await, esperará en la función hasta que responda, por eso la función es asíncrona
   if (request.status === 200){
        data = await request.json()
        data = Object.values(data);
        return data
   }
}

const colocarElementos = async () => {
    let usuarios = await getAllArtists();
    console.log("Hola")
    let iteracion = 0;
    console.log("artistas2" + iteracion)
    for (let i = 0;i<usuarios.length;i++){
        if (i % 4 == 0){
            iteracion = i;
            $("#artistas").append("<div class = 'artistas2' id = 'artistas"+iteracion+"'></div>")
            
        }
        $("#artistas"+iteracion).append("<div class = 'div-artista'><img class = 'foto-perfil' src='"+usuarios[i].foto+"' alt=''><h1 class = 'nombre-usuario'>"+usuarios[i].nombre+"</h1><h2 class = 'descripicion-usuario'>"+usuarios[i].descripcion+"</h2></div>")
    } 
}
