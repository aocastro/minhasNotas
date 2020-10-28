$(document).ready(function() {

    $('.btn-login').click(function(e) {
        e.preventDefault()

        var dados = $('#form-login').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/login-alunos.php',
            success: function(dados) {

                if (dados.result == true) {
                    $(location).attr('href', 'painel.html')
                } else {
                    // Demonstrar se deu certo ou errado...
                    $('#form-login').after(`
                    <div class="alert alert-danger alert-dismissible fade show mt-5" role="alert">
                        <strong>Id ou senha informado errado...tente novamente!</strong>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    `)
                }

                // Limpando os campos do nosso formulário
                $('#id').val('')
                $('#senha').val('')
            }
        })
    })

})