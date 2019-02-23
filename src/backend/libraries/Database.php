<?php

class Database{

    //Variables for database connection
    private $host = DB_HOST;
    private $user = DB_USER;
    private $pass = DB_PASS;
    private $dbname = DB_NAME;

    private $connection;
    private $stmt;
    private $error;

    public function __construct(){
        //Set up the dsn
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbname;
        //Options for the connection
        $settings = array(
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        );

        //Makes the connection, echoes out errormessage if it fails
        try {
            $this->connection = new PDO($dsn, $this->user, $this->pass, $settings);
        } catch (PDOException $error) {
            $this->error = $error->getMessage();
            echo $this->error;
        }
    }

    public function query($sql){
        $this->stmt = $this->connection->prepare($sql);
    }

    public function bind($param, $value, $type = null){
        if (is_null($type)){
            switch(true){
                case is_int($value):
                    $type = PDO::PARAM_INT;
                    break;
                case is_bool($value):
                    $type = PDO::PARAM_BOOL;
                    break;
                case is_null($value):
                    $type = PDO::PARAM_NULL;
                    break;
                default:
                    $type = PDO::PARAM_STR;
            }
        }    
        $this->stmt->bindValue($param, $value, $type);
    }

    public function execute(){
        $this->stmt->execute();
    }

    public function fetchSingle(){
        $this->execute();
        return $this->stmt->fetch(PDO::FETCH_OBJ);
    }

    public function fetchMultiple(){
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_OBJ);
    }

    public function rowcount(){
        return $this->stmt->rowCount();
    }

}