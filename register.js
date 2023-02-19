$(document).ready(function(){
    $("#crear-usuario").click(()=>{
        crearUsuario()
        borrarInputs()
    })
});
const crearUsuario = async () => {
    descripcion = $("#input-descripcion").val();
    nombre = $("#input-nombre").val();
    const requets = await fetch("https://todos2-fe472-default-rtdb.europe-west1.firebasedatabase.app/.json",{
        method:"POST",
        body :JSON.stringify({  
            nombre: nombre,
            descripcion: descripcion
        }),
        dataType : "json",
    })
    if (request.status == 200){
        console.log("Todo correcto");
    } 
}
const borrarInputs = () =>{
    $("#input-nombre").val("")
    $("#input-descripcion").val("");
}