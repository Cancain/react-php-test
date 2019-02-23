<?php

class Post{
    private $db;

    public function __construct(){
        $this->db = new Database();
    }

    public function getAllNews() {
        $this->db->query('SELECT * FROM news');

        $data = $this->db->fetchMultiple();

        return $data;

    }
}

?>