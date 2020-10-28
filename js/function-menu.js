$(document).ready(function() {

    $('.btn').click(function(e) {
        e.preventDefault()
        let url = $(this).attr('href')
        $('#conteudo').empty()
        $('#conteudo').load(url)
    })

})