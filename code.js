
var nom=prompt("Quel est votre nom/What's your name")
alert("Bienvenue sur notre site/Welcome to our website"+nom)
console.log(nom)
function username (){
    let user_name =prompt("enter user_name ")
    let password=prompt("enter password")
    if (user_name=="admin"&&password==2352323){
        window.location.href='admin.html'
    }
    
    }

