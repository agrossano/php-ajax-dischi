<?php 

header('Content-Type: application/json');

include __DIR__. '/db.php';


echo json_encode($db);

?>
