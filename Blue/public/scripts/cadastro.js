// Função do button de "Registrar", na tela de cadastro
function Registrar() {
    var dadosUsuariosStorage;
    // Inputs da tela de cadastro
    let emailCadastro = document.getElementById("email")
    let userCadastro = document.getElementById("user")
    let passwordCadastro = document.getElementById("confirmarSenha")
    let passwordConfirm = document.getElementById("senhaCadastro")
    let nomeCadastro = document.getElementById("nomeCompleto")

    dadosUsuariosStorage = localStorage.getItem("Dados")

    let array = []
    array = JSON.parse(dadosUsuariosStorage)

    if (emailCadastro.value == "" 
        || passwordCadastro.value == "" 
            || passwordConfirm.value == "") {
        swal("ERRO", "Preencha os campos corretamente", 'error')

    } else if(validarEmail(emailCadastro.value) == false) {
        swal("ERRO", "Email invalido!", 'error')
        
    } else if (passwordCadastro.value != passwordConfirm.value) {
        swal("ERRO", "As senhas não coincidem", 'error')

    } else {
        if (dadosUsuariosStorage == null || dadosUsuariosStorage == undefined) {

            array = []

            var dadosUsuario = {
                nome: nomeCadastro.value,
                email: emailCadastro.value,
                usuario: userCadastro.value,
                senha: passwordCadastro.value
            }

            array.push(dadosUsuario)

            localStorage.setItem("Dados", JSON.stringify(array))

            // Aqui tem um sweet alert que é um alert estilizado (swal = sweet alert)
            swal("Cadastrado com sucesso!", `Seja bem vindo ${nomeCadastro.value}`, "success")

            // Coloca um tempo de espera de uma página para outra
            setTimeout(function() {
                window.location.href = "login.html"
            }, 2000);

        } else {
            
            array = JSON.parse(dadosUsuariosStorage)
            
            dadosUsuario = {
                nome: nomeCadastro.value,
                email: emailCadastro.value,
                usuario: userCadastro.value,
                senha: passwordCadastro.value
            }    
            
        array.push(dadosUsuario)

        localStorage.setItem("Dados", JSON.stringify(array))
        
            swal("Cadastrado com sucesso!", `Seja bem vindo ${nomeCadastro.value}`, "success")
            
            setTimeout(function() {
                window.location.href = "/html/login.html"
            }, 2000);
        }
    }
}

//Função para validação do email
function validarEmail (email) {
    let emailTestando =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*.[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
     return emailTestando.test(email);
  }