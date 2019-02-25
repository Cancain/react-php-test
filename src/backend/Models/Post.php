<?php

class Post{
    private $db;

    public function __construct(){
        $this->db = new Database();
    }

    public function getAllNews() {
        $this->db->query('SELECT * FROM news
                            ORDER BY createdAt desc');

        $data = $this->db->fetchMultiple();

        return $data;

    }

    public function getNewsById($id) {
        $this->db->query('SELECT * FROM news
                            WHERE id = :id');
        
        $this->db->bind('id', $id);

        $data = $this->db->fetchSingle();

        return $data;
    }

    public function addNews($data){
        $this->db->query('INSERT INTO news(headLine, body)
                            VALUES(:headLine, :body)');

        $this->db->bind('headLine', $data['title']);
        $this->db->bind('body', $data['body']);

        $this->db->execute();

    }
}

?>