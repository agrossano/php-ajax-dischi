<?php 

header('Content-Type: application/json');

include __DIR__. '/db.php';


$searchedAuthor = $_GET['artist'];
$searchedResult = [];


foreach ($db as $key) {
  if ((stripos($key['author'], $searchedAuthor) !==false)) {
    $searched[] = ($key);
  }
};


echo json_encode($searched);


?>