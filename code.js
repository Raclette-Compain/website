
var nom=prompt("Quel est votre nom")
alert("Bienvenue sur notre site"+' '+nom)
console.log(nom)
function username (){
    let user_name =prompt("enter user_name ")
    let password=prompt("enter password")
    if (user_name=="admin"&&password==2352323){
        window.location.href='admin.html'
    }
    
    }
function redirect(){
    window.location.href='admin.html'
}    