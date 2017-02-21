<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Examples</title>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="" rel="stylesheet">
</head>
<body>
<?php 

try{
	require_once("connect.php");
	$sql = "select * from mem where mem _email = :mem _email and mem_psw = :mem_psw";
	$member = $pdo->prepare($sql);
	$member -> bindValue(":mem _email",$_REQUEST["memEmail"]);
	$member -> bindValue(":mem_psw",$_REQUEST["memPsw"]);
	$member -> execute();

	if($member->rowCount() == 0){
	   $memRow = $member->fetch();
	   echo  $memRow["memName"] , ", 您好~<br>";
	}
	echo "連線成功";
}catch(PDOException $ex){
  echo "資料庫操作失敗，原因 : " , $ex->getMessage() , "<br>";
  echo "行號 : " , $ex->getLine() , "<br>";
}

?>    

</body>
</html>