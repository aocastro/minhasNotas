$(document).ready(function() {


    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/alunos/modelo/valida-alunos.php',
        success: function(dados) {

            if (dados.return == false) {
                $(location).attr('href', 'index.html')
            } else {
                // Demonstrar se deu certo ou errado...
                $('#boasvindas').append(dados.nome)
            }

        }
    })

})