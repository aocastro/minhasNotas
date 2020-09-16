$(document).ready(function() {

    // Monitorar o clique em cima do botão com a classe btn-save
    $('.btn-save').click(function(e) {
        e.preventDefault()

        // Iremos criar uma variável que receberá todas as informações do formulário e os transformará em array
        let dados = $('#adiciona-alunos').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/alunos/modelo/adiciona-alunos.php',
            success: function(dados) {
                // Demonstrar se deu certo ou errado...
                $('#adiciona-alunos').after(`
                <div class="alert ${dados.tipo} alert-dismissible fade show" role="alert">
                    <strong>${dados.mensagem}</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                </div>
                `)
                    // Limpando os campos do nosso formulário
                $('#nome').val('')
                $('#curso').val('')
            }
        })
    })
})