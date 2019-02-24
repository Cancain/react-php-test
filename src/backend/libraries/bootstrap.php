<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once( '../config/Config.php');


require_once('Core.php');
require_once('Controller.php');
require_once('Database.php');

$init = new Core();

