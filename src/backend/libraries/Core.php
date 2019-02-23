<?php

/*
 *App Core Class
 *Creates URL & loads core controller
 *URL FORMAT - /controller/method/params
 */

header("Access-Control-Allow-Origin: *");

$init = new Core();
class Core{
    
    protected $currentController = 'Posts';
    protected $currentMethod = 'news';
    protected $params = [];

    public function __construct(){
        // print_r($this->getUrl());
        header("Access-Control-Allow-Origin: *");

        $url = $this->getUrl(); 

        //look in controllers for first value
        if (file_exists('../Controllers/'. ucwords($url[0]) . '.php')){
            //if exists, set as controller
            $this->currentController = ucwords($url[0]);
            //unser 0 index
            unset($url[0]);
        }

        //require the controller
        require_once '../Controllers/' . $this->currentController . '.php';

        //instantiate controller class
        $this->currentController = new $this->currentController;

        //check for second part of the url
        if(isset($url[1])){
            //Check to see if method exists in controller
            if(method_exists($this->currentController, $url[1])){
                $this->currentMethod = $url[1];

                //unset 1 index
                unset($url[1]);
            }
        }

        //Get params
        $this->params = $url ? array_values($url) : [];

        //Call a callback with array of params 
        call_user_func_array([$this->currentController, $this->currentMethod], $this->params);

    }

    public function getUrl(){
        $originalUrl = $_SERVER['REQUEST_URI'];
        $url = rtrim($originalUrl, '/');
        $url = filter_var($url, FILTER_SANITIZE_URL);
        $url = explode('/', $url);
        $url = array_slice($url, -3);

        if($url[0] === 'Core.php'){
            $url[0] = $url[1];
            $url[1] = $url[2]; 
        }

        return $url;

    }

    public function getUrlold(){
        if(isset($_GET['url'])){
            $url = rtrim($_GET['url'], '/');
            $url = filter_var($url, FILTER_SANITIZE_URL);
            $url = explode('/', $url);
            return $url;
        }
    }
    
}