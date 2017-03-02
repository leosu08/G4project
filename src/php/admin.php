
<?php 
try {
  require_once("connect.php");
/*=====================================
            新增專欄
    =======================================*/
// if(isset($_REQUEST["add_name"])){
//   $sql = "insert into act value(null,'".$_REQUEST["add_class"]."','".$_REQUEST["add_name"]."','".$_REQUEST["mem_no"]."',
// '2017-2-19 21:00','2017-2-20 21:00','".$_REQUEST["add_place"]."','".$_REQUEST["add_lat"]."','".$_REQUEST["add_lng"]."','".$_REQUEST["add_limit"]."','".$_REQUEST["add_price"]."','img/a_001.jpg',
// '".$_REQUEST["add_info"]."')";
//   $act = $pdo->prepare($sql);
//   $act->execute();
// }



/*=====================================
            審核活動
    =======================================*/
if(isset($_REQUEST["act_stateNo"])){
  $sql = "update act set act_state='".$_REQUEST["act_stateNum"]."' where act_no='".$_REQUEST["act_stateNo"]."'";
  $act = $pdo->prepare($sql);
  $act -> execute();
  $actArray = array("act_state"=>$_REQUEST["act_stateNum"],"act_no"=>$_REQUEST["act_stateNo"]);


  echo json_encode($actArray);
}
/*=====================================
            編輯文章
    =======================================*/
if(isset($_REQUEST["pla_change"])){
  $sql = "select * from pla join plaCla using(plaCla_no) join mem using(mem_no) where pla_no=:pla_change";
  $pla = $pdo->prepare($sql);
  $pla->bindValue(":pla_change",$_REQUEST["pla_change"]);
  $pla->execute();
  $plaRow = $pla->fetch(PDO::FETCH_ASSOC);
  $plaArray=array($plaRow);
    //送出json字串
  echo json_encode($plaArray);  
}
/*=====================================
            取消檢舉狀態
    =======================================*/
if(isset($_REQUEST["pla_reportNo"])){
  $sql = "update pla set pla_report='".$_REQUEST["pla_reportNum"]."' where pla_no='".$_REQUEST["pla_reportNo"]."'";
  $pla = $pdo->prepare($sql);
  $pla -> execute();
  $plaArray = array("pla_report"=>$_REQUEST["pla_reportNum"],"pla_no"=>$_REQUEST["pla_reportNo"]);


  echo json_encode($plaArray);
}
/*=====================================
            審核活動
    =======================================*/
if(isset($_REQUEST["act_state"])){
  $sql = "update act set act_state='".$_REQUEST["act_state"]."' where act_no='".$_REQUEST["act_state_no"]."'";
  $act = $pdo->prepare($sql);
  $act -> execute();
  $actArray = array("act_state"=>$_REQUEST["act_state"],"act_no"=>$_REQUEST["act_state_no"]);


  echo json_encode($actArray);
}
/*=====================================
            刪除活動
    =======================================*/
if(isset($_REQUEST["act_delete"])){
  $sql = "delete from act where act_no=:act_delete";
  
  $act = $pdo->prepare($sql);
  $act->bindValue(":act_delete",$_REQUEST["act_delete"]);
  $act -> execute();
  $actArray = array("status"=>"刪除成功");


  echo json_encode($actArray);
}

/*=====================================
            修改活動
    =======================================*/
if(isset($_REQUEST["act_change"])){
  $sql = "select * from act join actCla using(actCla_no) join mem using(mem_no) where act_no=:act_change";
  $act = $pdo->prepare($sql);
  $act->bindValue(":act_change",$_REQUEST["act_change"]);
  $act->execute();
  $actRow = $act->fetch(PDO::FETCH_ASSOC);
  $actArray=array($actRow);
    //送出json字串
  echo json_encode($actArray);  
}


/*=====================================
            新增活動     
    =======================================*/
if(isset($_REQUEST["add_name"])){
  $sql = "insert into act value(null,'".$_REQUEST["add_class"]."','".$_REQUEST["add_name"]."','".$_REQUEST["mem_no"]."',
'2017-2-19 21:00','2017-2-20 21:00','".$_REQUEST["add_place"]."','".$_REQUEST["add_lat"]."','".$_REQUEST["add_lng"]."','".$_REQUEST["add_limit"]."','".$_REQUEST["add_price"]."','img/a_001.jpg',
'".$_REQUEST["add_info"]."')";
  $act = $pdo->prepare($sql);
  $act->execute();
  header('location:../admin.php');
}

/*================================
            mem權限開關
===================================*/
  if(isset($_REQUEST["mem_close"])){

    if($_REQUEST["mem_close"]==1){
      $sql = "update mem set mem_close=0 where mem_no = 1";
    }else{
      $sql = "update mem set mem_close=1 where mem_no = 1";
    }
    $mem = $pdo ->prepare( $sql );
    $mem -> execute();



    $sql2 = "select * from mem";
    $mem2 = $pdo->prepare( $sql2 ); 
    $mem2->execute();

    $memRow2= $mem2->fetch(PDO::FETCH_ASSOC);
    $memArray=array($memRow2);
    //送出json字串
    echo json_encode($memArray);
  }


/*================================
             新增管理員
===================================*/
  if(isset($_REQUEST["adm_name"])){
    $sql="insert into adm value(null,'".$_REQUEST["adm_name"]."','".$_REQUEST["adm_acc"]."','".$_REQUEST["adm_psw"]."')";
    $adm = $pdo->prepare($sql);
    $adm ->execute();

    $sql2="select * from adm order by adm_no desc limit 1";
    $adm2 = $pdo->prepare($sql2);
    $adm2 ->execute();
    $admRow2 = $adm2->fetch(PDO::FETCH_ASSOC);
    $admArray = array($admRow2);


    echo json_encode($admArray);
  }
/*================================
            刪除管理員
===================================*/
  if(isset($_REQUEST["adm_delete"])){
    $sql="delete from adm where adm_no ='".$_REQUEST["adm_delete"]."'";
    $adm = $pdo->prepare($sql);
    $adm ->execute();



    $admArray = array("adm_delete"=>$_REQUEST["adm_delete"]);


    echo json_encode($admArray);
  }  

/*================================
          修改管理員
===================================*/
if(isset($_REQUEST["adm_nameChange"]) || isset($_REQUEST["adm_accChange"]) || isset($_REQUEST["adm_pswChange"])){
  $sql = "update adm set  adm_name='".$_REQUEST["adm_nameChange"]."',adm_acc='".$_REQUEST["adm_accChange"]."',adm_psw='".$_REQUEST["adm_pswChange"]."' where adm_no='".$_REQUEST["adm_no"]."'";
  $adm = $pdo->prepare($sql);
  $adm ->execute();
  $admArray = array("status"=>"修改成功");


  echo json_encode($admArray);
}



} catch (PDOException $ex) {
	echo "資料庫操作失敗,原因：",$ex->getMessage(),"<br>";
	echo "行號：",$ex->getLine(),"<br>";
	
}
?>
