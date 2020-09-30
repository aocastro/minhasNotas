function btnClose() {

    // Monitorar o clique em cima da classe btn-close
    $('.btn-close').click(function(e) {
        e.preventDefault()

        $('#form').empty()
        $('#form').hide(2000)
        $('.row').show(2000)

    })

}

$(document).ready(function() {

    // Monitorar os cliques no botões com as classes btn-view
    $('.btn-view').click(function(e) {
        e.preventDefault()

        // Iremos capturar o id do botão clicado, para enviar ao nosso serviço em PHP
        var dados = `id=${$(this).attr('id')}`

        // Requisição assincrôna para realização da consulta em banco de dados
        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/view-alunos.php',
            success: function(dados) {

                $('#form').show(2000)
                $('.row').hide(2000)

                $('#form').load('src/alunos/visao/adiciona-alunos.html', function() {
                    $('h4').empty()
                    $('h4').append('Visualização de registro')
                    $('.btn-save').after('<button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i> Fechar</button>')
                    $('.btn-save').hide()
                    $('#nome').attr('disabled', true)
                    $('#nome').val(dados[0].nome)
                    $('#curso').attr('disabled', true)
                    $('#curso').val(dados[0].curso)
                    $('#tipo').attr('disabled', true)
                    $('#tipo').empty()
                    $('#tipo').append(`<option>${dados[0].tipo == 1 ? 'Administrador' : 'Aluno'}</option>`)

                    btnClose()

                })


            }
        })



    })
})