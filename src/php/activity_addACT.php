<!DOCTYPE html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<?php 
try {
  require_once("connect.php");
  $sql = "insert into act (act_no, 
          actCla_no,
          mem_no, 
          act_name,
          act_startDate, 
          act_endDate,
          act_place,
          act_limit,
          act_price,
          act_img,
          act_info) value(null,
          :actCla_no,
          :mem_no,
          :act_name,
          :act_startDate,
          :act_endDate,
          :act_place,
          :act_limit,
          :act_price,
          :act_img,
          :act_info)";

  $act = $pdo->prepare( $sql );	
  $act->bindValue(":actCla_no" ,$_REQUEST["actCla_no"]);
  $act->bindValue(":mem_no" , 1);
  $act->bindValue(":act_name" , $_REQUEST["act_name"]);
  $act->bindValue(":act_startDate" ,$_REQUEST["act_startDate"]);
  $act->bindValue(":act_endDate" ,$_REQUEST["act_endDate"]);
  $act->bindValue(":act_place" ,$_REQUEST["act_place"]);
  $act->bindValue(":act_limit" ,$_REQUEST["act_limit"]);
  $act->bindValue(":act_price" ,$_REQUEST["act_price"]);
  $act->bindValue(":act_img" ,"img/a_banner_002.jpg");
  $act->bindValue(":act_info" ,$_REQUEST["act_info"]);
  // $act->bindValue(":mem_email" ,"amy168@gmail.com");

  $act->execute();
  echo "異動成功<br>";
} catch (PDOException $ex) {
	echo "資料庫操作失敗,原因：",$ex->getMessage(),"<br>";
	echo "行號：",$ex->getLine(),"<br>";
	
}
?>
</body>
</html>