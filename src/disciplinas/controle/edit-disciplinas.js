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
    $('.btn-edit').click(function(e) {
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

                $('#form').show(2000)
                $('.row').hide(2000)

                $('#form').load('src/disciplinas/visao/adiciona-disciplinas.html', function() {
                    $('h4').empty()
                    $('h4').append('Edição de registro')
                    $('.btn-save').after('<button class="btn btn-secondary btn-block btn-close"><i class="mdi mdi-close"></i> Fechar</button>')
                    $('.btn-save').addClass('btn-update').removeClass('btn-save')
                    $('#nome').val(dados[0].nome)
                    $('#professor').val(dados[0].professor)
                    switch (dados[0].nota) {
                        case 'MB':
                            var mencao = "Muito Bom"
                            break
                        case 'B':
                            var mencao = "Bom"
                            break
                        case 'R':
                            var mencao = "Regular"
                            break
                        case 'I':
                            var mencao = "Insatisfatório"
                            break
                    }
                    $('#nota').append(`<option value="${dados[0].nota}" selected>${mencao}</option>`)
                    $('#nota').after(`<input type="hidden" name="id" id="id" value="${dados[0].id}">`)

                    btnClose()

                })

                $('body').append('<script src="src/disciplinas/controle/update-disciplinas.js"></script>')

            }
        })



    })
})