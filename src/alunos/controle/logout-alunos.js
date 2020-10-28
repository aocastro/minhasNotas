$(document).ready(function() {

    $('#logout').click(function(e) {
        e.preventDefault()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            url: 'src/alunos/modelo/logout-alunos.php',
            success: function(dados) {

                if (dados.return == true) {
                    $(location).attr('href', 'index.html')
                } else {
                    // Demonstrar se deu certo ou errado...
                    alert('Ocorreu algum erro no momento do logout do sistema....')
                }

            }
        })
    })

})