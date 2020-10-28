<?php

    // Iremos conectar nossa função ao banco de dados
    include('../../conexao/conn.php');

    session_start();

    $nome = $_REQUEST['nome'];
    $professor = $_REQUEST['professor'];
    $nota = $_REQUEST['nota'];
    $id = $_REQUEST['id'];

    // Verificando se os campos foram preenchidos
    if(strlen($id) == 0 || strlen($nome) == 0 || strlen($professor) == 0){
        $dados = array(
            'tipo' => 'alert-warning',
            'mensagem' => 'Por favor preencha todo o formulário!'
        );
    }else{
        // Criaremos uma variável para receber os comandos SQL
        $sql = "UPDATE disciplinas SET nome = '".$nome."', professor = '".$professor."', nota = '".$nota."', id_alunos = ".$_SESSION['id']." WHERE id = ".$id."";
        // Iremos testar a nossa linha SQL, diretamente no banco de dados
        if(mysqli_query($conecta, $sql)){
            $dados = array('return' => true);
        }else{
            $dados = array('return' => false);
        }
    }

    echo json_encode($dados);