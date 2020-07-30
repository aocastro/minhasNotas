<?php

    // Demostre todos os erros e alertas existentes quanto ao meu código e interação com o B.D.
    // Os dois comandos a seguir tem por finalidade a forçar uma configuração no servidor APACHE
    ini_set('display_erros', true);
    error_reporting(E_ALL);

    // Criação de variável para acesso ao banco de dados
    $hostname = "localhost";
    $database = "minhasnotas";
    $username = "root";
    $password = "";

    if($conecta = mysqli_connect($hostname, $username, $password, $database)){
        // echo "Conexão com o banco de dados ".$database.", efetuado com sucesso!";
    }else{
        echo "Erro: ".mysqli_connect_error();
    }