<?php

    // Iremos conectar nossa função ao banco de dados
    include('../../conexao/conn.php');

    $nome = $_REQUEST['nome'];
    $professor = $_REQUEST['professor'];
    $nota = $_REQUEST['nota'];

    // Verificando se os campos foram preenchidos
    if(strlen($nome) == 0 || strlen($professor) == 0){
        $dados = array(
            'tipo' => 'alert-warning',
            'mensagem' => 'Por favor preencha todo o formulário!'
        );
    }else{
        // Criaremos uma variável para receber os comandos SQL
        $sql = "INSERT INTO disciplinas (nome, professor, nota) VALUES ('".$nome."', '".$professor."', '".$nota."')";
        // Iremos testar a nossa linha SQL, diretamente no banco de dados
        if(mysqli_query($conecta, $sql)){
            $dados = array(
                'tipo' => 'alert-success',
                'mensagem' => 'A disciplina '.$nome.', foi salva com sucesso!'
            );
        }else{
            $dados = array(
                'tipo' => 'alert-danger',
                'mensagem' => 'Deu ruim....'.mysqli_error($conecta)
            );
        }
    }

    echo json_encode($dados);