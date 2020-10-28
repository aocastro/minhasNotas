<?php

    session_start();

    $dados = array('tipo' => $_SESSION['tipo']);

    echo json_encode($dados);