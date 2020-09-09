$(document).ready(function() {

    // Monitorar o clique em cima do botão com a classe btn-save
    $('.btn-update').click(function(e) {
        e.preventDefault()

        // Iremos criar uma variável que receberá todas as informações do formulário e os transformará em array
        let dados = $('#adiciona-disciplinas').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/disciplinas/modelo/update-disciplinas.php',
            success: function(dados) {
                if (dados.return == true) {
                    $('#form').empty()
                    $('#form').hide(2000)
                    $('tbody').empty()
                    $('body').append('<script src="src/disciplinas/controle/list-disciplinas.js"></script>')
                    $('.row').show(2000)
                } else {
                    alert('Deu ruim... tem algo errado!')
                }
            }
        })
    })
})