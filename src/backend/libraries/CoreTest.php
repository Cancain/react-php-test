<?php

class core {
    protected $currentController = null;
    protected $currentMethod = null;
    protected $params = null;
    
    public function __construct() {
        $url = $this->getUrl(); 

        die($url);
    }

    public function getUrl(){
        if(isset($_GET['url'])){
            $url = rtrim($_GET['url'], '/');
            $url = filter_var($url, FILTER_SANITIZE_URL);
            $url = explode('/', $url);
            return $url;
        }
    }
}

