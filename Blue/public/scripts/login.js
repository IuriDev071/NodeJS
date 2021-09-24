// Função do button de "Login", na tela de login
function Login() {
    // Inputs da tela de login
    var userLogin = document.getElementById("usuarioLogin").value
    var passwordLogin = document.getElementById("senhaLogin").value

    dadosUsuariosStorage = localStorage.getItem("Dados")
    let arrayLogin = []

    arrayLogin = JSON.parse(dadosUsuariosStorage)
    
    if (userLogin == "" || passwordLogin == "") {
        swal("ERRO", "Digite corretamente os dados", "error")
    } else {
        
        for (i = 0; i < arrayLogin.length; i++) {
            // Validação do usuário e senha na tela de login
            if (userLogin == arrayLogin[i]['usuario']) {
                
                if (passwordLogin == arrayLogin[i]['senha']) {
                    
                    //Armazenando os dados do usuario que efetuou login
                    let flag = i
                    localStorage.setItem("usuarioLogado", JSON.stringify(arrayLogin[i]['usuario']))
                    localStorage.setItem("nomeLogado", JSON.stringify(arrayLogin[i]['nome']))
                    localStorage.setItem("emailLogado", JSON.stringify(arrayLogin[i]['email']))
                    localStorage.setItem("flag", flag)
                    
                    swal("Login efetuado com sucesso!", `Você efetou login como ${userLogin}`, "success")
                    setTimeout(function() {
                        window.location.href = "../html/feed.html"
                    }, 2000);
                } else {
                      swal("ERRO", "Dados incorretos", "error")
                    return
                }
            return
            }
        }
    }    
}