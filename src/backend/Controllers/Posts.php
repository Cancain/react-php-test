<?php

class Posts {
    public function __construct(){
        // $this->postModel = $this->model('Post');
        
    }

    public function news() {

        header("Access-Control-Allow-Origin: *");

        $data = [
            'headLine' => 'This is a headlineasdasdasd',
            'body' => 'This is a body. And i need some more text to display here'
        ];

        $data = json_encode($data);

        echo $data;
    }
}

?>