<?php
if($_POST['first'] != '' && $_POST['second'] != '') {
    $firsNum = $_POST["first"];
    $secondNum = $_POST["second"];
    $operator = $_POST["group1"];
    
    if($operator == "add") {
        echo $firsNum + $secondNum;
    } elseif($operator == "subtract") {
        echo $firsNum - $secondNum;
    } elseif($operator == "times") {
        echo $firsNum * $secondNum;
    } else {
        echo $firsNum / $secondNum;
    }

} else {
    echo "How am I suppose to answer if you do not fill me?";
}
?>