<?php
/*
 *Base Controller
 *Loads the models and views
 */

class Controller {
    //Load model
    public function model($model){
        //requre model file
        require_once '../Models/' . $model . '.php';

        //instantiate new model
        return new $model();
    }
}