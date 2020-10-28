$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/alunos/modelo/tipo-alunos.php',
        success: function(dados) {

            if (dados.tipo == '2') {
                $('.alunos').hide()
            }

        }
    })

})