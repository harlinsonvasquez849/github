function autenticar(){
    //capturamos los id del html
    let email=document.querySelector("#email");
    let password=document.querySelector("#password");
    let verification=document.querySelector("#verification");

    fetch('http://localhost:3000/admins')
    .then(response=>{return response.json()})
    .then(data=>{
        data.forEach(function(user){//recorremos el array
            if(email.value==user.email & password.value==user.password){
                localStorage.setItem("user",JSON.stringify(user));//guardamos el usuario en localstore
                window.location.href="./admin/admins/index.html"//redirigimos al administrador
            }
            else{
                verification.innerHTML="correo o contraseña invalido"
                verification.style.color="red"
            }
            
        });
    })
}