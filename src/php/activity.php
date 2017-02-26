<?php
      // $lat = $_REQUEST["act_lat"];
      // $point = '20.876571';
      // echo round($lat,5),"<br>",round($point,5),"<br>";

      // if( $lat>$point){
      //   echo "HAAHAH";
      // }else{
        // echo "no";
      // }

try{
  require_once("connect.php");



  if(isset($_REQUEST["actCla_no"])){
      $sql = "select act_lat,act_lng from act where actCla_no=:actCla_no";
      $act = $pdo->prepare( $sql );
      $act->bindValue(":actCla_no", $_REQUEST["actCla_no"]);
      
  }



  if(isset($_REQUEST["act_startDate"]) || isset($_REQUEST["act_endDate"])){

    $sql = "select * from act where act_endDate between '".$_REQUEST["act_startDate"]."' and '".$_REQUEST["act_endDate"]."'";
    $act = $pdo->prepare( $sql );
    
  }

  if(isset($_REQUEST["act_lat"])){
      $lat = $_REQUEST["act_lat"];
      $point = '23.876571';
      if( $lat>=$point){
        $sql = "select act_lat,act_lng from act where act_lat>=$lat";

        $act = $pdo->prepare( $sql );
        $act->bindValue($lat,$_REQUEST["act_lat"]);
       
      }
      
  }//lanLng end


  if(isset($_REQUEST["act_name"])){
      $str = '%'.$_REQUEST["act_name"].'%';
        $sql = "select act_lat,act_lng from act where act_name like '".$str."'";
        $act = $pdo->prepare( $sql );
      
  }//searchStr end
  
  if(isset($_REQUEST["all"])){
     
        $sql = "select * from act";
        $act = $pdo->prepare( $sql );
      
  }//

  if(isset($_REQUEST["act_no"])){
        
        $sql = "select * from act join actCla using(actCla_no) where act_no=:act_no";
        $act = $pdo->prepare( $sql );
        $act->bindValue(":act_no",$_REQUEST["act_no"]);


        // $sql = "select * from actMsg,act where act.act_no=:act_no";
        // $act = $pdo->prepare( $sql );
        // $act->bindValue(":act_no",$_REQUEST["act_no"]);
      
  }//


  if(isset($_REQUEST["actCom_no"])){

        $sql = "select * from actMsg,act where act.act_no=:act_no and actMsg.act_no=:act_no";
        $act = $pdo->prepare( $sql );
        $act->bindValue(":act_no",$_REQUEST["actCom_no"]);
      
  }//





  $act->execute();//執行
  if( $act->rowCount() == 0 ){ //找不到
    //傳回空的JSON字串
    echo "{}";
  }else{ //找得到
    $actArray =array();
    while($actRow = $act->fetch(PDO::FETCH_ASSOC)){
      $actArray[] = $actRow; 
      
    }
    //送出json字串
    echo json_encode($actArray);
  }	
}catch(PDOException $e){
  echo $e->getMessage();
  echo "行號 : " , $ex->getLine() , "<br>";
}
?>