<?php

    // Iremos conectar nossa função ao banco de dados
    include('../../conexao/conn.php');

    $nome = $_REQUEST['nome'];
    $curso = $_REQUEST['curso'];
    $senha = $_REQUEST['senha'];
    $senha = md5($senha);
    $tipo = $_REQUEST['tipo'];

    // Verificando se os campos foram preenchidos
    if(strlen($nome) == 0 || strlen($curso) == 0){
        $dados = array(
            'tipo' => 'alert-warning',
            'mensagem' => 'Por favor preencha todo o formulário!'
        );
    }else{
        // Criaremos uma variável para receber os comandos SQL
        $sql = "INSERT INTO alunos (nome, curso, senha, tipo) VALUES ('".$nome."', '".$curso."', '".$senha."', ".$tipo.")";
        // Iremos testar a nossa linha SQL, diretamente no banco de dados
        if(mysqli_query($conecta, $sql)){
            $dados = array(
                'tipo' => 'alert-success',
                'mensagem' => 'O aluno '.$nome.', foi salva com sucesso!'
            );
        }else{
            $dados = array(
                'tipo' => 'alert-danger',
                'mensagem' => 'Deu ruim....'.mysqli_error($conecta)
            );
        }
    }

    echo json_encode($dados);