<?php

    // Iremos conectar nossa função ao banco de dados
    include('../../conexao/conn.php');

    $nome = $_REQUEST['nome'];
    $professor = $_REQUEST['professor'];
    $nota = $_REQUEST['nota'];

    // Verificando se os campos foram preenchidos
    if(strlen($nome) == 0 || strlen($professor) == 0){
        echo "Existem campos em branco... tente novamente";
    }else{
        // Criaremos uma variável para receber os comandos SQL
        $sql = "INSERT INTO disciplinas (nome, professor, nota) VALUES ('".$nome."', '".$professor."', '".$nota."')";
        // Iremos testar a nossa linha SQL, diretamente no banco de dados
        if(mysqli_query($conecta, $sql)){
            echo "A disciplina ".$nome.", foi salva com sucesso!";
        }else{
            echo "Deu ruim....".mysqli_error($conecta);
        }
    }