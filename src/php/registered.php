<?php 
 header('Content-Type: application/json; charset=UTF-8');
try{
	require_once("connect.php");
	$sql = "select * from mem where mem_email = :mem_email and mem_psw = :mem_psw";
	$member = $pdo->prepare($sql);
	$member -> bindValue(":mem_email",$_GET['memEmail']);
	$member -> bindValue(":mem_psw",$_GET["memPsw"]);
	$member -> execute();

			  if( $member->rowCount() == 0 ){
			    echo json_encode(array('msg' => 'fail'));
			  }else{ 
			    $memRow = $member->fetch(PDO::FETCH_ASSOC);
			    echo json_encode( $memRow );
			  }	
}catch(PDOException $e){
  echo $e->getMessage();
}







 ?>