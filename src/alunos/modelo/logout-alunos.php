<?php

    session_start();

    if(session_destroy()){
        $dados = array('return' => true);
    }else{
        $dados = array('return' => false);
    }

    echo json_encode($dados);