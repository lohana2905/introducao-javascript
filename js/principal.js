//Lohana de Aguiar Bristoti 
/*IFPR Campus Cascavel 
Programação para Internet 
Professor Fernando 
03-11-2021*/    
var botaoAdicionar = document.querySelector("#adicionar-paciente") // cria o botão 'Adicionar' atravéz do método
        botaoAdicionar.addEventListener("click", function()
        {
            event.preventDefault()    
            var form = document.querySelector("#form-adiciona")      

            var paciente = obtemPacienteDoFormulario(form)
            var pacienteTr = montaTr(paciente)
            
            var tabela = document.querySelector("#tabela-pacientes");

            tabela.appendChild(pacienteTr);
            //botão adicionar reune os dados do paciente e coloca mais uma linha na tabela
        })
        
    function obtemPacienteDoFormulario(form) //Cria uma função que recebe as informações do paciente por meio de um formulário
    {
        var paciente = //cria o método paciente
        {
             nome : form.nome.value, //adiciona o nome do paciente no formulário
             peso : form.peso.value, //adiciona o peso do paciente no formulário
             altura : form.altura.value, //adiciona a altura do paciente no formulário
             gordura : form.gordura.value, //adiciona a gordura do paciente no formulário
             imc: calculaImc(form.peso.value, form.altura.value) //adiciona o IMC do paciente no formulário por meio da função 'calculaImc'
        }
        return paciente //retorna os valores que foram determinados nas variáveis da função 'obtemPacienteDoFormulário'
    }

    function montaTr(paciente) //função para montar uma linha na tabela com as informações do paciente
    {
        var pacienteTr = document.createElement("tr"); //cria o método

        pacienteTr.classList.add("paciente") //chama as informações que estão guardadas no método 'paciente'

        pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")) //recebe na tabela o dado do método 'paciente' que contém o nome do paciente
        pacienteTr.appendChild(montaTd(paciente.peso, "info-peso")) //recebe na tabela o dado do método 'paciente' que contém o peso do paciente
        pacienteTr.appendChild(montaTd(paciente.altura, "info-altura")) //recebe na tabela o dado do método 'paciente' que contém a altura do paciente
        pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura")) //recebe na tabela o dado do método 'paciente' que contém índice de gordura do paciente
        pacienteTr.appendChild(montaTd(paciente.imc, "info-imc")) //recebe na tabela o dado do método 'paciente' que contém o IMC do paciente

        return pacienteTr //retorna uma linha da tabela 
    }

    function montaTd(dado, classe) //cria a tabela com o nº de linhas igual a quantidade de pacienteTr que têm
    {
        var td = document.createElement("td")
        td.classList.add(classe)
        td.textContent = dado

        return td //retorna a tabela 
    }
    function validaPaciente(paciente){ //função para verificar a validação do paciente

        var erros = []

        if (paciente.nome.length == 0){
            erros.push("O campo nome não pode estar em branco")
        }

        if (paciente.gordura.length == 0){
            erros.push("O campo gordura não pode estar em branco")
        }

        if (paciente.peso.length == 0) {
            erros.push("O campo peso não pode estar em branco")
        }

        if (paciente.altura.length == 0) {
            erros.push("O campo altura não pode estar em branco")
        }

        if (!validaPeso(paciente.peso)){
            erros.push("Peso é inválido")
        }

        if (!validaAltura(paciente.altura)){
            erros.push("Altura é inválida")
        }

        return erros
    }

    function exibeMensagensDeErro(erros){ // chama a mensagem de erro de acordo com tipo de erro que ocorrer
        var ul = document.querySelector("#mensagens-erro")
        ul.innerHTML = ""

        erros.forEach(function(erro){
            var li = document.createElement("li")
            li.textContent = erro
            ul.appendChild(li)
        })
    }
