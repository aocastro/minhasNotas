<?php

    session_start();

    if(@$_SESSION['id']){
        $dados = array(
            'return' => true,
            'nome' => $_SESSION['nome']
        );
    }else{
        $dados = array('return' => false);
    }

    echo json_encode($dados);