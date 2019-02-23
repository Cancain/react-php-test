<?php
    header("Access-Control-Allow-Origin: *");

    $data = [
        'headLine' => 'This is a headline',
        'body' => 'This is a body. And i need some more text to display here'
    ];

    $data = json_encode($data);

    echo $data;

?>