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
            url: 'src/disciplinas/modelo/view-disciplinas.php',
            success: function(dados) {

                $('#form').load('src/disciplinas/visao/adiciona-disciplinas.html', function() {
                    $('h4').empty()
                    $('h4').append('Visualização de registro')
                    $('.btn-save').after('<button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i> Fechar</button>')
                    $('.btn-save').hide()
                    $('#nome').attr('disabled', true)
                    $('#nome').val(dados[0].nome)
                    $('#professor').attr('disabled', true)
                    $('#professor').val(dados[0].professor)
                    $('#nota').attr('disabled', true)
                    $('#nota').empty()
                    $('#nota').append(`<option>${dados[0].nota}</option>`)
                })

            }
        })



    })
})