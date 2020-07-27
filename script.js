var dados= [];
function carregou(){
var pree = window.document.getElementById("pre")
pree.style.transition="ease-in 3s"
pree.style.transform="none"
}

window.document.getElementById("btn").addEventListener("click",() =>{
   
    var nome = window.document.getElementById("txtname")
    var sobrenome = window.document.getElementById("txtsobre")
    var senha = window.document.getElementById("txtsenha")
    var email = window.document.getElementById("txtemail")
    var confirmS = window.document.getElementById("confirmS")
    var confirmE = window.document.getElementById("confirmE")
    var msg = window.document.getElementById("msg")
    var res = window.document.getElementById("res")
    var sexo = window.document.getElementsByName("radsex")

 if(nome.value.length==0 || sobrenome.value.length==0 || senha.value.length==0 || email.value.length==0 || confirmS.value.length==0 || confirmE.value.length==0){
    window.alert("Ainda há caixas vazias a serem preenchidas!") 
     
    if(nome.value.length==0){
        nome.style.border="2px solid red"
        if(sobrenome.value.length==0){
            sobrenome.style.border="2px solid red"
            if(senha.value.length==0){
                senha.style.border="2px solid red"
                if(email.value.length==0){
                    email.style.border="2px solid red"
                    if(confirmS.value.length==0){
                        confirmS.style.border="2px solid red"
                        if(confirmE.value.length==0){
                            confirmE.style.border="2px solid red"
                            if(msg.value.length==0){
                                msg.style.border="2px solid red"
                            }
                        }
                    }
                }
            }
        }
    } //parei aqui branch v2
}else{
    if(senha.value != confirmS.value  ){
        window.alert("[ERRO] verifique a confirmação de sua senha!")
        senha.style.border="2px solid red"
        confirmS.style.border="2px solid red" 
       
       
    }else if(email.value != confirmE.value){
        window.alert("[ERRO] verifique a confirmação de seu email")
        email.style.border="2px solid red"
        confirmE.style.border="2px solid red"
    }else{
       window.alert("Dados enviados")
    var genero=""
    if(sexo[0].checked){
         genero = "Masculino"
    }else if(sexo[1].checked){
        genero = "Feminino"
    }

    dados.push(nome.value,sobrenome.value,senha.value,email.value,msg.value,genero)

    nome.value=""
    sobrenome.value=""
    senha.value=""
    email.value=""
    msg.value=""
    confirmE.value=""
    confirmS.value=""



    res.style.transition="ease-in 2s"
    res.style.opacity="1"    

}
}


})



window.document.getElementById("btn2").addEventListener("click",()=>{
    var name = dados[0]
    var sobre = dados[1]
    var senh = dados[2]
    var em = dados[3]
  
    var gen = dados[5]




    res.innerHTML += "<br><br>"
    res.innerHTML +=`<p>Nome: ${name}</p>`
 
    res.innerHTML +=`<p>Sobrenome: ${sobre}</p>`
    res.innerHTML +=`<p>Senha: ${senh}</p>`
    res.innerHTML +=`<p>Email: ${em}</p>`
    res.innerHTML +=`<p>Genero: ${gen}</p>`



})


function typeWrite(elemento){                   //o splite divide o texto em diferentes
    //partes dentro de um array
const textoArray = elemento.innerHTML.split("")/*e ai ta pegando dentro do elemento, o titulo do h1*/
elemento.innerHTML = ""
textoArray.forEach((letra,i) =>{
setTimeout(()=>
elemento.innerHTML += letra,75 *i)
}) //significa para cada
}
const titulo = document.querySelector("h1"); /*o h1 se transforma no parametro elemento*/
typeWrite(titulo)
typeWrite(document.querySelector("p#1"))

