<?php

    // Iremos conectar nossa função ao banco de dados
    include('../../conexao/conn.php');

    $id = $_REQUEST['id'];

    // Verificando se os campos foram preenchidos
    if(strlen($id) == 0){
        $dados = array(
            'tipo' => 'alert-warning',
            'mensagem' => 'Id informado inválido!'
        );
    }else{
        // Criaremos uma variável para receber os comandos SQL
        $sql = "DELETE FROM disciplinas WHERE id = ".$id."";
        // Iremos testar a nossa linha SQL, diretamente no banco de dados
        if(mysqli_query($conecta, $sql)){
            $dados = array(
                'tipo' => 'alert-success',
                'mensagem' => 'Registro excluído com sucesso!'
            );
        }else{
            $dados = array(
                'tipo' => 'alert-danger',
                'mensagem' => 'Erro ao efetuar exclusão do registro.'
            );
        }
    }

    echo json_encode($dados);