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
}

?>