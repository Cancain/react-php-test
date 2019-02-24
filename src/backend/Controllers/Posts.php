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
        echo $data;
    }

    public function addPost() {
        if($_SERVER['REQUEST_METHOD'] === 'POST'){

          var_dump($_POST);

        }
    }
}

?>