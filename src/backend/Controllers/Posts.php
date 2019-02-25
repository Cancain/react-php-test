<?php



class Posts extends Controller {
    public function __construct(){
        $this->postModel = $this->model('Post');

    }

    public function news() {
        $data = $this->postModel->getAllNews();

        $data = json_encode($data);
        echo $data;

    }

    public function showPost($id) {
        $data = $this->postModel->getNewsById($id);

        $data = json_encode($data);
        echo utf8_decode($data);
    }

    public function addPost() {
        if($_SERVER['REQUEST_METHOD'] === 'POST'){
            $data = json_decode(file_get_contents('php://input'), true); 
            $this->postModel->addNews($data);

        }
    }
}

?>