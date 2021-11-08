var pacientes = document.querySelectorAll(".paciente") // variavel recebe pacientes

var tabela = document.querySelector("#tabela-pacientes") // variavel recebe tabela de pacientes 

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut") //fadeOut é a transição da remoção

    setTimeout(function(){ //Pede para esperar x tempo até executar o comando seguinte.
        event.target.parentNode.remove() //remove exatamente o local clicado
    }, 500)
})
