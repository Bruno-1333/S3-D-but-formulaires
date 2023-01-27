// pegar o formulário pelo id
const form = document.getElementById("contact");

    // adicionar um evento de envio ao formulário
    // evitar que a página seja recarregada ao enviar o formulário
    // aqui você pode adicionar sua lógica de validação de formulário e envio de dados

    // exibir uma mensagem de sucesso

    // Selecione o formulário pelo ID

// Adicione um ouvinte de evento de submit ao formulário
    form.addEventListener("submit", function(event) {
        // Prevenir o comportamento padrão de submit (recarregar a página)
        event.preventDefault();

        // Validação de formulário (verificar se todos os campos obrigatórios estão preenchidos)
        var nome = document.getElementsByName("Nome")[0].value;
        var email = document.getElementsByName("Courriel")[0].value;
        var telefone = document.getElementsByName("Téléphone")[0].value;
        var company = document.getElementsByName("Compagnie")[0].value;
        var province = document.getElementsByName("province")[0].value;
        var Pommes = document.getElementsByName("Pommes")[0].value;
        var Patates = document.getElementsByName("Patates")[0].value;
        var Pseudonyme = document.getElementsByName("Pseudonyme")[0].value;
        var Commentaires = document.getElementsByName("Commentaires")[0].value;
        if (nome == "" || email == "" || telefone == "" || company == "" || province == "" || Pommes == "" || Patates == "" || Pseudonyme == "" || Commentaires == "") {
            alert("Todos os campos obrigatórios devem ser preenchidos");
            return;
        }
        // Envio de dados (pode ser feito com uma chamada AJAX ou um formulário tradicional)
        form.submit();
    });
    alert("Formulário enviado com sucesso!");


// pegar o botão Limpar pelo seu nome
const resetButton = document.querySelector('button[name="Annuler"]');

// adicionar um evento de clique ao botão Limpar
resetButton.addEventListener("click", function(event) {
    // aqui você pode adicionar sua lógica para limpar os campos do formulário
    form.reset(); // limpar os campos do formulário
});


//Primeiro, selecionamos o formulário usando o ID "contact".
// Adicionamos um ouvinte de evento de submit ao formulário. Isso significa que a função dentro do addEventListener será executada quando o formulário for enviado.
// Dentro da função do ouvinte de evento, usamos "event.preventDefault()" para evitar o comportamento padrão de submit (recarregar a página).
// Em seguida, validamos se todos os campos obrigatórios foram preenchidos usando a verificação
// "if (nome == "" || email == "" || telefone == "" || company == "" || province == "" || Pommes == "" || Patates == "" || Pseudonyme == "" || Commentaires == "")" e, se algum campo não estiver preenchido, most
